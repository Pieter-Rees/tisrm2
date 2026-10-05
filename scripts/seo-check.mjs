#!/usr/bin/env node
/**
 * Crawl baseline URLs against a configurable base and compare with seo-baseline.json.
 *
 * Usage:
 *   SEO_CHECK_BASE_URL=http://localhost:3011 npm run seo:check
 *   SEO_CHECK_BASE_URL=https://tisrm.nl npm run seo:check
 */

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const baselinePath = join(root, 'seo-baseline.json');
const reportPath = join(root, 'AFTER_CHECK.md');

const PRODUCTION_ORIGIN = 'https://tisrm.nl';
const baseUrl = (process.env.SEO_CHECK_BASE_URL || 'http://localhost:3011').replace(
  /\/$/,
  '',
);
const isProductionBase = /^https:\/\/(www\.)?tisrm\.nl$/i.test(baseUrl);

const keywordRedirects = [
  { from: '/taxiverzekering', to: '/taxi' },
  { from: '/taxi-verzekering', to: '/taxi' },
];

const FAIL_FIELDS = new Set(['visibleBodyHash', 'h1', 'navHash']);

function sha256(text) {
  return `sha256:${createHash('sha256').update(text).digest('hex')}`;
}

function collapseWhitespace(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function stripTags(html, tagName) {
  const re = new RegExp(`<${tagName}\\b[^>]*>[\\s\\S]*?<\\/${tagName}>`, 'gi');
  return html.replace(re, '');
}

function getAttr(tag, attr) {
  const double = tag.match(new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, 'i'));
  if (double) return double[1];
  const single = tag.match(new RegExp(`${attr}\\s*=\\s*'([^']*)'`, 'i'));
  if (single) return single[1];
  return null;
}

function getMetaContent(html, { name, property }) {
  const metas = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metas) {
    const n = getAttr(tag, 'name');
    const p = getAttr(tag, 'property');
    if ((name && n?.toLowerCase() === name.toLowerCase()) ||
      (property && p?.toLowerCase() === property.toLowerCase())) {
      const content = getAttr(tag, 'content');
      return content == null ? null : decodeEntities(content);
    }
  }
  return null;
}

function getCanonical(html) {
  const links = html.match(/<link\b[^>]*>/gi) || [];
  for (const tag of links) {
    const rel = getAttr(tag, 'rel');
    if (rel?.toLowerCase().split(/\s+/).includes('canonical')) {
      return getAttr(tag, 'href');
    }
  }
  return null;
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function getTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? decodeEntities(collapseWhitespace(match[1])) : null;
}

function getHtmlLang(html) {
  const match = html.match(/<html\b([^>]*)>/i);
  if (!match) return null;
  return getAttr(`<html ${match[1]}>`, 'lang');
}

function getH1(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  const match = body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) return null;
  return collapseWhitespace(match[1].replace(/<[^>]+>/g, ' '));
}

function getNavHash(html) {
  const navMatch = html.match(/<nav\b[^>]*>([\s\S]*?)<\/nav>/i);
  if (!navMatch) return null;
  const text = collapseWhitespace(navMatch[1].replace(/<[^>]+>/g, ' '));
  return sha256(text);
}

function getVisibleBodyHash(html) {
  let body = html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  for (const tag of ['script', 'style', 'noscript', 'template']) {
    body = stripTags(body, tag);
  }
  const text = collapseWhitespace(body.replace(/<[^>]+>/g, ' '));
  return sha256(text);
}

function getJsonLdBlocks(html) {
  const blocks = [];
  const re =
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

function collectJsonLdTypes(blocks) {
  const types = new Set();
  for (const block of blocks) {
    try {
      const data = JSON.parse(block);
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        const type = node['@type'];
        if (Array.isArray(type)) type.forEach(t => types.add(t));
        else if (typeof type === 'string') types.add(type);
      }
    } catch {
      types.add('INVALID_JSON');
    }
  }
  return [...types].sort();
}

function validateJsonLd(blocks) {
  const errors = [];
  for (const [index, block] of blocks.entries()) {
    try {
      JSON.parse(block);
    } catch (error) {
      errors.push(`block ${index + 1}: ${error.message}`);
    }
  }
  return errors;
}

function absolutizeCanonical(canonical, finalUrl) {
  if (!canonical) return null;
  try {
    return new URL(canonical, finalUrl).href.replace(/\/$/, '') ===
      new URL(PRODUCTION_ORIGIN).href.replace(/\/$/, '')
      ? PRODUCTION_ORIGIN
      : new URL(canonical, finalUrl).href;
  } catch {
    return canonical;
  }
}

function normalizeComparableUrl(url) {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname === '/' ? '' : parsed.pathname.replace(/\/$/, '');
    return `${parsed.origin}${path}`;
  } catch {
    return url;
  }
}

function rewriteInputToBase(inputUrl) {
  const parsed = new URL(inputUrl);
  const path = parsed.pathname + parsed.search;
  // Host-variant probes only make sense against production.
  if (parsed.host !== 'tisrm.nl' && parsed.host !== 'www.tisrm.nl') {
    return `${baseUrl}${path === '/' ? '/' : path}`;
  }
  if (!isProductionBase && (parsed.protocol === 'http:' || parsed.host.startsWith('www.'))) {
    return null;
  }
  if (isProductionBase) {
    return inputUrl;
  }
  return `${baseUrl}${path === '/' ? '/' : path}`;
}

async function fetchChain(startUrl, { maxHops = 5 } = {}) {
  const chain = [];
  let current = startUrl;
  let hops = 0;

  while (hops <= maxHops) {
    const response = await fetch(current, {
      redirect: 'manual',
      headers: { 'user-agent': 'tisrm-seo-check/1.0' },
    });
    const status = response.status;
    const location = response.headers.get('location');
    chain.push({ url: current, status, location });

    if (status >= 300 && status < 400 && location) {
      current = new URL(location, current).href;
      hops += 1;
      continue;
    }

    const html = status === 200 ? await response.text() : '';
    return {
      statusCode: status,
      finalUrl: current,
      redirectHops: hops,
      redirectChain: chain,
      html,
    };
  }

  return {
    statusCode: chain.at(-1)?.status ?? 0,
    finalUrl: current,
    redirectHops: hops,
    redirectChain: chain,
    html: '',
    loop: true,
  };
}

function extractPage(result) {
  const { html, statusCode, finalUrl, redirectHops, redirectChain } = result;
  const jsonLdBlocks = html ? getJsonLdBlocks(html) : [];
  const jsonLdErrors = validateJsonLd(jsonLdBlocks);
  const robotsValues = [];
  const metas = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metas) {
    if (getAttr(tag, 'name')?.toLowerCase() === 'robots') {
      robotsValues.push(getAttr(tag, 'content'));
    }
  }

  return {
    statusCode,
    finalUrl,
    redirectHops,
    redirectChain: redirectChain.map(step => ({
      url: step.url,
      status: step.status,
      location: step.location,
    })),
    title: html ? getTitle(html) : null,
    metaDescription: html ? getMetaContent(html, { name: 'description' }) : null,
    canonical: html ? getCanonical(html) : null,
    robots: robotsValues.join(' | ') || null,
    htmlLang: html ? getHtmlLang(html) : null,
    h1: html ? getH1(html) : null,
    // Keys match seo-baseline.json (`og:title`, …).
    openGraph: {
      'og:title': html ? getMetaContent(html, { property: 'og:title' }) : null,
      'og:description': html
        ? getMetaContent(html, { property: 'og:description' })
        : null,
      'og:url': html ? getMetaContent(html, { property: 'og:url' }) : null,
      'og:image': html ? getMetaContent(html, { property: 'og:image' }) : null,
      'og:type': html ? getMetaContent(html, { property: 'og:type' }) : null,
    },
    jsonLdPresent: jsonLdBlocks.length > 0,
    jsonLdTypes: collectJsonLdTypes(jsonLdBlocks),
    jsonLdErrors,
    visibleBodyHash: html ? getVisibleBodyHash(html) : null,
    navHash: html ? getNavHash(html) : null,
  };
}

function expectedCanonicalForPath(path) {
  return path === '/' ? PRODUCTION_ORIGIN : `${PRODUCTION_ORIGIN}${path}`;
}

function pathFromInput(inputUrl) {
  return new URL(inputUrl).pathname.replace(/\/$/, '') || '/';
}

function comparePages(baselinePage, current, { skipHostVariants }) {
  const failures = [];
  const diffs = [];

  const fields = [
    'statusCode',
    'finalUrl',
    'redirectHops',
    'title',
    'metaDescription',
    'canonical',
    'robots',
    'htmlLang',
    'h1',
    'visibleBodyHash',
    'navHash',
  ];

  for (const field of fields) {
    const oldValue = baselinePage[field];
    const newValue = current[field];
    if (oldValue !== newValue && !(oldValue == null && newValue == null)) {
      // finalUrl host differs when checking against localhost — compare paths.
      if (field === 'finalUrl' && !isProductionBase) {
        const oldPath = new URL(oldValue).pathname;
        const newPath = new URL(newValue).pathname;
        if (oldPath === newPath || (oldPath === '/' && newPath === '/')) {
          continue;
        }
      }
      diffs.push({ field, old: oldValue, new: newValue });
      if (FAIL_FIELDS.has(field)) {
        failures.push(`${field} changed`);
      }
    }
  }

  const oldOg = baselinePage.openGraph || {};
  const newOg = current.openGraph || {};
  for (const key of [
    'og:title',
    'og:description',
    'og:url',
    'og:image',
    'og:type',
  ]) {
    if (oldOg[key] !== newOg[key] && !(oldOg[key] == null && newOg[key] == null)) {
      diffs.push({ field: `openGraph.${key}`, old: oldOg[key], new: newOg[key] });
    }
  }

  const intendedRedirect =
    baselinePage.redirectHops > 0 || baselinePage.statusCode >= 300;
  const okStatus =
    current.statusCode === 200 ||
    (intendedRedirect && current.statusCode === 200) ||
    [301, 302, 307, 308].includes(current.redirectChain[0]?.status);

  if (!skipHostVariants) {
    if (current.statusCode !== 200 && current.redirectHops === 0) {
      failures.push(`unexpected status ${current.statusCode}`);
    }
  } else if (current.statusCode !== 200) {
    failures.push(`unexpected status ${current.statusCode}`);
  }

  if (current.redirectHops > 1 || current.loop) {
    failures.push(`redirect hops ${current.redirectHops}${current.loop ? ' (loop)' : ''}`);
  }

  if (!current.title) failures.push('missing title');
  if (!current.h1) failures.push('missing H1');

  const robotsLower = (current.robots || '').toLowerCase();
  if (robotsLower.includes('noindex')) failures.push('noindex present');

  if (!current.canonical) {
    failures.push('missing canonical');
  } else {
    const path = pathFromInput(baselinePage.inputUrl);
    const expected = expectedCanonicalForPath(path === '/' ? '/' : path);
    const actual = absolutizeCanonical(current.canonical, current.finalUrl);
    const expectedNorm = normalizeComparableUrl(expected);
    const actualNorm = normalizeComparableUrl(actual);
    // Home may be https://tisrm.nl or https://tisrm.nl/
    if (
      actualNorm !== expectedNorm &&
      !(path === '/' && (actual === PRODUCTION_ORIGIN || actual === `${PRODUCTION_ORIGIN}/`))
    ) {
      // Against localhost, absolute canonicals should still point at production.
      if (actualNorm !== expectedNorm) {
        failures.push(`canonical mismatch: ${actual} (expected ${expected})`);
      }
    }
  }

  if (current.jsonLdErrors?.length) {
    failures.push(`invalid JSON-LD: ${current.jsonLdErrors.join('; ')}`);
  }

  // Host-variant pages are only informative against local bases.
  void okStatus;

  return { failures: [...new Set(failures)], diffs };
}

async function checkKeywordRedirect(fromPath, toPath) {
  const start = `${baseUrl}${fromPath}`;
  const result = await fetchChain(start);
  const failures = [];
  const first = result.redirectChain[0];
  const permanent = first && [301, 308].includes(first.status);
  if (!permanent) {
    failures.push(
      `${fromPath} did not permanently redirect (got ${first?.status ?? 'none'})`,
    );
  }
  if (result.redirectHops !== 1) {
    failures.push(`${fromPath} hops=${result.redirectHops} (expected 1)`);
  }
  const finalPath = new URL(result.finalUrl).pathname.replace(/\/$/, '') || '/';
  if (finalPath !== toPath) {
    failures.push(`${fromPath} final path ${finalPath} (expected ${toPath})`);
  }
  return {
    fromPath,
    toPath,
    status: first?.status ?? null,
    hops: result.redirectHops,
    finalUrl: result.finalUrl,
    failures,
  };
}

function renderReport({
  capturedAt,
  baseUrl: reportBase,
  pageResults,
  redirectResults,
  passed,
}) {
  const lines = [
    '# AFTER_CHECK',
    '',
    `Captured **${capturedAt}** against \`${reportBase}\`.`,
    '',
    `## Summary: ${passed ? 'PASS' : 'FAIL'}`,
    '',
  ];

  const failCount = pageResults.filter(p => p.failures.length).length;
  const redirectFails = redirectResults.filter(r => r.failures.length).length;
  lines.push(
    `- Pages with failures: ${failCount}/${pageResults.length}`,
    `- Keyword redirect failures: ${redirectFails}/${redirectResults.length}`,
    '',
    '## Keyword redirects',
    '',
  );

  for (const redirect of redirectResults) {
    const mark = redirect.failures.length ? 'FAIL' : 'PASS';
    lines.push(
      `- ${mark}: \`${redirect.fromPath}\` → \`${redirect.toPath}\` (status ${redirect.status}, hops ${redirect.hops}, final ${redirect.finalUrl})`,
    );
    for (const failure of redirect.failures) {
      lines.push(`  - ${failure}`);
    }
  }

  lines.push('', '## Per-URL diffs', '');

  for (const page of pageResults) {
    const mark = page.failures.length ? 'FAIL' : 'PASS';
    lines.push(`### ${mark}: \`${page.inputUrl}\``);
    if (page.skipped) {
      lines.push('', `_Skipped against non-production base (${page.skipped})_`, '');
      continue;
    }
    lines.push('');
    if (!page.diffs.length && !page.failures.length) {
      lines.push('- No field changes.', '');
      continue;
    }
    for (const diff of page.diffs) {
      lines.push(`- **${diff.field}**: \`${diff.old}\` → \`${diff.new}\``);
    }
    if (page.failures.length) {
      lines.push('', 'Failures:');
      for (const failure of page.failures) {
        lines.push(`- ${failure}`);
      }
    }
    lines.push('');
  }

  return `${lines.join('\n').trim()}\n`;
}

async function main() {
  const baseline = JSON.parse(readFileSync(baselinePath, 'utf8'));
  const pageResults = [];

  for (const baselinePage of baseline.pages) {
    const target = rewriteInputToBase(baselinePage.inputUrl);
    if (!target) {
      pageResults.push({
        inputUrl: baselinePage.inputUrl,
        skipped: 'host variant not applicable locally',
        failures: [],
        diffs: [],
      });
      continue;
    }

    const fetched = await fetchChain(target);
    const current = extractPage(fetched);
    // Seed navHash onto baseline comparison by computing from current only when baseline lacks it.
    const baselineWithNav = {
      ...baselinePage,
      navHash: baselinePage.navHash ?? current.navHash,
    };
    const { failures, diffs } = comparePages(baselineWithNav, current, {
      skipHostVariants: !isProductionBase,
    });

    pageResults.push({
      inputUrl: baselinePage.inputUrl,
      target,
      current,
      failures,
      diffs,
    });
  }

  const redirectResults = [];
  for (const rule of keywordRedirects) {
    redirectResults.push(await checkKeywordRedirect(rule.from, rule.to));
  }

  const passed =
    pageResults.every(page => page.failures.length === 0) &&
    redirectResults.every(redirect => redirect.failures.length === 0);

  const capturedAt = new Date().toISOString();
  const report = renderReport({
    capturedAt,
    baseUrl,
    pageResults,
    redirectResults,
    passed,
  });
  writeFileSync(reportPath, report, 'utf8');

  console.log(report);
  console.log(`Wrote ${reportPath}`);
  process.exit(passed ? 0 : 1);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});

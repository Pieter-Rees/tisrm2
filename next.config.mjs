/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  experimental: {
    ...(process.env.TURBOPACK !== '1' && {
      optimizePackageImports: [
        '@chakra-ui/react',
        'framer-motion',
        'react-icons',
      ],
      typedRoutes: true,
      optimizeCss: true,
      scrollRestoration: true,
    }),
  },
  serverExternalPackages: ['@next/bundle-analyzer'],
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    resolveAlias: {
      '@': './src',
    },
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  ...(process.env.TURBOPACK !== '1' && {
    modularizeImports: {
      '@chakra-ui/react': {
        transform: '@chakra-ui/react/{{member}}',
      },
      'react-icons': {
        transform: 'react-icons/{{member}}',
      },
      'react-icons/bs': {
        transform: 'react-icons/bs/{{member}}',
      },
      'react-icons/hi': {
        transform: 'react-icons/hi/{{member}}',
      },
    },
  }),
  bundlePagesRouterDependencies: true,
  ...(process.env.ANALYZE === 'true' &&
    process.env.TURBOPACK !== '1' && {
      webpack: (config, { isServer }) => {
        if (!isServer) {
          const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')();
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
            }),
          );
        }
        return config;
      },
    }),
};

export default nextConfig;

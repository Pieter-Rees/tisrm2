import { UnifiedLayout } from '@/components/layout';
import { DownloadsGrid } from '@/components/cms/downloadsGrid';
import { PageSections } from '@/components/cms/pageSections';
import { AVAILABLE_DOCUMENTS } from '@/data/content';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';

export const dynamic = 'force-dynamic';

export default async function Downloads() {
  const page = await getPageBySlug('downloads');
  const fallbackDocuments = AVAILABLE_DOCUMENTS.map((doc) => ({
    title: doc.title,
    downloadLink: doc.link,
  }));
  const documents =
    page?.documents?.length ? page.documents : fallbackDocuments;

  return (
    <UnifiedLayout title={page?.title || 'Downloads'}>
      {page?.sections?.length ? (
        <PageSections sections={page.sections} />
      ) : (
        <DownloadsGrid documents={documents} />
      )}
    </UnifiedLayout>
  );
}

import { DownloadsGrid } from '@/components/cms/downloadsGrid';
import { UnifiedLayout } from '@/components/layout';
import { AVAILABLE_DOCUMENTS } from '@/data/content';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';

export const dynamic = 'force-dynamic';

export default async function Bestanden() {
  const page = await getPageBySlug('downloads');
  const fallbackDocuments = AVAILABLE_DOCUMENTS.map((doc) => ({
    title: doc.title,
    downloadLink: doc.link,
  }));
  const documents =
    page?.documents?.length ? page.documents : fallbackDocuments;

  return (
    <UnifiedLayout title={page?.title || 'Bestanden'}>
      <DownloadsGrid documents={documents} />
    </UnifiedLayout>
  );
}

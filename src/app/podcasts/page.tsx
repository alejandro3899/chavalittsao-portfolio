import { Podcastspage, WorkSummary } from "@/types/cms";
import { getGlob } from "@/utils/api";
import { baseMetadata } from "@/utils/baseMetadata";
import PodcastsPage from "./PodcastsPage";
import BaseLayout from "@/components/BaseLayout";

export async function generateMetadata() {
  const { meta } = await getGlob<Podcastspage>(
    "/podcastspage",
    {},
    { next: { tags: ["podcastspage"] } }
  );

  return baseMetadata({
    title: meta?.title ?? "Podcasts",
    description: meta?.description,
    slug: "",
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export default async function Podcasts() {
  const podcasts = await getGlob<Podcastspage>(
    "/podcastspage",
    { depth: 2 },
    { next: { tags: ["podcastspage"] } }
  );
  const workSummary = await getGlob<WorkSummary>(
    "/work-summary",
    {},
    { next: { tags: ["work-summary"] } }
  );

  return (
    <BaseLayout theme="default">
      <PodcastsPage podcasts={podcasts} workSummary={workSummary} />
    </BaseLayout>
  );
}

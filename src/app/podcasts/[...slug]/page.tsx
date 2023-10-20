import { Podcast, WorkSummary } from "@/types/cms";
import { getColl, getGlob } from "@/utils/api";
import PodcastPage from "./PodcastPage";
import { notFound } from "next/navigation";
import BaseLayout from "@/components/BaseLayout";
import { baseMetadata } from "@/utils/baseMetadata";

export async function generateMetadata({ params: { slug } }: { params: any }) {
  const pageSlug = slug?.[0];
  const { docs } = await getColl<Podcast>("/podcasts-list", {
    where: { slug: { equals: pageSlug } },
  });
  const { meta } = docs?.[0] ?? { meta: {} };

  return baseMetadata({
    title: meta?.title ?? "Podcast",
    description: meta?.description,
    slug: `podcasts/${pageSlug}`,
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export async function generateStaticParams() {
  const { docs: allPodcasts } = await getColl<Podcast>("/podcasts-list");

  const params = allPodcasts.map(({ slug }) => {
    return { slug: [slug] };
  });

  return params;
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const pageSlug = slug?.[0];
  const { docs } = await getColl<Podcast>("/podcasts-list", {
    where: { slug: { equals: pageSlug } },
  });
  const podcast = docs?.[0];

  const workSummary = await getGlob<WorkSummary>(
    "/work-summary",
    {},
    { next: { tags: ["work-summary"] } }
  );

  if (!podcast) return notFound();

  return (
    <BaseLayout theme="default">
      <PodcastPage podcast={podcast} workSummary={workSummary} />
    </BaseLayout>
  );
}

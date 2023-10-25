import { Homepage, Media, WorkSummary } from "@/types/cms";
import { getGlob } from "@/utils/api";
import { baseMetadata } from "@/utils/baseMetadata";
import BaseLayout from "@/components/BaseLayout";
import HomePage from "./HomePage";

export async function generateMetadata() {
  const { meta } = await getGlob<Homepage>("/homepage");

  return baseMetadata({
    title: meta?.title ?? "Home",
    description: meta?.description,
    slug: "",
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export default async function Home() {
  const home = await getGlob<Homepage>(
    "/homepage",
    { depth: 2 },
    { next: { tags: ["homepage"] } }
  );
  const workSummary = await getGlob<WorkSummary>(
    "/work-summary",
    {},
    { next: { tags: ["work-summary"] } }
  );
  const altBranding = home.siteBranding?.image as Media;

  return (
    <BaseLayout theme="light" altBranding={altBranding}>
      <HomePage home={home} workSummary={workSummary} />
    </BaseLayout>
  );
}

import { Homepage, WorkSummary } from "@/types/cms";
import BaseLayout from "../components/BaseLayout";
import HomePage from "./HomePage";
import { getGlob } from "../utils/api";
import { baseMetadata } from "@/utils/baseMetadata";

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

  return (
    <BaseLayout theme="light">
      <HomePage home={home} workSummary={workSummary} />
    </BaseLayout>
  );
}

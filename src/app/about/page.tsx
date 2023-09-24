import { Aboutpage, WorkSummary } from "@/types/cms";
import { getGlob } from "@/utils/api";
import { baseMetadata } from "@/utils/baseMetadata";
import AboutPage from "./AboutPage";

export async function generateMetadata() {
  const { meta } = await getGlob<Aboutpage>("/aboutpage");

  return baseMetadata({
    title: meta?.title ?? "About",
    description: meta?.description,
    slug: "about",
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export default async function About() {
  const about = await getGlob<Aboutpage>(
    "/aboutpage",
    { depth: 2 },
    { next: { tags: ["aboutpage"] } }
  );
  const workSummary = await getGlob<WorkSummary>(
    "/work-summary",
    {},
    { next: { tags: ["work-summary"] } }
  );

  return (
    <>
      <AboutPage about={about} workSummary={workSummary} />
    </>
  );
}

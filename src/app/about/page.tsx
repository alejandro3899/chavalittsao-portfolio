import { Aboutpage, WorkSummary } from "@/types/cms";
import { getGlob } from "../utils/api";
import AboutPage from "./AboutPage";

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

import { Homepage, WorkSummary } from "@/types/cms";
import BaseLayout from "./components/BaseLayout";
import HomePage from "./HomePage";
import { getGlob } from "./utils/api";

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

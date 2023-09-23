import { Mediapage } from "@/types/cms";
import { getGlob } from "@/utils/api";
import { baseMetadata } from "@/utils/baseMetadata";
import MediaPage from "./MediaPage";
import BaseLayout from "@/components/BaseLayout";

export async function generateMetadata() {
  const { meta } = await getGlob<Mediapage>(
    "/mediapage",
    {},
    { next: { tags: ["mediapage"] } }
  );

  return baseMetadata({
    title: meta?.title ?? "Media",
    description: meta?.description,
    slug: "media",
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export default async function Media() {
  const media = await getGlob<Mediapage>(
    "/mediapage",
    {},
    { next: { tags: ["mediapage"] } }
  );

  return (
    <BaseLayout theme="default">
      <MediaPage media={media} />
    </BaseLayout>
  );
}

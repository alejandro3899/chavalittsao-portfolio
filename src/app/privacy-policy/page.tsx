import { Privacypolicypage } from "@/types/cms";
import { getGlob } from "@/utils/api";
import { baseMetadata } from "@/utils/baseMetadata";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import BaseLayout from "@/components/BaseLayout";

export async function generateMetadata() {
  const { meta } = await getGlob<Privacypolicypage>(
    "/privacypolicypage",
    {},
    { next: { tags: ["privacypolicypage"] } }
  );

  return baseMetadata({
    title: meta?.title ?? "Privacy Policy",
    description: meta?.description,
    slug: "",
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export default async function PrivacyPolicy() {
  const privacyPolicy = await getGlob<Privacypolicypage>(
    "/privacypolicypage",
    { depth: 2 },
    { next: { tags: ["privacypolicypage"] } }
  );

  return (
    <BaseLayout theme="default">
      <PrivacyPolicyPage privacyPolicy={privacyPolicy} />
    </BaseLayout>
  );
}

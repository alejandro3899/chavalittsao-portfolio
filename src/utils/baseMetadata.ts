import { Setting } from "@/types/cms";
import { appUrl } from ".";
import { getGlob } from "./api";
import { Metadata } from "next";

export async function baseMetadata({
  title,
  description,
  slug,
  image,
}: {
  title?: string;
  description?: string;
  slug?: string;
  image?: string;
}): Promise<Metadata> {
  const { siteTitle, siteDescription } = await getGlob<Setting>(
    "/settings",
    {},
    { next: { tags: ["settings"] } }
  );
  const pageTitle = title || siteTitle || "Chavalit Tsao";
  const pageDescription = description || siteDescription || "Chavalit Tsao";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      siteName: siteTitle || "Chavalit Tsao",
      type: "website",
      title: pageTitle,
      description: pageDescription,
      ...(slug !== undefined && { slug: `${appUrl}/${slug ?? ""}` }),
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
  };
}

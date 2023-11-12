import { Book, Navigation, Podcast } from "@/types/cms";
import { appUrl } from "@/utils";
import { getColl, getGlob } from "@/utils/api";

function addForwardSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default async function sitemap() {
  const { mainNavigation } = await getGlob<Navigation>("/navigation");
  const { docs: books } = await getColl<Book>("/books");
  const { docs: podcasts } = await getColl<Podcast>("/podcasts-list");

  const mainLinks = [
    { url: addForwardSlash(appUrl), lastModified: new Date() },
  ];
  (mainNavigation ?? [])
    ?.filter(({ type }) => type !== "dropdown")
    .forEach(({ url }) => {
      mainLinks.push({
        url: addForwardSlash(
          `${appUrl}${url.startsWith("/") ? url : `/${url}`}`
        ),
        lastModified: new Date(),
      });
    });

  const bookLinks = books.map(({ slug, updatedAt }) => ({
    url: addForwardSlash(`${appUrl}/book/${slug}`),
    lastModified: new Date(Date.parse(updatedAt)),
  }));

  const podcastLinks = podcasts.map(({ slug, updatedAt }) => ({
    url: addForwardSlash(`${appUrl}/podcast/${slug}`),
    lastModified: new Date(Date.parse(updatedAt)),
  }));

  return [...mainLinks, ...bookLinks, ...podcastLinks];
}

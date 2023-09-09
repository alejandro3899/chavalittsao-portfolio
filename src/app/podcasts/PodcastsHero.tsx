import { Media, Podcast, Podcastspage } from "@/types/cms";
import PodcastsShare from "./PodcastsShare";
import ImageKit from "@/components/ImageKit";

export default function PodcastsHero({ hero }: { hero: Podcastspage["hero"] }) {
  const { heroImage, showcasePodcast } = hero;
  const { title, summary, description, share } = showcasePodcast as Podcast;

  return (
    <section className="w-full min-h-[600px] flex items-stretch pt-[var(--nav-offset)] pb-8 sm:pb-12">
      <div className="container flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12">
        <div className="md:flex-[0.45] lg:flex-[0.5] flex flex-col justify-between gap-24 md:gap-20">
          <div className="flex flex-col">
            <h1 className="max-w-[305px] text-3xl sm:text-[32px] leading-none tracking-tighter mb-6">
              {title}
            </h1>
            <p className="max-w-[538px] text-base leading-snug tracking-tighter">
              {summary}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="max-w-[378px] hidden md:block text-sm tracking-tight leading-snug mb-6">
              {description}
            </p>
            <div className="flex gap-6 items-center">
              {share.map((sharePlatform, i) => (
                <PodcastsShare key={i} share={sharePlatform} />
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex-[0.55] lg:flex-[0.5]">
          <div className="h-full w-full flex items-center">
            <ImageKit
              image={heroImage as Media}
              alt={(heroImage as Media)?.altText ?? "Podcast"}
              width={600}
              height={750}
              className="aspect-[1_/_1.05] md:aspect-[1_/_0.9] w-full h-auto lg:h-full rounded-lg md:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

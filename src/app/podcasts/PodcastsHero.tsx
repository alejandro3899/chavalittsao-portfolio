import { Media, Podcast, Podcastspage } from "@/types/cms";
import PodcastsShare from "./PodcastsShare";
import ImageKit from "@/components/ImageKit";

export default function PodcastsHero({ hero }: { hero: Podcastspage["hero"] }) {
  const { heroImage, showcasePodcast } = hero;
  const { title, summary, description, share } = showcasePodcast as Podcast;

  return (
    <section className="min-h-[600px] w-full flex items-stretch pt-[var(--nav-offset)] pb-8 sm:pb-12">
      <div className="container lg:max-h-[800px] lg:h-[calc(100vh-var(--nav-offset))]">
        <div className="h-full w-full max-w-[600px] lg:max-w-full flex flex-col-reverse lg:flex-row items-stretch gap-8 lg:gap-12 mx-auto">
          <div className="lg:flex-[0.5] flex flex-col justify-between gap-20 lg:py-8">
            <div className="flex flex-col">
              <h1 className="lg:max-w-[305px] text-3xl sm:text-[32px] leading-none tracking-tighter mb-6">
                {title}
              </h1>
              <p className="max-w-[538px] text-base leading-snug tracking-tighter">
                {summary}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="max-w-[378px] hidden lg:block text-sm tracking-tight leading-snug mb-6">
                {description}
              </p>
              <div className="flex gap-6 items-center">
                {share.map((sharePlatform, i) => (
                  <PodcastsShare key={i} share={sharePlatform} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:flex-[0.5]">
            <div className="h-full w-full flex items-center lg:justify-end">
              <ImageKit
                image={heroImage as Media}
                alt={(heroImage as Media)?.altText ?? "Podcast"}
                width={600}
                height={750}
                className="aspect-[1_/_1.05] lg:aspect-[1_/_1.0787] max-h-full w-full h-auto lg:h-[85%] xl:h-full rounded-lg lg:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

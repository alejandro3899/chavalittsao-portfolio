import { Media, Podcast } from "@/types/cms";
import PodcastsShare from "./PodcastShare";
import ImageKit from "@/components/ImageKit";
import ClampedText from "@/components/ClampedText";

export default function PodcastHero({
  hero,
  info,
  title,
  description,
  share: podcastShare,
}: {
  title: Podcast["title"];
  description: Podcast["description"];
  hero: Podcast["hero"];
  info: Podcast["info"];
  share: Podcast["share"];
}) {
  const { heroImage } = hero;
  const { summary } = info;
  const { share } = podcastShare;

  return (
    <section className="w-full flex items-stretch pt-[var(--nav-offset)] pb-8 sm:pb-12">
      <div className="container">
        <div className="h-full w-full max-w-[600px] lg:max-w-full flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-12 mx-auto">
          <div className="lg:flex-[0.5] h-full flex flex-col justify-end lg:py-8">
            <h1 className="lg:max-w-[305px] text-3xl sm:text-[33.33px] leading-none tracking-tighter mb-6">
              {title}
            </h1>
            <div className="flex flex-col">
             
              <ClampedText
                  text={description}
                  lines={5}
                  buttonClassName="mt-0"
                  className="max-w-[538px] paragraph mb-6"
                />
               
           
              <div className="flex gap-6 items-center">
                {share.map((sharePlatform, i) => (
                  <PodcastsShare key={i} share={sharePlatform} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:flex-[0.5]">
            <div className="lg:h-[100vh] lg:h-[clamp(550px,calc(100vh-var(--nav-offset)),800px)] w-full flex items-center lg:justify-end">
              <ImageKit
                image={heroImage as Media}
                alt={(heroImage as Media)?.altText ?? "Podcast"}
                sizes="100vw"
                width={0}
                height={0}
                className="aspect-[1_/_1.20455] lg:aspect-[1_/_1.0787] max-h-full w-full h-auto lg:h-full rounded-lg lg:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

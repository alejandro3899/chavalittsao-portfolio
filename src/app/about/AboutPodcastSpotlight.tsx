import { Aboutpage, Media, Podcast } from "@/types/cms";
import Button from "@/components/Button";
import ImageKit from "@/components/ImageKit";
import Link from "next/link";

export default function AboutPodcastSpotlight({
  podcastSpotlight,
}: {
  podcastSpotlight: Aboutpage["podcastSpotlight"];
}) {
  const podcast = podcastSpotlight.podcastSpotlight as Podcast;
  const {
    info: { presentedBy, image: podcastImage, moderator, linkToListen },
  } = podcast;

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="w-full max-w-lg md:max-w-full mx-auto">
        <div className="container w-fit md:w-full flex flex-col-reverse md:flex-row gap-8 items-stretch justify-between">
          <div className="w-full flex md:flex-[0.4] lg:flex-[0.5] flex-col justify-end gap-0 md:gap-10">
            <div className="flex flex-col max-w-[380px] mb-8 md:mb-0">
              <h3 className="text-xs leading-tight tracking-tight mb-2">
                PODCAST
              </h3>
              <h4 className="text-4xl sm:text-[42px] -tracking-[1.26px] leading-none">
                {podcast.title}
              </h4>
            </div>

            <div className="w-full max-w-xl flex flex-col lg:flex-row justify-between gap-4 md:gap-12 md:mb-0 mb-4">
              <div>
                <h5 className="text-sm font-semibold uppercase leading-tight -tracking-[0.28px] mb-2">
                  Presented and hosted by
                </h5>
                <p className="font-serif font-light text-lg leading-none">
                  {presentedBy}
                </p>
              </div>
              <div>
                <h5 className="text-sm font-semibold uppercase leading-tight -tracking-[0.28px] mb-2">
                  Moderator
                </h5>
                <p className="font-serif font-light text-lg leading-none">
                  {moderator}
                </p>
              </div>
            </div>

            {linkToListen && (
              <Link href={linkToListen?.url!} className="w-fit">
                <Button className="w-fit" tabIndex={-1} theme="primary">
                  {linkToListen?.label}
                </Button>
              </Link>
            )}
          </div>

          <div className="flex flex-1 md:flex-[0.6] lg:flex-[0.5] md:items-end">
            <div className="w-full md:w-fit md:ml-auto">
              <ImageKit
                image={podcastImage as Media}
                alt={(podcastImage as Media)?.altText ?? "Podcast"}
                width={0}
                height={0}
                sizes="100vw"
                className="h-[420px] sm:h-[480px] lg:h-[600px] w-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

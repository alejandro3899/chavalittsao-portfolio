import "swiper/css/bundle";
import "swiper/css/autoplay";

import { HomepageGalleryMedia, Media } from "@/types/cms";
import ImageKit from "@/components/ImageKit";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SwiperType from "swiper";
import { useRef, useState } from "react";
import Link from "next/link";

export default function HomeForum({
  gallery,
}: {
  gallery: HomepageGalleryMedia;
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const slideRef = useRef<SwiperType | null>(null);

  const { images = [] } = gallery;

  function SlideControl() {
    return (
      <div className="flex items-center gap-4">
        <button
          className={clsx(
            "text-[#534B6B] hover:text-royal-purple",
            "disabled:text-[#534B6B]/40 disabled:hover:text-[#534B6B]/40 disabled:cursor-default"
          )}
          disabled={tabIndex === 0}
          onClick={() => slideRef.current?.slidePrev()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="16"
              y2="-0.5"
              transform="matrix(-1 0 0 1 20.5 12)"
              stroke="currentColor"
            />
            <path d="M9.5 6L4 11.5L9.5 17" stroke="currentColor" />
          </svg>
        </button>
        <button
          className={clsx(
            "text-[#534B6B] hover:text-royal-purple",
            "disabled:text-[#534B6B]/40 disabled:hover:text-[#534B6B]/40 disabled:cursor-default"
          )}
          disabled={tabIndex === images.length - 1}
          onClick={() => slideRef.current?.slideNext()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" y1="11.5" x2="20" y2="11.5" stroke="currentColor" />
            <path d="M15 6L20.5 11.5L15 17" stroke="currentColor" />
          </svg>
        </button>
      </div>
    );
  }

  function GalleryMedia({
    entry
  }: {
    entry: HomepageGalleryMedia;
  }) {
    var media = <ImageKit
      image={entry.image}
      alt={entry.image?.altText}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full rounded-lg object-contain"
    />;

    if (entry.link?.url) {
      return (<Link
          href={entry.link?.url}
          target={entry.link?.newTab ? "_blank" : "_self"}
          title={entry.link?.label}
          className="w-full h-full flex items-center"
        >
          {media}
        </Link>
      );
    }
    else {
      return (
        <div className="w-full h-full flex items-center">{media}</div>
      );
    }
  }

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="relative container flex flex-col text-royal-purple gap-6">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="md:flex-[0.5] min-h-[200px] sm:min-h-[500px] hidden md:flex flex-col items-center gap-8">
            <h3 className="flex-[0.5] text-xs text-center leading-[1.4] tracking-[-0.24px]">
              GALLERY
            </h3>
            <p className="text-4xl text-center sm:text-[42px] tracking-[-1.26px] uppercase">
              PUBLIC FORUM
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-[0.5] md:max-w-[50%]">
            <h3 className="flex-[0.5] block md:hidden text-xs text-center leading-[1.4] tracking-[-0.24px]">
              GALLERY
            </h3>

            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{
                delay: 6000,
              }}
              effect="fade"
              grabCursor={true}
              speed={1000}
              spaceBetween={12}
              preventInteractionOnTransition={true}
              loopPreventsSliding={true}
              onInit={(swiper) => {
                slideRef.current = swiper;
              }}
              onRealIndexChange={(swiper) => {
                setTabIndex(swiper.realIndex);
              }}
              className="w-full h-full"
            >
              {images.map((entry: HomepageGalleryMedia, i: string) => {
                return (
                  <SwiperSlide
                    key={i}
                    className="bg-sand w-full !h-auto flex items-center"
                  >
                    <div className="h-full flex md:flex-[0.5]">
                      <GalleryMedia entry={entry} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex md:hidden justify-between gap-6">
              <button
                className={clsx(
                  "text-[#534B6B] hover:text-royal-purple",
                  "disabled:text-[#534B6B]/40 disabled:hover:text-[#534B6B]/40 disabled:cursor-default"
                )}
                disabled={tabIndex === 0}
                onClick={() => slideRef.current?.slidePrev()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="16"
                    y2="-0.5"
                    transform="matrix(-1 0 0 1 20.5 12)"
                    stroke="currentColor"
                  />
                  <path d="M9.5 6L4 11.5L9.5 17" stroke="currentColor" />
                </svg>
              </button>
              <p className="text-[18px] text-center tracking-[-1.26px] uppercase">
                PUBLIC FORUM
              </p>
              <button
                className={clsx(
                  "text-[#534B6B] hover:text-royal-purple",
                  "disabled:text-[#534B6B]/40 disabled:hover:text-[#534B6B]/40 disabled:cursor-default"
                )}
                disabled={tabIndex === images.length - 1}
                onClick={() => slideRef.current?.slideNext()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4"
                    y1="11.5"
                    x2="20"
                    y2="11.5"
                    stroke="currentColor"
                  />
                  <path d="M15 6L20.5 11.5L15 17" stroke="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-1/2 hidden md:flex items-center justify-center">
          <SlideControl />
        </div>
      </div>
    </section>
  );
}

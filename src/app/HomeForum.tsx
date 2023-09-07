import "swiper/css/bundle";
import "swiper/css/autoplay";

import clsx from "clsx";
import SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useRef, useState } from "react";

const items = [
  {
    title: "GALLERY",
    content: "PUBLIC FORUM",
  },
  {
    title: "GALLERY",
    content: "PUBLIC FORUM",
  },
];

export default function HomeForum() {
  const [tabIndex, setTabIndex] = useState(0);
  const slideRef = useRef<SwiperType | null>(null);

  function handleSlide(index: number) {
    const prev = tabIndex === 0 ? (items ?? []).length - 1 : tabIndex - 1;
    const next = tabIndex === (items ?? []).length - 1 ? 0 : tabIndex + 1;

    index === next
      ? slideRef.current?.slideNext()
      : index === prev
      ? slideRef.current?.slidePrev()
      : slideRef.current?.slideToLoop(index);
  }

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container flex flex-col-reverse md:flex-row items-stretch text-royal-purple gap-6">
        <div className="flex flex-col gap-6 md:flex-[0.5] md:max-w-[50%]">
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
            {items.map(({ title, content }, i) => {
              return (
                <SwiperSlide key={i} className="bg-pebble w-full !h-auto">
                  <div className="min-h-[200px] sm:min-h-[500px] h-full flex flex-col items-center justify-center gap-8">
                    <h3 className="text-xs text-center leading-[1.4] tracking-[-0.24px]">
                      {title}
                    </h3>
                    <p className="self-center text-4xl text-center sm:text-[42px] tracking-[-1.26px] uppercase">
                      {content}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="w-full flex items-center justify-center gap-4">
            <button
              className={clsx(
                "text-[#534B6B] hover:text-royal-purple",
                "disabled:text-[#534B6B]/80 disabled:hover:text-[#534B6B]/80 disabled:cursor-default"
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
                "disabled:text-[#534B6B]/80 disabled:hover:text-[#534B6B]/80 disabled:cursor-default"
              )}
              disabled={tabIndex === items.length - 1}
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
        <div className="flex md:flex-[0.5]">
          <div className="min-h-[320px] sm:min-h-[400px] md:min-h-[580px] w-full h-full flex items-stretch">
            <Image
              src="/images/创始人6 2.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

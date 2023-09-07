import "swiper/css/bundle";
import "swiper/css/autoplay";

import SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useRef, useState } from "react";
import clsx from "clsx";
import { Homepage, Media } from "@/types/cms";
import ImageKit from "./components/ImageKit";

export default function HomeAbout({ about }: { about: Homepage["about"] }) {
  const [tabIndex, setTabIndex] = useState(0);
  const slideRef = useRef<SwiperType | null>(null);

  const { heading, subHeading, bioSlide = [] } = about;

  function handleSlide(index: number) {
    const prev = tabIndex === 0 ? bioSlide.length - 1 : tabIndex - 1;
    const next = tabIndex === bioSlide.length - 1 ? 0 : tabIndex + 1;

    index === next
      ? slideRef.current?.slideNext()
      : index === prev
      ? slideRef.current?.slidePrev()
      : slideRef.current?.slideToLoop(index);
  }

  return (
    <>
      <section className="w-full py-8 sm:py-12">
        <div className="container flex flex-col">
          <div className="w-full max-w-[660px] mx-auto flex flex-col justify-center items-center mb-10">
            <h2 className="text-center mb-4">{heading}</h2>
            <p className="max-w-[473px] mx-auto paragraph text-center">
              {subHeading}
            </p>
          </div>

          <div className="w-full">
            <div className="custom-scrollbar w-full max-w-full flex justify-center lg:hidden overflow-auto mb-10">
              <ul className="flex flex-wrap gap-6 sm:gap-8 mx-auto items-center">
                {(bioSlide ?? []).map((_, i) => (
                  <li
                    key={i}
                    className={clsx(
                      "w-8 h-8 flex items-center justify-center text-[10px] leading-tight border -tracking-[0.16px] rounded-full cursor-pointer",
                      tabIndex === i
                        ? "border-royal-purple"
                        : "border-transparent",
                      "hover:border-royal-purple transition-all"
                    )}
                    onClick={() => handleSlide(i)}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </li>
                ))}
              </ul>
            </div>
            <div className="custom-scrollbar w-full max-w-full hidden lg:block overflow-auto mb-10">
              <ul className="max-w-fit min-w-fit flex gap-8 sm:gap-10 mx-auto items-center">
                {(bioSlide ?? []).map(({ title }, i) => (
                  <li
                    key={i}
                    className={clsx(
                      "w-max text-base tracking-tighter cursor-pointer",
                      tabIndex === i
                        ? "text-royal-purple"
                        : "text-royal-purple/40",
                      "hover:text-royal-purple transition-all"
                    )}
                    onClick={() => handleSlide(i)}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{
                delay: 6000,
              }}
              effect="fade"
              grabCursor={true}
              loop={true}
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
              className="w-full"
            >
              {(bioSlide ?? []).map(({ title, description, image }, i) => {
                return (
                  <SwiperSlide key={i} className="bg-pebble w-full !h-auto">
                    <div className="w-full flex flex-col md:flex-row justify-between gap-10">
                      <div className="w-full md:flex-[0.5] flex items-stretch h-[320px] md:h-auto min-h-[320px] md:min-h-[450px] lg:min-h-[600px]">
                        {image ? (
                          <ImageKit
                            image={image as Media}
                            alt={(image as Media)?.altText}
                            height={600}
                            width={600}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full bg-white rounded-lg" />
                        )}
                      </div>
                      <div className="md:flex-[0.5] flex flex-col justify-center items-center">
                        <h3 className="text-xl text-center tracking-tight mb-4">
                          {title}
                        </h3>
                        <p className="font-light text-center leading-snug text-[13px]">
                          {description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

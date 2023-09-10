import "swiper/css/bundle";

import { Aboutpage, Media } from "@/types/cms";
// import ImageKit from "../../components/ImageKit";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperType from "swiper";
import { useRef, useState } from "react";
import clsx from "clsx";

export default function AboutGallery({
  gallery,
}: {
  gallery: Aboutpage["gallery"];
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const slideRef = useRef<SwiperType | null>(null);

  const { images = [] } = gallery;

  return (
    <section className="w-full bg-lilac py-20 px-4 sm:px-0">
      <div className="w-full mb-9">
        <h2 className="text-center leading-none -tracking-[0.84px]">Gallery</h2>
      </div>
      <div className="w-full sm:w-screen sm:max-w-[1600px] mx-auto">
        <Swiper
          grabCursor={true}
          loop={false}
          speed={1000}
          slidesPerGroup={1}
          slidesPerView={1}
          spaceBetween={12}
          preventInteractionOnTransition={true}
          loopPreventsSliding={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onInit={(swiper) => {
            slideRef.current = swiper;
          }}
          onRealIndexChange={(swiper) => {
            setTabIndex(swiper.realIndex);
          }}
          className="w-full h-[420px] sm:h-[500px] md:h-[575px]"
        >
          {images.map(({ image }, i) => {
            return (
              <SwiperSlide
                key={i}
                className={clsx(
                  "w-full max-w-full sm:max-w-[calc(50%-(16px/2))] md:max-w-[calc((100%/3)-((2*12px)/3))] lg:max-w-[calc(25%-((3*12px)/4))]",
                  i !== images.length - 1 ? "mr-3" : "!mr-0"
                )}
              >
                <div className="w-full h-full">
                  <img
                    src={(image as Media)?.imagekit?.url}
                    alt={(image as Media)?.altText ?? `Image ${i + 1}`}
                    width={391}
                    height={575}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

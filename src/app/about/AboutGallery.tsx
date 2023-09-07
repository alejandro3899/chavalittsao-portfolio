import "swiper/css/bundle";

import { Aboutpage, Media } from "@/types/cms";
import ImageKit from "../../components/ImageKit";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperType from "swiper";
import { useRef, useState } from "react";

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
            560: {
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
              <SwiperSlide key={i} className="w-full">
                <div className="w-full h-full">
                  <ImageKit
                    image={image as Media}
                    alt={(image as Media)?.altText ?? `Image ${i + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
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

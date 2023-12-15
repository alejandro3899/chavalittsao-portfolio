import "swiper/css/bundle";

import { HomepageGalleryMedia, Media } from "@/types/cms";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperType from "swiper";
import { useRef, useState } from "react";

export default function HomeForum({
  gallery,
}: {
  gallery: {images?: HomepageGalleryMedia[] };
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const slideRef = useRef<SwiperType | null>(null);

  const { images = [] } = gallery;

  function SlideControl() {
    return (
      <div className="flex items-center justify-between px-4">
        <button
          className={clsx(
            "text-[#534B6B] hover:text-royal-purple bg-sand",
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
            "text-[#534B6B] hover:text-royal-purple bg-sand",
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
    const ytLink = 
      entry.link?.url && (
        /^(?:https?:)?\/\/youtu.be\/([a-z0-9_\-]{11})/i.exec(entry.link?.url.trim()) ||
        /^(?:https?:)?\/\/www.youtube.com\/embed\/([a-z0-9_\-]{11})/i.exec(entry.link?.url.trim()) ||
        /^(?:https?:)?\/\/www.youtube.com\/watch\?(?:[^#]*&)?v=([a-z0-9_\-]{11})/i.exec(entry.link?.url.trim())
      );
    var elm;

    if (ytLink && ytLink[1]) {
      elm = <iframe src={`https://www.youtube.com/embed/${ytLink[1]}?rel=0`} className="absolute top-0 left-0 w-full h-full"></iframe>;
    }
    else if (entry.image) {
      const imageLink = (entry.image as Media).imagekit?.url;
      if (entry.link?.url)
        elm = <a href={entry.link?.url} target={entry.link.newTab ? "_blank" : "_self"} className="absolute top-0 left-0 w-full h-full" style={{background: `url(${imageLink}) center center/cover no-repeat`, textDecoration: "none"}}></a>;
      else {
        elm = <div className="absolute top-0 left-0 w-full h-full" style={{background: `url(${imageLink}) center center/cover no-repeat`}}></div>;
      }
    }
    else {
      if (entry.link?.url)
        elm = <a href={entry.link?.url} target={entry.link.newTab ? "_blank" : "_self"} className="absolute top-0 left-0 w-full h-full" style={{background: `url(https://place-hold.it/1920x1080) center center/cover no-repeat`, textDecoration: "none"}}></a>;
      else {
        elm = <div className="absolute top-0 left-0 w-full h-full" style={{background: `url(https://place-hold.it/1920x1080) center center/cover no-repeat`}}></div>;
      }
    }
    return (
      <div>
        <div style={{paddingBottom: "56.25%", position: "relative"}} className="shadow-sm">
          {elm}
        </div>
        <div className="text-center text-sm mt-4 px-8">
          {entry.title}
        </div>
      </div>);
  }

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="relative container text-royal-purple gap-6">
        <p className="text-center md:text-start text-4xl sm:text-[42px] tracking-[-1.26px]">
          Public Forum
        </p>

        <div className="px-0 md:px-12 py-12 max-w-[960px] mx-auto">
          <style>
          
          </style>
          <Swiper
            grabCursor={true}
            speed={1200}
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
            {images.map((entry: HomepageGalleryMedia, i: number) => {
              return (
                <SwiperSlide
                  key={i}
                  className="w-full !h-auto flex items-center"
                >
                  <div className="">
                    <GalleryMedia entry={entry} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="absolute left-0 w-full top-[74.3%] md:top-[50%] home-gallery-control z-[100]">
            <SlideControl />
          </div>
        </div>
      </div>
    </section>
  );
}

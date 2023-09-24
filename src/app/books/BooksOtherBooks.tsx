"use client";

import "swiper/css/bundle";

import { Bookspage, Book, Media } from "@/types/cms";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ImageKit from "@/components/ImageKit";
import Link from "next/link";
import clsx from "clsx";
import SwiperType from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef, useEffect } from "react";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";

export default function BooksOtherBooks({
  otherBooks,
  books,
}: {
  otherBooks: Bookspage["otherBooks"];
  books: Book[];
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(true);
  const slideRef = useRef<SwiperType | null>(null);
  const { width } = useWindowDimensions();

  const { heading } = otherBooks;

  function updateNextDisabled(index: number) {
    const finalIndex =
      width >= 1024 ? index + 2 : width >= 768 ? index + 1 : index;
    if (finalIndex >= books.length - 1) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }

  useEffect(() => {
    updateNextDisabled(tabIndex);
  }, [width]);

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container flex flex-col">
        <header className="w-full flex justify-between items-center gap-6 mb-6">
          <h2 className="text-3xl leading-none -tracking-[0.84px]">
            {heading}
          </h2>
          <div className="flex items-center gap-5">
            <button
              className="group outline-none focus:outline-none focus-visible:outline-none text-royal-purple disabled:text-royal-purple/40"
              onClick={() => slideRef?.current?.slidePrev()}
              disabled={tabIndex === 0}
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 md:w-10 h-6 md:h-10"
              >
                <line
                  y1="-1"
                  x2="32"
                  y2="-1"
                  transform="matrix(-1 0 0 1 41 24)"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M19 12L8 23L19 34"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button
              className="group outline-none focus:outline-none focus-visible:outline-none text-royal-purple disabled:text-royal-purple/40"
              onClick={() => slideRef?.current?.slideNext()}
              disabled={nextDisabled}
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 md:w-10 h-6 md:h-10"
              >
                <line
                  x1="8"
                  y1="23"
                  x2="40"
                  y2="23"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M30 12L41 23L30 34"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="w-full">
          <Swiper
            grabCursor={true}
            loop={false}
            speed={1000}
            slidesPerGroup={1}
            slidesPerView={1}
            spaceBetween={16}
            preventInteractionOnTransition={true}
            loopPreventsSliding={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onInit={(swiper) => {
              slideRef.current = swiper;
            }}
            onRealIndexChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setTabIndex(realIndex);

              updateNextDisabled(realIndex);
            }}
            className="w-full"
          >
            {books.map(({ name, bookImage, description, learnMoreLink }, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className={clsx(
                    "max-w-full md:max-w-[calc(50%-(16px/2))] lg:max-w-[calc(calc(100%/3)-(32px/3))]",
                    i !== books.length - 1 ? "mr-4" : "!mr-0"
                  )}
                >
                  <div key={i} className="flex flex-col">
                    <div className="h-auto md:h-[480px] lg:h-[530px] rounded-lg overflow-hidden mb-6">
                      <ImageKit
                        image={bookImage as Media}
                        alt={(bookImage as Media)?.altText}
                        width={512}
                        height={530}
                        // sizes="100vw"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:max-w-[370px] md:mx-auto flex flex-col md:items-center gap-3">
                      <h3 className="text-base leading-none tracking-tighter md:text-center uppercase">
                        {name}
                      </h3>
                      <div
                        className="leading-[1.3] text-sm text-light md:text-center tracking-tightest"
                        dangerouslySetInnerHTML={slateToHtml(
                          description,
                          richTextConfig
                        )}
                      />
                      <Link
                        href={"#"}
                        className={clsx(
                          "outline-none font-semibold text-xs leading-tight -tracking-[0.24px]",
                          "focus:outline-none text-royal-purple/80 hover:text-royal-purple"
                        )}
                      >
                        {learnMoreLink?.label ?? "LEARN MORE"}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

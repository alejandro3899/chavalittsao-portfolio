import "swiper/css/bundle";

import { Aboutpage, Media } from "@/types/cms";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import clsx from "clsx";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import SwiperType from "swiper";
import ImageKit from "@/components/ImageKit";
import ClampedParagraph from "@/components/ClampedParagraph";

export default function AboutBio({ bio }: { bio: Aboutpage["bio"] }) {
    const [tabIndex, setTabIndex] = useState(0);
    const slideRef = useRef<SwiperType | null>(null);

    const { bioSections = [] } = bio;

    function handleSlide(index: number) {
        const prev = tabIndex === 0 ? bioSections.length - 1 : tabIndex - 1;
        const next = tabIndex === bioSections.length - 1 ? 0 : tabIndex + 1;

        index === next
            ? slideRef.current?.slideNext()
            : index === prev
            ? slideRef.current?.slidePrev()
            : slideRef.current?.slideToLoop(index);
    }

    function Nav() {
        return (
            <div className="w-full flex">
                <ul className="w-full flex flex-wrap gap-x-5 sm:gap-x-6 gap-y-4 mx-auto justify-center items-center">
                    {bioSections.map(({ title }, i) => {
                        return (
                            <li
                                key={i}
                                className="cursor-pointer"
                                onClick={() => {
                                    const selector = document.querySelector(
                                        `.influence-${i + 1}`
                                    );
                                    if (selector) {
                                        const offsetTop =
                                            selector.getBoundingClientRect()
                                                .top -
                                            document.body.getBoundingClientRect()
                                                .top -
                                            100;

                                        window.scrollTo({
                                            behavior: "smooth",
                                            top: offsetTop,
                                        });
                                    }
                                    handleSlide(i);
                                }}
                            >
                                <button
                                    className={clsx(
                                        "text-[0.7rem] uppercase",
                                        tabIndex === i
                                            ? "text-royal-purple"
                                            : "text-royal-purple/40 hover:text-royal-purple",
                                        "transition-colors"
                                    )}
                                >
                                    {title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return (
        <section className="relative w-full bg-sand pt-8 md:pt-0">
            <div className="container flex flex-col justify-center">
                <div className="sticky top-0 hidden md:block z-10 bg-sand">
                    <div className="sticky top-0 z-10 py-8 sm:py-10">
                        <Nav />
                    </div>
                </div>
                {/* desktop content*/}
                <div className="hidden md:block">
                    <Swiper
                        modules={[EffectFade]}
                        effect="fade"
                        loop={true}
                        speed={1000}
                        spaceBetween={12}
                        preventInteractionOnTransition={true}
                        loopPreventsSliding={true}
                        autoHeight
                        onInit={(swiper) => {
                            slideRef.current = swiper;
                        }}
                        onRealIndexChange={(swiper) => {
                            setTabIndex(swiper.realIndex);
                        }}
                        className="w-full"
                    >
                        {(bioSections ?? []).map(
                            (
                                { title, description, excerpt, images = [] },
                                i
                            ) => {
                                const firstParagraph = description.slice(0, 1);
                                const restParagraphs = description.slice(2);

                                return (
                                    <SwiperSlide
                                        key={i}
                                        className={`w-full !h-auto influence-${
                                            i + 1
                                        }`}
                                    >
                                        <div
                                            className={clsx(
                                                "custom-scrollbar max-w-[480px] md:max-w-full w-full flex flex-col md:flex-row  mx-auto pb-8 sm:pb-12 overflow-auto bg-sand"
                                            )}
                                        >
                                            <div className="w-[41rem] mx-auto flex flex-col gap-6 md:gap-8">
                                                <div className="flex w-full flex-wrap gap-5 justify-center">
                                                    {(images ?? []).map(
                                                        ({ image }, i) => (
                                                            <div
                                                                key={i}
                                                                className="relative w-full min-h-[27rem] h-auto bg-center"
                                                            >
                                                                <Image
                                                                    src={
                                                                        image
                                                                            .imagekit
                                                                            ?.url
                                                                    }
                                                                    alt={
                                                                        (
                                                                            image as Media
                                                                        )
                                                                            ?.altText!
                                                                    }
                                                                    fill
                                                                    className="rounded-lg object-cover min-w-0"
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>

                                                <div className="hidden md:block text-[1.5rem] font-[400] font-sans tracking-[-0.03rem]">
                                                    {title}
                                                </div>
                                                <div
                                                    className="richtext hidden md:block paragraph font-[400]"
                                                    dangerouslySetInnerHTML={slateToHtml(
                                                        firstParagraph,
                                                        richTextConfig
                                                    )}
                                                />
                                                {excerpt && (
                                                    <div className="bg-[#D5D2F2] hidden md:block paragraph rounded-[1rem] w-full text-start px-[5rem] py-[2rem]">
                                                        {excerpt}
                                                    </div>
                                                )}

                                                <div
                                                    className="richtext hidden md:block paragraph font-[400]"
                                                    dangerouslySetInnerHTML={slateToHtml(
                                                        restParagraphs,
                                                        richTextConfig
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            }
                        )}
                    </Swiper>
                </div>
                {/* mobile content*/}
                <div className="flex md:hidden flex-col w-full">
                    {bioSections.map(
                        ({ title, description, images = [] }, i) => {
                            const firstImage = images?.[0]?.image;

                            return (
                                <Fragment key={i}>
                                    <div
                                        className={clsx(
                                            `influence-${i + 1}`,
                                            "h-0 w-0"
                                        )}
                                    />
                                    <div
                                        className={clsx(
                                            "custom-scrollbar max-w-[480px] md:max-w-full w-full flex flex-col mx-auto pb-8 overflow-auto bg-sand"
                                        )}
                                    >
                                        <div className="w-full mx-auto flex flex-col gap-6">
                                            <h2 className="text-[21px] uppercase leading-tight">
                                                {title}
                                            </h2>
                                            {firstImage && (
                                                <div className="w-full">
                                                    <ImageKit
                                                        image={
                                                            firstImage as Media
                                                        }
                                                        alt={
                                                            (
                                                                firstImage as Media
                                                            )?.altText!
                                                        }
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-[340px] object-cover rounded-lg"
                                                    />
                                                </div>
                                            )}
                                            <div className="mb-10">
                                                <ClampedParagraph
                                                    richContent={description}
                                                    number={1}
                                                    className="paragraph font-sans font-[400] text-royal-purple"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}

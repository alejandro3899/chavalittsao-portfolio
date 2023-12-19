import { Aboutpage, Media } from "@/types/cms";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import ImageKit from "@/components/ImageKit";
import ClampedParagraph from "@/components/ClampedParagraph";

export default function AboutBio({ bio }: { bio: Aboutpage["bio"] }) {
    const [active, setActive] = useState(0);

    const { bioSections = [] } = bio;

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

                                        setActive(i);
                                    }
                                }}
                            >
                                <button
                                    className={clsx(
                                        "text-[0.7rem] uppercase",
                                        active === i
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

    useEffect(() => {
        const handleScroll = () => {
            // const sections = document.querySelectorAll("[class^=influence-]");
            // const offsets = new Array(sections.length).fill(0).map((_, i) => {
            //     return Math.abs(sections[i].getBoundingClientRect().top);
            // });
            // const min = Math.min(...offsets);
            // setActive(offsets.indexOf(min));
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="relative w-full bg-sand pt-8 md:pt-0">
            <div className="container flex flex-col justify-center">
                <div className="sticky top-0 hidden md:block z-10 bg-sand">
                    <div className="sticky top-0 z-10 py-8 sm:py-10">
                        <Nav />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    {bioSections.map(
                        ({ title, description, excerpt, images = [] }, i) => {
                            const firstImage = images?.[0]?.image;
                            const firstParagraph = description.slice(0, 1);
                            const restParagraphs = description.slice(2);

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
                                            "custom-scrollbar max-w-[480px] md:max-w-full w-full flex flex-col md:flex-row  mx-auto pb-8 sm:pb-12 overflow-auto bg-sand"
                                            // {
                                            //     "md:max-h-screen":
                                            //         i !==
                                            //         bioSections.length - 1,
                                            // }
                                        )}
                                    >
                                        <div className="w-full md:w-[41rem] mx-auto flex flex-col gap-6 md:gap-8">
                                            <h2 className="block md:hidden text-[21px] uppercase leading-tight">
                                                {title}
                                            </h2>
                                            {firstImage && (
                                                <div className="w-full block md:hidden">
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
                                            <div className="block md:hidden mb-10">
                                                <ClampedParagraph
                                                    richContent={description}
                                                    number={1}
                                                    className="text-[0.6875rem] font-sans font-[400] text-royal-purple -tracking-[0.26px] leading-snug"
                                                />
                                            </div>
                                            <div className="hidden md:flex w-full flex-wrap gap-5 justify-center">
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
                                                                    )?.altText!
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
                                                className="richtext hidden md:block text-[1rem] font-[400] [&_*]:text-[1rem] [&_*]:-tracking-[0.24px] [&_*]:leading-snug"
                                                dangerouslySetInnerHTML={slateToHtml(
                                                    firstParagraph,
                                                    richTextConfig
                                                )}
                                            />
                                            <div className="bg-[#D5D2F2] hidden md:block rounded-[1rem] w-full text-start px-[5rem] py-[2rem]">
                                                {excerpt}
                                            </div>

                                            <div
                                                className="richtext hidden md:block text-[1rem] font-[400] [&_*]:text-[1rem] [&_*]:-tracking-[0.24px] [&_*]:leading-snug"
                                                dangerouslySetInnerHTML={slateToHtml(
                                                    restParagraphs,
                                                    richTextConfig
                                                )}
                                            />
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

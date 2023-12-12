import "swiper/css/bundle";

import { Homepage, Media } from "@/types/cms";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface Quote {
    quote: string;
    image: string | Media;
    size?: "extraSmall" | "small" | "medium" | "large";
}

export default function QuoteBlock({
    theme = "light",
    quotes,
}: Homepage["quoteBlock"] & {
    theme?: "light" | "dark";
}) {
    return (
        <>
            <div className="relative max-w-[100%]">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    grabCursor={true}
                    speed={1200}
                    spaceBetween={12}
                    preventInteractionOnTransition={true}
                    loopPreventsSliding={true}
                    className="w-full h-full"
                >
                    {quotes.map((quote, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="w-full !h-auto flex items-center"
                            >
                                <div className="">
                                    <SingleQuoteBlock
                                        theme={theme}
                                        {...quote}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}

function SingleQuoteBlock({
    theme,
    size = "medium",
    quote,
    image,
}: Quote & { theme?: "light" | "dark" }) {
    return (
        <div
            className={clsx(
                "relative w-full flex justify-center items-center rounded-lg overflow-hidden px-6 sm:px-8 md:px-12",
                {
                    "h-[360px] md:h-[400px]": size === "extraSmall",
                    "h-[480px] md:h-[600px]": size === "small",
                    "h-[500px] md:h-[640px]": size === "medium",
                    "h-[580px] md:h-[720px]": size === "large",
                }
            )}
        >
            <Image
                src={(image as Media)?.imagekit?.url!}
                alt={(image as Media)?.altText ?? "Quote"}
                layout="fill"
                objectFit="cover"
                className="absolute left-0 top-0 pointer-events-none z-[1]"
            />
            <div className="w-full max-w-[450px] mx-auto z-[2]">
                <p
                    className={clsx(
                        "text-base leading-none tracking-tight text-center",
                        {
                            "text-white": theme === "light",
                            "text-royal-purple": theme === "dark",
                        }
                    )}
                >
                    {quote}
                </p>
            </div>
        </div>
    );
}

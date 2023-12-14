import "swiper/css/bundle";
import "swiper/css/effect-fade";

import { Homepage, Media } from "@/types/cms";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

interface Quote {
    quote: string;
    quotee: string;
    color: string;
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
            <div className="relative w-[100%]">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, EffectFade]}
                    effect={"fade"}
                    speed={1500}
                    spaceBetween={12}
                    preventInteractionOnTransition={true}
                    loop={true}
                    className="w-full h-full"
                >
                    {quotes?.map((quote, index) => {
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
    quote,
    quotee,
    color,
    image,
}: Quote & { theme?: "light" | "dark" }) {
    return (
        <div
            className={clsx(
                "relative w-full h-[400px] md:h-[520px] flex justify-center items-center rounded-lg overflow-hidden px-6 sm:px-8 md:px-12"
            )}
        >
            <Image
                src={(image as Media)?.imagekit?.url!}
                alt={(image as Media)?.altText ?? "Quote"}
                fill
                className="bg-cover bg-center object-cover pointer-events-none z-[1]"
            />
            <div className="w-full max-w-[450px] mx-auto z-[2]">
                <h4
                    style={{ color: theme === "light" ? "#fff" : color }}
                    className={clsx(
                        "font-sans font-[400] text-[0.875rem] md:text-[1.25rem] tracking-tight text-center",
                        {}
                    )}
                >
                    {quote}
                </h4>

                <p
                    style={{ color }}
                    className={`text-center mt-5 font-serif font-light text-[0.875rem] md:text-[1rem] leading-[1.25] tracking-tightest`}
                >
                    {quotee}
                </p>
            </div>
        </div>
    );
}

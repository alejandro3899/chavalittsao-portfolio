import "swiper/css/bundle";
import 'swiper/css/effect-fade';

import { Homepage, Media } from "@/types/cms";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
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
            <div className="relative w-[100%]">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, EffectFade]}
                    effect={'fade'}
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
    size = "medium",
    quote,
    image,
}: Quote & { theme?: "light" | "dark" }) {
    return (
        <div
            className={clsx(
                "relative w-full h-[400px] md:h-[520px] flex justify-center items-center rounded-lg overflow-hidden px-6 sm:px-8 md:px-12",
            )}
        >
            <Image
                src={(image as Media)?.imagekit?.url!}
                alt={(image as Media)?.altText ?? "Quote"}
                fill
                style={{objectFit:"cover"}}
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

import { Aboutpage, Media } from "@/types/cms";
import clsx from "clsx";
import Image from "next/image";

export default function AboutQuoteBlock({
    theme = "light",
    quote,
}: Aboutpage["quoteBlock1"] & {
    theme?: "light" | "dark";
}) {
    const { size = "medium", quoteText, quotee, image, color, hide } = quote;

    return (
        !hide && (
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
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="absolute left-0 top-0 h-full w-full object-cover pointer-events-none z-[1]"
                />
                <div className="w-full max-w-[450px] mx-auto z-[2]">
                    <h4
                        className={clsx(
                            "font-sans font-[400] text-[1.75rem] leading-none tracking-tight text-center",
                            {
                                "text-white": theme === "light",
                                [`text-[${color}]`]: theme === "dark",
                            }
                        )}
                    >
                        {quoteText}
                    </h4>
                    <p
                        className={`text-center mt-3 font-serif text-[${color}] font-light text-[1.25rem] sm:text-[22.33px] leading-[1.25] tracking-tightest`}
                    >
                        {quotee}
                    </p>
                </div>
            </div>
        )
    );
}

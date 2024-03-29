import { Aboutpage, Media } from "@/types/cms";
import clsx from "clsx";
import Image from "next/image";

export default function AboutImageBlock({
    theme = "light",
    image: imageBlock,
}: Aboutpage["imageBlock"] & {
    theme?: "light" | "dark";
}) {
    const { size = "medium", image, hide } = imageBlock;

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
            </div>
        )
    );
}

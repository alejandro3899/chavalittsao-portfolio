import clsx from "clsx";
import Image from "next/image";

export default function QuoteBlock({
  theme = "light",
  size = "medium",
  text,
  imgSrc,
  imgAlt,
}: {
  theme?: "light" | "dark";
  size?: "extraSmall" | "small" | "medium" | "large";
  text: string;
  imgSrc: string;
  imgAlt: string;
}) {
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
        src={imgSrc}
        alt={imgAlt}
        width={0}
        height={0}
        sizes="100vw"
        className="absolute left-0 top-0 h-full w-full object-cover pointer-events-none z-[1]"
      />
      <div className="w-full max-w-[450px] mx-auto z-[2]">
        <p
          className={clsx("text-base leading-none tracking-tight text-center", {
            "text-white": theme === "light",
            "text-royal-purple": theme === "dark",
          })}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

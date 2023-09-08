import { Media, WorkSummary } from "@/types/cms";
import ImageKit from "./ImageKit";
import clsx from "clsx";
import Link from "next/link";

export default function WorkSummary({
  workSummary,
}: {
  workSummary: WorkSummary;
}) {
  const { works = [] } = workSummary;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map(({ title, excerpt, image, link }, i) => {
        return (
          <div key={i} className="w-full flex flex-col">
            <div className="w-full h-auto md:h-[480px] lg:h-[530px] rounded-lg overflow-hidden mb-6">
              <ImageKit
                image={image as Media}
                alt={(image as Media)?.altText}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:max-w-[370px] mx-auto flex flex-col sm:items-center gap-3">
              <h3 className="text-base leading-none tracking-tighter sm:text-center uppercase">
                {title}
              </h3>
              <p className="leading-[1.3] text-sm text-light sm:text-center tracking-tightest">
                {excerpt}
              </p>
              <Link
                href={link?.url ?? "#"}
                className={clsx(
                  "outline-none font-semibold text-xs leading-tight -tracking-[0.24px]",
                  "focus:outline-none text-royal-purple/80 hover:text-royal-purple"
                )}
              >
                {link?.label ?? "LEARN MORE"}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

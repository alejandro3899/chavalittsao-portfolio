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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {works.map(({ title, excerpt, image, link }, i) => {
                return (
                    <div key={i} className="w-full flex flex-col">
                        <div className="w-full h-[480px] md:h-[480px] xl:h-[530px] rounded-lg overflow-hidden mb-6">
                            <Link href={link?.url ?? "#"}>
                                <ImageKit
                                    image={image as Media}
                                    alt={(image as Media)?.altText}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                        </div>
                        <div className="sm:max-w-[370px] md:mx-auto flex flex-col md:items-center gap-3">
                            <h3 className="text-base font-sans leading-none tracking-tighter md:text-center uppercase">
                                {title}
                            </h3>
                            <p className="paragraph font-sans font-light md:text-center">
                                {excerpt}
                            </p>
                            <Link
                                href={link?.url ?? "#"}
                                className={clsx(
                                    "w-fit font-semibold py-[1rem] px-[1.5rem] rounded-[0.25rem] font-sans text-royal-purple/90 text-xs leading-tight -tracking-[0.24px] transition duration-200 ease-out hover:bg-[#000] hover:text-[#EAEBEA] active:bg-[#BCBCBC] active:text-[#FFFFFF]"
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

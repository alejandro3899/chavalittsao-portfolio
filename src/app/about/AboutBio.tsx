import { Aboutpage, Media } from "@/types/cms";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import ImageKit from "../../components/ImageKit";
import clsx from "clsx";

export default function AboutBio({ bio }: { bio: Aboutpage["bio"] }) {
  const { bioSections = [] } = bio;

  function Nav({ active }: { active: string }) {
    return (
      <div className="w-full flex flex-col">
        <ul className="w-full">
          {bioSections.map(({ title }, i) => {
            return (
              <li
                key={i}
                className="w-full cursor-pointer"
                onClick={() => {
                  document
                    .querySelector(`.influence-${i + 1}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span
                  className={clsx(
                    "text-xs uppercase",
                    active.toLowerCase() === title.toLowerCase()
                      ? "text-royal-purple"
                      : "text-royal-purple/40 hover:text-royal-purple",
                    "transition-colors"
                  )}
                >
                  {title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <section className="w-full py-8">
      <div className="container w-full flex flex-col gap-8">
        {bioSections.map(({ title, description, images = [] }, i) => {
          const firstImage = images?.[0].image;

          return (
            <div
              key={i}
              className={clsx(
                `influence-${i + 1}`,
                "w-full flex flex-col md:flex-row justify-between py-8 sm:py-12"
              )}
            >
              <div className="hidden md:block md:flex-[0.5]">
                <Nav active={title} />
              </div>
              <div className="md:flex-[0.5] flex flex-col gap-6 sm:gap-8">
                <h2 className="block sm:hidden text-[21px] uppercase leading-tight mb-2">
                  {title}
                </h2>
                {firstImage && (
                  <div className="w-full block sm:hidden">
                    <ImageKit
                      image={firstImage as Media}
                      alt={(firstImage as Media)?.altText!}
                      width={400}
                      height={300}
                      className="w-full h-[340px] object-cover rounded-lg"
                    />
                  </div>
                )}
                <div
                  className="richtext text-xs [&_*]:text-xs [&_*]:-tracking-[0.24px] [&_*]:leading-snug"
                  dangerouslySetInnerHTML={slateToHtml(
                    description,
                    richTextConfig
                  )}
                />
                <div className="hidden sm:grid grid-cols-2 gap-8 md:gap-12">
                  {(images ?? []).map(({ image, size }, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "flex items-center",
                        images?.length === 1 && size !== "full"
                          ? "col-[span_1_/_3]"
                          : {
                              "col-span-2": size === "full",
                              "col-span-1": size === "default",
                            }
                      )}
                    >
                      <ImageKit
                        image={image as Media}
                        alt={(image as Media)?.altText!}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

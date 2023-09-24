import { Aboutpage, Media } from "@/types/cms";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import ImageKit from "@/components/ImageKit";
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";

export default function AboutBio({ bio }: { bio: Aboutpage["bio"] }) {
  const [active, setActive] = useState(0);

  const { bioSections = [] } = bio;

  function Nav() {
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
                    active === i
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[class^=influence-]");
      const offsets = new Array(sections.length).fill(0).map((_, i) => {
        return Math.abs(sections[i].getBoundingClientRect().top);
      });
      const min = Math.min(...offsets);
      setActive(offsets.indexOf(min));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full bg-sand">
      <div className="container flex justify-center md:justify-start gap-4 md:gap-14">
        <div className="sticky top-0 hidden md:block md:flex-[0.5] z-10">
          <div
            className="sticky top-0 z-10 py-8 sm:py-12"
            style={{
              gridArea: "1 / 1 / span 1 / span 1",
            }}
          >
            <Nav />
          </div>
        </div>
        <div className="md:sticky top-0 sm:right-5 flex flex-col md:flex-[0.5]">
          {bioSections.map(({ title, description, images = [] }, i) => {
            const firstImage = images?.[0].image;

            return (
              <Fragment key={i}>
                <div className={clsx(`influence-${i + 1}`, "h-0 w-0")} />
                <div
                  key={i}
                  className={clsx(
                    "custom-scrollbar md:sticky top-0 max-w-[480px] md:max-w-full w-full flex flex-col md:flex-row bg-sand mx-auto py-8 sm:py-12 overflow-auto",
                    {
                      "md:max-h-screen": i !== bioSections.length - 1,
                    }
                  )}
                >
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <h2 className="block md:hidden text-[21px] uppercase leading-tight">
                      {title}
                    </h2>
                    {firstImage && (
                      <div className="w-full block md:hidden">
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
                    <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-12">
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
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

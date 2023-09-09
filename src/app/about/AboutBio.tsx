import { Aboutpage, Media } from "@/types/cms";
import clsx from "clsx";
import Image from "next/image";
import ImageKit from "../../components/ImageKit";

const items = [
  {
    title: "EARLY INFLUENCES",
    text: `
        Chavalit was formally educated at the University of Michigan, USA. Having been exposed to both Eastern and Western cultures, Chavalit became the product of his time and his exposure. He is a product of both the East and the West. Chavalit saw his destiny to be intertwined with that of his family business and poured himself into it, finding success early in his life. The young chairman found himself in a strong financial position within a flourishing capitalist system. He felt that he could live forever and that the sky was the limit to his ambitions and passions.

        The businessman felt that he had done justice to the family business he inherited and could imagine how to continue exploiting the markets and growing the family coffers even more. During these turbulent times, he saw the invisible hand of the market moving and saw the very real greed behind many of the decisions that would continue to shape the economy. 
        `,
    images: [
      {
        size: "half",
        src: "/images/chavalit-6.png",
      },
    ],
  },
  {
    title: "THE RISE & FALL OF THE ASIAN MIRACLE",
    text: `
        Chavalit was formally educated at the University of Michigan, USA. Having been exposed to both Eastern and Western cultures, Chavalit became the product of his time and his exposure. He is a product of both the East and the West. Chavalit saw his destiny to be intertwined with that of his family business and poured himself into it, finding success early in his life. The young chairman found himself in a strong financial position within a flourishing capitalist system. He felt that he could live forever and that the sky was the limit to his ambitions and passions.
        `,
    images: [
      {
        size: "half",
        src: "/images/chavalit-7.png",
      },
    ],
  },
  {
    title: "THE TIME FOR RESEARCH IS NOW",
    text: `
        Chavalit was formally educated at the University of Michigan, USA. Having been exposed to both Eastern and Western cultures, Chavalit became the product of his time and his exposure. He is a product of both the East and the West. Chavalit saw his destiny to be intertwined with that of his family business and poured himself into it, finding success early in his life. The young chairman found himself in a strong financial position within a flourishing capitalist system. He felt that he could live forever and that the sky was the limit to his ambitions and passions.
        `,
    images: [
      {
        size: "full",
        src: "/images/chavalit-8.png",
      },
    ],
  },
  {
    title: "THE AWAKENING & THE NEW ERA",
    text: `
        Chavalit was formally educated at the University of Michigan, USA. Having been exposed to both Eastern and Western cultures, Chavalit became the product of his time and his exposure. He is a product of both the East and the West. Chavalit saw his destiny to be intertwined with that of his family business and poured himself into it, finding success early in his life. The young chairman found himself in a strong financial position within a flourishing capitalist system. He felt that he could live forever and that the sky was the limit to his ambitions and passions.
        `,
    images: [
      {
        size: "half",
        src: "/images/chavalit-9.png",
      },
      {
        size: "half",
        src: "/images/chavalit-6.png",
      },
    ],
  },
  {
    title: "QUANTUM LEADERSHIP, A CALLING",
    text: `
        Chavalit was formally educated at the University of Michigan, USA. Having been exposed to both Eastern and Western cultures, Chavalit became the product of his time and his exposure. He is a product of both the East and the West. Chavalit saw his destiny to be intertwined with that of his family business and poured himself into it, finding success early in his life. The young chairman found himself in a strong financial position within a flourishing capitalist system. He felt that he could live forever and that the sky was the limit to his ambitions and passions.
        `,
    images: [
      {
        size: "half",
        src: "/images/chavalit-3.png",
      },
    ],
  },
];

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
              <div className="hidden sm:block md:flex-[0.5]">
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
                <p className="text-xs leading-snug -tracking-[0.24px]">
                  {description}
                </p>
                <div className="hidden sm:grid grid-cols-2 gap-12">
                  {(images ?? []).map(({ image, size }, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "flex items-center",
                        images?.length === 1
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

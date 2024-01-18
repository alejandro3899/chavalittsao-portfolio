import { Aboutpage } from "@/types/cms";
import Image from "next/image";

export default function AboutHero({ hero }: { hero: Aboutpage["hero"] }) {
  const { heading, subHeading, text, heroImage, heroImageMobile } = hero;

  return (
    <section className="w-full bg-lilac pt-[var(--nav-offset)] pb-8 sm:pb-12">
      <div className="container w-full flex flex-col gap-8 sm:gap-10 py-3 md:py-0">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-12">
          <div className="flex-[0.5]">
            <h1 className="leading-snug -tracking-[0.24px] text-sm">
              {heading}
            </h1>
            <p className="text-[33.33px] tracking-tighter">{subHeading}</p>
          </div>
          <div className="flex-[0.5]">
            <div className="w-full flex">
              <div className="w-full max-w-[440px]">
                <p className="paragraph">
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-stretch">
          <div className="relative w-full h-[22rem] md:h-[50rem] rounded-lg overflow-hidden">
            <Image
              src={heroImage?.imagekit?.url}
              alt={heroImage?.altText ?? "About"}
              fill
              className="w-full object-contain hidden md:block"
            />
            <Image
              src={heroImageMobile?.imagekit?.url}
              alt={heroImageMobile?.altText ?? "About"}
              fill
              className="w-full object-cover block md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

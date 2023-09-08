import { Aboutpage, Media } from "@/types/cms";
import ImageKit from "../../components/ImageKit";

export default function AboutHero({ hero }: { hero: Aboutpage["hero"] }) {
  const { heading, subHeading, text, heroImage } = hero;

  return (
    <section className="w-full bg-lilac pt-[var(--nav-offset)] pb-8 sm:pb-12">
      <div className="container w-full flex flex-col gap-8 sm:gap-10">
        <div className="w-full flex flex-col sm:flex-row justify-between gap-2 md:gap-6 lg:gap-10">
          <div className="flex-[0.5]">
            <h1 className="leading-snug -tracking-[0.24px] text-sm">
              {heading}
            </h1>
            <p className="text-[32px] tracking-tighter">{subHeading}</p>
          </div>
          <div className="flex-[0.5] flex">
            <div className="w-full max-w-[440px]">
              <p className="text-sm -tracking-[0.24px] leading-snug">{text}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-stretch">
          <div className="w-full h-fit rounded-lg overflow-hidden">
            <ImageKit
              image={heroImage as Media}
              alt={(heroImage as Media)?.altText ?? "About"}
              width={700}
              height={700}
              sizes="100vw"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

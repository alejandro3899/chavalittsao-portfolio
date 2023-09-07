import { Homepage, Media } from "@/types/cms";
import Hero from "../components/Hero";

export default function HomeHero({ hero }: { hero: Homepage["hero"] }) {
  const { baseImage, mobileImage, tabletImage } = hero.backgroundImage;

  return (
    <Hero
      className="items-stretch pb-20"
      bgImage={(baseImage as Media)?.imagekit?.url!}
      tabletBgImage={(tabletImage as Media)?.imagekit?.url}
      mobileBgImage={(mobileImage as Media)?.imagekit?.url}
    >
      <div className="w-full flex max-w-[300px] sm:max-w-full">
        <div className="container h-full flex flex-col lg:flex-row lg:items-end justify-end lg:justify-between gap-6 lg:gap-8 text-white">
          <div className="lg:flex-[0.5]">
            <p className="text-sm uppercase text-white leading-[1.4] tracking-[-0.24px] mb-2">
              {hero.heading}
            </p>
            <h1 className="text-white tracking-[-0.32px] text-3xl md:text-[32px]">
              {hero.subHeading}
            </h1>
          </div>

          <div className="lg:flex-[0.5]">
            <p className="paragraph text-white max-w-[505px]">
              {hero.heroText}
            </p>
          </div>
        </div>
      </div>
    </Hero>
  );
}

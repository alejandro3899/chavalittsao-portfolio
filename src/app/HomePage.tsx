"use client";

import { Homepage, WorkSummary as WorkSummaryType } from "@/types/cms";
import HomeAbout from "./HomeAbout";
import HomeGallery from "./HomeGallery";
import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeQuote from "./HomeQuote";
import WorkSummary from "../components/WorkSummary";

export default function HomePage({
  home,
  workSummary,
}: {
  home: Homepage;
  workSummary: WorkSummaryType;
}) {
  const {
    hero,
    intro,
    about,
    quoteBlock,
    workSummary: homeWorkSummary,
    gallery,
  } = home;

  return (
    <>
      <HomeHero hero={hero} />
      <HomeIntro intro={intro} />
      <HomeAbout about={about} />
      <HomeQuote quoteBlock={quoteBlock} />
      <section className="w-full py-8 sm:py-12">
        <div className="container flex flex-col">
          <h2 className="text-center md:text-left text-3xl tracking-[-0.84px] mb-8">
            {homeWorkSummary.heading}
          </h2>
          <WorkSummary workSummary={workSummary} />
        </div>
      </section>
      <HomeGallery gallery={gallery} />
    </>
  );
}

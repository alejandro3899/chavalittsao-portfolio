"use client";

import { Homepage, WorkSummary as WorkSummaryType } from "@/types/cms";
import HomeAbout from "./HomeAbout";
import HomeForum from "./HomeForum";
import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeQuote from "./HomeQuote";
import WorkSummary from "./components/WorkSummary";

export default function HomePage({
  home,
  workSummary,
}: {
  home: Homepage;
  workSummary: WorkSummaryType;
}) {
  const { hero, intro, about, quoteBlock, workSummary: homeWorkSummary } = home;

  return (
    <>
      <HomeHero hero={hero} />
      <HomeIntro intro={intro} />
      <HomeAbout about={about} />
      <HomeQuote quoteBlock={quoteBlock} />
      <section className="w-full py-8 sm:py-12">
        <div className="container flex flex-col">
          <h2 className="text-3xl tracking-[-0.84px] mb-8">
            {homeWorkSummary.heading}
          </h2>
          <WorkSummary workSummary={workSummary} />
        </div>
      </section>
      <HomeForum />
    </>
  );
}

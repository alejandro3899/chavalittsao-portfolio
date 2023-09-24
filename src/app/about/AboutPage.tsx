"use client";

import { Aboutpage, WorkSummary as WorkSummaryType } from "@/types/cms";
import QuoteBlock from "@/components/QuoteBlock";
import WorkSummary from "@/components/WorkSummary";
import AboutBio from "./AboutBio";
import AboutBioSlide from "./AboutBioSlide";
import AboutGallery from "./AboutGallery";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutPodcastSpotlight from "./AboutPodcastSpotlight";

export default function AboutPage({
  about,
  workSummary,
}: {
  about: Aboutpage;
  workSummary: WorkSummaryType;
}) {
  const {
    hero,
    intro,
    about: aboutTab,
    bio,
    gallery,
    quoteBlock1: { quote: quote1 },
    quoteBlock2: { quote: quote2 },
    podcastSpotlight,
    workSummary: aboutWorkSummary,
  } = about;

  return (
    <>
      <AboutHero hero={hero} />
      <AboutIntro intro={intro} />
      <AboutBio bio={bio} />
      <AboutBioSlide about={aboutTab} />
      {!quote1.hide && (
        <section className="w-full py-8 sm:py-12">
          <div className="container flex justify-center">
            <QuoteBlock theme="dark" quote={quote1} />
          </div>
        </section>
      )}
      {!quote2.hide && (
        <section className="w-full py-8 sm:py-12">
          <div className="container flex justify-center">
            <QuoteBlock theme="light" quote={quote2} />
          </div>
        </section>
      )}
      <AboutPodcastSpotlight podcastSpotlight={podcastSpotlight} />
      <AboutGallery gallery={gallery} />
      <section className="w-full bg-lilac pt-8 sm:pt-12 pb-24">
        <div className="container flex flex-col">
          <h2 className="text-center md:text-left tracking-[-0.84px] mb-8">
            {aboutWorkSummary.heading}
          </h2>
          <WorkSummary workSummary={workSummary} />
        </div>
      </section>
    </>
  );
}

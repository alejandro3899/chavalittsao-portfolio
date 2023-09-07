"use client";

import { Aboutpage, Media, WorkSummary as WorkSummaryType } from "@/types/cms";
import QuoteBlock from "../../components/QuoteBlock";
import WorkSummary from "../../components/WorkSummary";
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
    quoteBlock1,
    quoteBlock2,
    podcastSpotlight,
    workSummary: aboutWorkSummary,
  } = about;

  const { quote: quote1 } = quoteBlock1;
  const { quote: quote2 } = quoteBlock2;

  return (
    <>
      <AboutHero hero={hero} />
      <AboutIntro intro={intro} />
      <AboutBio bio={bio} />
      <AboutBioSlide about={aboutTab} />
      <section className="w-full py-8 sm:py-12">
        <div className="container flex justify-center">
          <QuoteBlock
            theme="dark"
            imgSrc={(quote1.image as Media).imagekit?.url!}
            imgAlt={(quote1.image as Media)?.altText ?? "Quote"}
            size={quote1.size}
            text={quote1.quoteText}
          />
        </div>
      </section>
      <section className="w-full py-8 sm:py-12">
        <div className="container flex justify-center">
          <QuoteBlock
            theme="light"
            imgSrc={(quote2.image as Media).imagekit?.url!}
            imgAlt={(quote2.image as Media)?.altText ?? "Quote"}
            size={quote2.size}
            text={quote2.quoteText}
          />
        </div>
      </section>
      <AboutPodcastSpotlight podcastSpotlight={podcastSpotlight} />
      <AboutGallery gallery={gallery} />
      <section className="w-full bg-lilac pt-8 sm:pt-12 pb-24">
        <div className="container flex flex-col">
          <h2 className="tracking-[-0.84px] mb-8">
            {aboutWorkSummary.heading}
          </h2>
          <WorkSummary workSummary={workSummary} />
        </div>
      </section>
    </>
  );
}

"use client";

import { Podcast, WorkSummary as WorkSummaryType } from "@/types/cms";
import PodcastHero from "./PodcastHero";
import PodcastsDetails from "./PodcastDetails";
import WorkSummary from "@/components/WorkSummary";

export default function PodcastPage({
  podcast,
  workSummary,
}: {
  podcast: Podcast;
  workSummary: WorkSummaryType;
}) {
  const {
    title,
    description,
    hero,
    info,
    share,
    workSummary: podcastsWorkSummary,
  } = podcast;

  return (
    <>
      <PodcastHero
        title={title}
        description={description}
        info={info}
        hero={hero}
        share={share}
      />
      <PodcastsDetails podcast={podcast} />
      <section className="w-full pt-8 sm:pt-12 pb-24">
        <div className="container flex flex-col">
          <h2 className="text-center md:text-left tracking-[-0.84px] mb-8">
            {podcastsWorkSummary.heading}
          </h2>
          <WorkSummary workSummary={workSummary} />
        </div>
      </section>
    </>
  );
}

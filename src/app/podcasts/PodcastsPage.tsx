"use client";

import { Podcastspage, WorkSummary as WorkSummaryType } from "@/types/cms";
import PodcastsHero from "./PodcastsHero";
import PodcastsDetails from "./PodcastsDetails";
import WorkSummary from "@/components/WorkSummary";

export default function PodcastsPage({
  podcasts,
  workSummary,
}: {
  podcasts: Podcastspage;
  workSummary: WorkSummaryType;
}) {
  const { hero, workSummary: podcastsWorkSummary } = podcasts;

  return (
    <>
      <PodcastsHero hero={hero} />
      <PodcastsDetails podcast={hero.showcasePodcast} />
      <section className="w-full pt-8 sm:pt-12 pb-24">
        <div className="container flex flex-col">
          <h2 className="tracking-[-0.84px] mb-8">
            {podcastsWorkSummary.heading}
          </h2>
          <WorkSummary workSummary={workSummary} />
        </div>
      </section>
    </>
  );
}

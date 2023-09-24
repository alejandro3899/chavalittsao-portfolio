"use client";

import { Podcast, Podcastspage } from "@/types/cms";
import LinkButton from "@/components/LinkButton";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function PodcastsDetails({
  podcast,
}: {
  podcast: Podcastspage["hero"]["showcasePodcast"];
}) {
  const [hideAll, setHideAll] = useState(true);

  const { episodes = [] } = podcast as Podcast;

  function LinkIcon({
    link,
  }: {
    link: NonNullable<Podcast["episodes"]>[0]["linkToEpisode"];
  }) {
    return (
      link && (
        <Link href={link?.url!}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-12 h-6 sm:h-12"
          >
            <line
              y1="-1"
              x2="32"
              y2="-1"
              transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.1812 34.8516)"
              stroke="#3D284F"
              strokeWidth="2"
            />
            <path
              d="M34.2222 27.7812V12.2249H18.6658"
              stroke="#3D284F"
              strokeWidth="2"
            />
          </svg>
        </Link>
      )
    );
  }

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container w-full flex-col">
        <h3 className="hidden sm:block text-xs leading-tight tracking-tight mb-7">
          ALL EPISODES
        </h3>
        <div className="flex flex-col gap-6 sm:gap-0">
          {(hideAll ? episodes.slice(0, 5) : episodes).map(
            (
              { title, moderator, presentedBy, date, duration, linkToEpisode },
              i
            ) => {
              const formattedDate = new Date(date).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              });

              return (
                <Fragment key={i}>
                  <div
                    key={i}
                    className={clsx(
                      "flex flex-col sm:flex-row justify-between items-stretch gap-20 sm:py-7 border-[#3D284F]",
                      {
                        "sm:border-y": i === 0,
                        "sm:border-b": i !== 0,
                      }
                    )}
                  >
                    <div className="flex-[0.5] flex justify-between gap-2 sm:gap-12">
                      <div className="w-full h-full flex flex-col justify-between gap-2 sm:gap-0">
                        <h4 className="font-serif font-light text-3xl sm:text-[34px]">
                          {title}
                        </h4>
                        <div className="flex gap-6">
                          <span className="leading-tight tracking-tight text-xs uppercase">
                            {duration}
                          </span>
                          <span className="leading-tight tracking-tight text-xs uppercase">
                            {formattedDate}
                          </span>
                        </div>
                      </div>
                      <div className="sm:hidden">
                        <LinkIcon link={linkToEpisode!} />
                      </div>
                    </div>

                    <div className="sm:flex-[0.5] flex justify-end sm:justify-between gap-6">
                      <div className="w-full sm:w-auto h-full flex flex-row sm:flex-col gap-12">
                        <div className="flex flex-col gap-2">
                          <span className="leading-snug font-semibold text-xs -tracking-[0.24px] uppercase">
                            PRESENTED AND HOSTED BY
                          </span>
                          <span className="leading-none font-serif font-light text-base sm:text-[18px]">
                            {presentedBy}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="leading-snug font-semibold text-xs -tracking-[0.24px] uppercase">
                            MODERATOR
                          </span>
                          <span className="leading-none font-serif font-light text-base sm:text-[18px]">
                            {moderator}
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:flex h-full">
                        <LinkIcon link={linkToEpisode!} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-royal-purple block sm:hidden" />
                </Fragment>
              );
            }
          )}
        </div>
        {hideAll && (
          <div className="mt-7">
            <LinkButton
              className="leading-snug tracking-tighter"
              onClick={() => setHideAll(false)}
            >
              more+
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  );
}

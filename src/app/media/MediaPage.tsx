"use client";

import { Mediapage } from "@/types/cms";
import MediaPress from "./MediaPress";
import MediaPressMaterial from "./MediaPressMaterial";
import MediaBios from "./MediaBios";
import MediaSocials from "./MediaSocials";

export default function MediaPage({ media }: { media: Mediapage }) {
  const { header, pressMaterial, press, bios, socials } = media;

  return (
    <>
      <section className="w-full bg-lilac pt-[calc(var(--nav-offset)+24px)] sm:pt-[calc(var(--nav-offset)+36px)] pb-8 sm:pb-12">
        <div className="container xl:!max-w-[1200px] w-full">
          <header>
            <h1 className="text-4xl sm:text-[42px] leading-none -tracking-[1.26px]">
              {header.heading}
            </h1>
          </header>
        </div>
      </section>
      <MediaPress press={press} />
      <MediaPressMaterial pressMaterial={pressMaterial} />
      <MediaBios bios={bios} />
      <MediaSocials socials={socials} />
    </>
  );
}

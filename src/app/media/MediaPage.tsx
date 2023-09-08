"use client";

import { Mediapage } from "@/types/cms";

export default function MediaPage({ media }: { media: Mediapage }) {
  const { header, pressMaterial, press, bios, socials } = media;

  return (
    <>
      <section className="w-full bg-lilac pt-[var(--nav-offset)] pb-8 sm:pb-12">
        <div className="container w-full">
          <header>
            <h1 className="text-4xl sm:text-[42px] leading-none -tracking-[1.26px]">
              {header.heading}
            </h1>
          </header>
        </div>
      </section>
    </>
  );
}

"use client";

import { Footer as FooterType, Media, Social } from "@/types/cms";
import clsx from "clsx";
import Link from "next/link";
import ImageKit from "./ImageKit";

export default function Footer({
  footerData,
  socialsData,
}: {
  footerData: FooterType;
  socialsData: Social;
}) {
  const { footerLogo, footerLinks, footerText, companyLinks, contact } =
    footerData;

  return (
    <footer className="w-full pt-12">
      <div className="container w-full flex flex-col">
        {/* top */}
        <div className="w-full bg-lilac flex flex-col lg:flex-row items-stretch justify-between shadow-sm rounded-lg px-10 sm:px-16 py-20 gap-20 lg:gap-8">
          {/* left */}
          <div className="max-w-lg w-full flex flex-col-reverse sm:flex-col gap-6">
            <div className="h-full">
              <p className="text-base font-serif">{footerText}</p>
            </div>
            <div className="h-[60px] lg:min-h-[60px] flex items-center gap-6">
              {(companyLinks ?? []).map(
                ({ hide, link, logo }, i) =>
                  !hide && (
                    <Link key={i} href={link}>
                      <ImageKit
                        image={logo as Media}
                        alt={(logo as Media)?.altText}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[60px] w-auto object-contain"
                      />
                    </Link>
                  )
              )}
            </div>
          </div>

          {/* right */}
          <div className="w-fit">
            <div className="h-full flex flex-col justify-between gap-6">
              <div className="h-full">
                <ul className="flex flex-col">
                  {(contact ?? []).map((entry, i) => (
                    <li key={i} className="text-base leading-[1.4]">
                      {entry.content}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:h-[60px] lg:min-h-[60px] flex items-center gap-4">
                {(socialsData?.socialMediaLinks ?? []).map(
                  ({ link, logo, hide }, i) =>
                    !hide && (
                      <Link
                        key={i}
                        href={link}
                        className="w-6 py-2 flex items-center justify-center"
                      >
                        <img
                          src={(logo as Media)?.imagekit?.url}
                          alt={(logo as Media)?.altText}
                          className="w-max object-contain"
                        />
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="py-8 flex justify-between items-center gap-8">
          <ul className="flex flex-wrap sm:items-center gap-4 sm:gap-10">
            {(footerLinks ?? []).map(({ label, url, hide }, i) => {
              return (
                !hide && (
                  <li key={i}>
                    <Link
                      className={clsx(
                        "text-sm uppercase leading-none text-royal-purple",
                        "hover:text-royal-purple transition-all"
                      )}
                      href={url}
                    >
                      {label}
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
          <button
            className="min-w-fit text-sm uppercase outline-none focus:outline-none focus-visible:outline-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {footerLogo}
          </button>
        </div>
      </div>
    </footer>
  );
}

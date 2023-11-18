"use client";

import clsx from "clsx";

export default function Hero({
  bgImage,
  bgImageEffectMask,
  mobileBgImage,
  mobileBgImageEffectMask,
  tabletBgImage,
  tabletBgImageEffectMask,
  className,
  children,
  bgBreak = "sm",
}: {
  bgImage?: string;
  bgImageEffectMask?: string;
  mobileBgImage?: string;
  mobileBgImageEffectMask?: string;
  tabletBgImage?: string;
  tabletBgImageEffectMask?: string;
  className?: string;
  children?: React.ReactNode;
  bgBreak?: "sm" | "md" | "lg";
}) {
  return (
    <>
      <style>
        {`
        .hero-bg {
          background-image: url(${bgImage});
        }
        ${
          tabletBgImage &&
          `
          @media (max-width: 1279px) {
            .hero-bg {
              background-image: url(${tabletBgImage});
            }
          }` || ``
        }
        ${
          (mobileBgImage || tabletBgImage) &&
          `@media (max-width: ${
            bgBreak === "sm" ? "639px" : bgBreak === "md" ? "767px" : "1023px"
          }) {
            .hero-bg {
              background-image: url(${mobileBgImage || tabletBgImage});
            }
          }` || ``
        }

        ${
          (bgImageEffectMask) &&
          `
          .hero-bg-effect {
            background-image: url(${bgImageEffectMask});
            filter: url(#turbulence);
          }` || ``
        }
        ${
          tabletBgImage &&
          `
          @media (max-width: 1279px) {
            .hero-bg-effect {
              background-image: ${tabletBgImageEffectMask ? "url("+tabletBgImageEffectMask+")" : "none"};
              filter: url(#turbulence);
            }
          }` || ``
        }
        ${
          mobileBgImage &&
          `@media (max-width: ${
            bgBreak === "sm" ? "639px" : bgBreak === "md" ? "767px" : "1023px"
          }) {
            .hero-bg-effect {
              background-image: ${mobileBgImageEffectMask ? "url("+mobileBgImageEffectMask+")" : "none"};
              filter: url(#turbulence);
            }
          }` || ``
        }
        `}
      </style>
      <section
        className={clsx(
          "hero-bg w-full min-h-[100vh] flex items-stretch bg-cover bg-center bg-no-repeat pt-[var(--nav-offset)]",
          className
        )}
      >
        <div className="hero-bg-effect absolute w-full min-h-[100vh] top-0 left-0 bg-cover bg-center bg-no-repeat pointer-events-none">
          <svg className="absolute pointer-events-none opacity-0">
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
              <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
              <feDisplacementMap scale="6" in="SourceGraphic"></feDisplacementMap>
              <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="120s" keyTimes="0;0.5;1" values="0.02 0.06;0.03 0.01;0.02 0.06" repeatCount="indefinite"></animate>
            </filter>
          </svg>
        </div>
        {children}
      </section>
    </>
  );
}

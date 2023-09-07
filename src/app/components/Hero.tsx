"use client";

import clsx from "clsx";

export default function Hero({
  bgImage,
  mobileBgImage,
  tabletBgImage,
  className,
  children,
  bgBreak = "sm",
}: {
  bgImage?: string;
  mobileBgImage?: string;
  tabletBgImage?: string;
  className?: string;
  children?: React.ReactNode;
  bgBreak?: "sm" | "md" | "lg";
}) {
  return (
    <>
      <style>
        {`
        .hero-bg {
          background-image: url(${mobileBgImage ?? bgImage});
        }
        ${
          tabletBgImage &&
          `
          @media (min-width: 768px) {
            .hero-bg {
              background-image: url(${tabletBgImage ?? bgImage});
            }
          }`
        }
        ${
          (mobileBgImage || tabletBgImage) &&
          `@media (min-width: ${
            bgBreak === "sm" ? "640px" : bgBreak === "md" ? "768px" : "1024px"
          }) {
          .hero-bg {
            background-image: url(${bgImage});
          }
          }`
        }
        `}
      </style>
      <section
        className={clsx(
          "hero-bg w-full min-h-[100vh] flex items-stretch bg-cover bg-center bg-no-repeat pt-[var(--nav-offset)]",
          className
        )}
      >
        {children}
      </section>
    </>
  );
}

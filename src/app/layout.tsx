import "./globals.css";

import { Favicon, Media, Settings } from "@/types/cms";
import { getGlob } from "@/utils/api";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

const gtAlpina = localFont({
  src: [
    { path: "../fonts/GT-Alpina-Standard-Light-Trial.otf", weight: "300" },
    { path: "../fonts/GT-Alpina-Standard-Regular-Trial.otf", weight: "400" },
    { path: "../fonts/GT-Alpina-Standard-Medium-Trial.otf", weight: "500" },
    { path: "../fonts/GT-Alpina-Standard-Bold-Trial.otf", weight: "700" },
  ],
  variable: "--font-gt-alpina",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chavalit Tsao",
  description: "Chavalit Tsao",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { favicon } = await getGlob<Favicon>("/favicon");
  const faviconUrl = (favicon as Media)?.imagekit?.url;
  const settings = await getGlob<Settings>(
    "/settings",
    {},
    { next: { tags: ["settings"] } }
  );

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {faviconUrl && (
          <link rel="icon" type="image/x-icon" href={faviconUrl} sizes="any" />
        )}
      </head>
      <body
        className={clsx(
          poppins.variable,
          gtAlpina.variable,
          "bg-sand font-sans text-royal-purple"
        )}
        style={{backgroundColor: settings.siteBackgroundColor}}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

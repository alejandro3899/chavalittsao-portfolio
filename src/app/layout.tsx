import "./globals.css";

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
  subsets: ["latin"],
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
  // const { favicon } = await getGlob<Favicon>("/favicon");

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <meta name="color-scheme" content="light only" />
      <body
        className={clsx(
          poppins.variable,
          gtAlpina.variable,
          "bg-pebble font-sans text-royal-purple"
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

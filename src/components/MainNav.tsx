"use client";

import { Navigation, Settings } from "@/types/cms";
import Logo from "./Logo";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

export default function MainNav({
  theme = "default",
  navData,
  settings,
}: {
  theme: "light" | "default";
} & { navData: Navigation; settings: Settings }) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const [navOpen, setNavOpen] = useState(false);
  const active = selectedLayoutSegment?.toLowerCase();
  const isLight = theme === "light";

  return (
    <nav className="absolute left-0 top-0 w-full flex items-center justify-center text-white py-5 z-10">
      <div className="w-full max-w-[1600px] flex justify-between items-center gap-8 sm:gap-12 px-4 sm:px-5">
        <div className="md:flex-[0.5] flex">
          <Logo
            siteBranding={settings.siteBranding}
            text="CHAVALIT TSAO"
            theme={theme}
          />
        </div>
        <ul className="hidden md:flex flex-[0.5] items-center justify-between gap-6 sm:gap-12 md:gap-16">
          {(navData?.mainNavigation ?? []).map(
            ({ label, url, hide }, i) =>
              !hide && (
                <li key={i}>
                  <Link
                    className={clsx(
                      "font-normal text-xs uppercase leading-[1.4]",
                      isLight ? "hover:text-sand" : "hover:text-royal-purple",
                      active === label.toLowerCase()
                        ? isLight
                          ? "text-sand"
                          : "text-royal-purple"
                        : isLight
                        ? "text-sand"
                        : "text-royal-purple",
                      "transiton-all"
                    )}
                    href={url}
                  >
                    {label}
                  </Link>
                </li>
              )
          )}
        </ul>
        <Menu as="div" className="relative block md:hidden">
          {({ open, close }) => (
            <NavMobile
              open={open}
              close={close}
              navLinks={navData["mainNavigation"]}
              theme={theme}
            />
          )}
        </Menu>
      </div>
    </nav>
  );
}

function NavMobile({
  open,
  close,
  navLinks,
  theme = "default",
}: {
  open: boolean;
  close: () => void;
  navLinks: Navigation["mainNavigation"];
  theme?: "light" | "default";
}) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        close();
      }
    });
  }, []);

  return (
    <div>
      <Menu.Button
        aria-label="menu"
        className="grid place-content-center focus:outline-none"
        onClick={() => (open ? close() : null)}
      >
        <span
          className={clsx(
            "text-sm leading-none",
            theme === "default" ? "text-royal-purple" : "text-white"
          )}
        >
          MENU
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-7 grid items-center h-[calc(100dvh-var(--height-nav)-200px)] w-[300px] origin-top-right content-between gap-4 overflow-auto rounded-2xl bg-[rgb(220,220,220)]/50 p-8 text-royal-purple shadow-lg backdrop-blur-md focus:outline-none md:min-h-[600px] md:w-[400px] md:p-12">
          <div
            className={clsx("grid gap-2 transition-colors duration-100", {
              "hover:text-white/30": theme === "light",
              "hover:text-royal-purple/30": theme === "default",
            })}
          >
            {(navLinks ?? []).map(
              ({ label, url, hide }, i) =>
                !hide && (
                  <Menu.Item key={i}>
                    {() => (
                      <Link
                        href={url}
                        className={clsx(
                          "group flex items-end gap-2 text-sm transition-colors duration-150",
                          {
                            "hover:text-white": theme === "light",
                            "hover:text-royal-purple": theme === "default",
                          }
                        )}
                      >
                        <span className="button-text leading-snug">
                          {i + 1}.
                        </span>
                        <span className="decoration-[1px] underline-offset-8 group-hover:underline">
                          {label}
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                )
            )}
          </div>
        </Menu.Items>
      </Transition>
    </div>
  );
}

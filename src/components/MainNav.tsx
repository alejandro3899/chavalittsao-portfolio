"use client";

import { Dropdown } from "@/types";
import { Navigation, Settings } from "@/types/cms";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";
import NavMobile from "./NavMobile";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainNav({
  theme = "default",
  navData,
  settings,
}: {
  theme: "light" | "default";
} & { navData: Navigation; settings: Settings }) {
  const [activeDropdown, setActiveDropdown] = useState<Dropdown | null>(null);
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  const [dropdownKey, setDropdownKey] = useState<string | null>(null);
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const active = selectedLayoutSegment?.toLowerCase();
  const isLight = theme === "light";
  const itemsLength = activeDropdown?.items?.length ?? 0;
  const transitionDelay = !activeDropdown
    ? `${(itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3}s`
    : "0s";

  useEffect(() => {
    const main = document.getElementById("main")!;

    const handleClick = () => {
      setActiveDropdown(null);
    };

    main.addEventListener("click", handleClick);

    return () => main.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    activeDropdown?.label && setDropdownKey(activeDropdown.label);
  }, [activeDropdown]);

  return (
    <nav
      className="absolute left-0 top-0 w-full flex flex-col items-center justify-center text-white py-5 z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={clsx(
          "absolute left-0 top-0 w-full h-full hidden md:block",
          {
            "bg-pebble": activeDropdown,
          },
          "transition-all duration-500"
        )}
        style={{
          transitionDelay,
        }}
      />
      <div className="relative w-full max-w-[1600px] flex justify-between items-center gap-8 sm:gap-12 px-4 sm:px-5 z-10">
        <div className="relative md:flex-[0.5] flex z-10">
          <Logo
            siteBranding={settings.siteBranding}
            text="CHAVALIT TSAO"
            theme={navMobileOpen ? "default" : theme}
            linkProps={{
              ...({
                style: {
                  transitionDelay,
                },
              } as any),
            }}
          />
        </div>
        <ul className="hidden md:flex flex-[0.5] items-center justify-between gap-6 sm:gap-12 md:gap-16">
          {(navData?.mainNavigation ?? []).map((item, i) => {
            const { label, type, hide } = item;

            return !hide && type === "single" ? (
              <li key={i}>
                <Link
                  className={clsx(
                    "text-xs uppercase leading-snug",
                    activeDropdown
                      ? "text-base-purple hover:text-base-purple"
                      : isLight
                      ? "text-sand hover:text-sand"
                      : "text-royal-purple hover:text-royal-purple",
                    "transiton-all"
                  )}
                  style={{
                    transitionDelay,
                  }}
                  href={item.url}
                  onClick={() => setActiveDropdown(null)}
                >
                  {label}
                </Link>
              </li>
            ) : (
              <button
                key={i}
                tabIndex={0}
                onClick={() => {
                  setActiveDropdown((prev) => {
                    return prev && prev.label === label
                      ? null
                      : {
                          label,
                          items: item.dropdown,
                        };
                  });
                }}
                className={clsx(
                  "text-xs uppercase leading-snug",
                  activeDropdown
                    ? "text-base-purple hover:text-base-purple"
                    : isLight
                    ? "text-sand hover:text-sand"
                    : "text-royal-purple hover:text-royal-purple",
                  "cursor-pointer transiton-all"
                )}
                style={{
                  transitionDelay,
                }}
              >
                {label}
              </button>
            );
          })}
        </ul>
        <NavMobile
          open={navMobileOpen}
          setOpen={(open) => setNavMobileOpen(open)}
          navItems={navData["mainNavigation"]}
          theme={theme}
        />
      </div>

      <NavDropdown
        key={dropdownKey}
        activeDropdown={activeDropdown}
        setActiveDropdown={(dropdown) => {
          setActiveDropdown(dropdown);
        }}
      />
    </nav>
  );
}

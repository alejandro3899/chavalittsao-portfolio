import { Navigation } from "@/types/cms";
import { navFadeIn, slideIn } from "@/utils/variants";
import NavMobileDropdown from "./NavMobileDropdown";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import AnimateHeight from "react-animate-height";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NavMobile({
  open,
  setOpen,
  navItems = [],
  theme = "default",
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  navItems: Navigation["mainNavigation"];
  theme?: "light" | "default";
}) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const itemsLength = navItems.length ?? 0;
  let transitionDelay = !open
    ? (itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3
    : 0;

  return (
    <div className="md:hidden">
      <button
        aria-label="menu"
        className={clsx(
          "relative grid place-content-center",
          theme === "default" || open
            ? "text-royal-purple focus-visible:outline-royal-purple"
            : "text-white focus-visible:outline-white",
          "py-2 z-10",
          "transition-all"
        )}
        style={{
          transition: `color 0.15s ease ${transitionDelay}s`,
        }}
        onClick={() => {
          open && setOpenItem(null);
          setOpen(!open);
        }}
      >
        {open ? (
          <span className="text-sm leading-none">Close</span>
        ) : (
          <span className="text-sm leading-none">Menu</span>
        )}
      </button>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open && (
            <m.div
              variants={navFadeIn(
                (itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3
              )}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 left-0 w-full h-screen min-h-[500px] flex justify-center bg-pebble py-24"
            >
              <ul className="w-full flex flex-col items-center gap-8">
                {navItems.map((item, i) => {
                  const { id, label, hide } = item;

                  const isHidden = openItem !== id;

                  return (
                    !hide && (
                      <li key={i} className="w-full">
                        {item.type === "single" ? (
                          <m.div
                            variants={slideIn((i + 1) * 0.075)}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="px-4"
                          >
                            <Link
                              href={item.url}
                              target={item.newTab ? "_blank" : "_self"}
                              className="block text-xl text-royal-purple leading-none py-0.5"
                            >
                              <span className="block capitalize">
                                {label.toLowerCase()}
                              </span>
                            </Link>
                          </m.div>
                        ) : (
                          <AnimateHeight
                            height={!isHidden ? "auto" : 28}
                            className="w-full overflow-hidden"
                          >
                            <m.div
                              variants={slideIn((i + 1) * 0.075)}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="w-full flex flex-col text-royal-purple overflow-hidden py-0.5 px-4"
                            >
                              <button
                                className="w-full flex justify-between items-center gap-4 cursor-pointer"
                                onClick={() =>
                                  setOpenItem((prev) =>
                                    prev === id ? null : id!
                                  )
                                }
                              >
                                <span className="text-xl capitalize leading-none">
                                  {label.toLowerCase()}
                                </span>
                                <span>
                                  <ChevronDown
                                    size={24}
                                    strokeWidth={1}
                                    className={clsx(
                                      isHidden ? "" : "rotate-180",
                                      "transition-transform duration-200"
                                    )}
                                  />
                                </span>
                              </button>
                              <NavMobileDropdown
                                hidden={isHidden}
                                dropdownItems={item.dropdown}
                                close={() => setOpenItem(null)}
                              />
                            </m.div>
                          </AnimateHeight>
                        )}
                      </li>
                    )
                  );
                })}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}

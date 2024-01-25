import { Dropdown } from "@/types";
import { fadeIn, navFadeIn, rightLeft } from "@/utils/variants";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";

export default function NavDropdown({
  activeDropdown,
  setActiveDropdown,
}: {
  activeDropdown: Dropdown | null;
  setActiveDropdown: (dropdown: Dropdown | null) => void;
}) {
  const itemsLength = activeDropdown?.items?.length ?? 0;

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {activeDropdown && (
          <m.div
            onMouseLeave={()=> setActiveDropdown(null)}
            variants={navFadeIn(
              (itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3,
              0.5
            )}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full hidden md:flex flex-col pt-12 pb-24 px-4 sm:px-5 z-10"
          >
            <m.p
              variants={fadeIn()}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="font-medium text-sm text-base-purple uppercase leading-snug -tracking-[0.28px] mb-4"
            >
              {activeDropdown.label}
            </m.p>
            <ul className="flex flex-col gap-3">
              {(activeDropdown?.items ?? []).map(
                ({ label, url, hide, newTab }, i) =>
                  !hide && (
                    <m.li
                      key={i}
                      variants={rightLeft(i * 0.075, 25)}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="text-sm leading-snug -tracking-[0.28px]"
                    >
                      <Link
                        href={url}
                        target={newTab ? "_blank" : "_self"}
                        className="block w-fit text-black"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {label}
                      </Link>
                    </m.li>
                  )
              )}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

import { Dropdown } from "@/types";
import { rightLeft } from "@/utils/variants";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";

export default function NavMobileDropdown({
  dropdownItems = [],
  hidden,
  close,
}: {
  dropdownItems: Dropdown["items"];
  hidden: boolean;
  close: () => void;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {!hidden && (
          <m.ul className="flex flex-col gap-3 pt-4 px-4">
            {dropdownItems.map(
              ({ label, url, hide, newTab }, i) =>
                !hide && (
                  <m.li
                    key={i}
                    variants={rightLeft(i * 0.075, 25)}
                    initial="visible"
                    exit="visible"
                    className="text-sm leading-snug"
                  >
                    <Link
                      href={url}
                      target={newTab ? "_blank" : "_self"}
                      className="w-fit text-royal-purple py-0.5"
                      onClick={() => close()}
                    >
                      {label}
                    </Link>
                  </m.li>
                )
            )}
          </m.ul>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

import { Media, Settings } from "@/types/cms";
import ImageKit from "./ImageKit";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

export default function Logo({
  text,
  theme = "default",
  siteBranding,
  linkProps,
}: {
  text: string;
  theme?: "light" | "default";
  siteBranding?: Settings["siteBranding"];
  linkProps?: Omit<LinkProps, "href">;
}) {
  siteBranding = siteBranding as Media;
 

  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className={clsx(
          "font-sans text-xl",
          theme === "light" ? "text-white" : "text-royal-purple",
          "transition-[color]"
        )}
        {...(linkProps ?? {})}
      >
        {siteBranding ? (
          <ImageKit
            image={siteBranding}
            alt={siteBranding?.altText}
            height={siteBranding?.height ?? 20}
            width={siteBranding?.width ?? 152}
          />
        ) : (
          text
        )}
      </Link>
    </div>
  );
}

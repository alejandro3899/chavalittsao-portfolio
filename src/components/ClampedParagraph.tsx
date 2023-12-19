"use client";

import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import clsx from "clsx";
import { SlateToDomConfig } from "slate-serializers";
import { useState } from "react";
import LinkButton from "./LinkButton";

export default function ClampedParagraph({
  className = "",
  richContent,
  number = 5,
  config,
  buttonClassName,
  ...props
}: {
  richContent: {
    [k: string]: unknown;
  }[];
  number?: number;
  config?: SlateToDomConfig;
  buttonClassName?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const [clamped, setClamped] = useState(true);
  const paragraphToShow = clamped? richContent?.slice(0, number*2) || [] : richContent;

  return (
    <>
      <div
        className={clsx("richtext", className)}
        dangerouslySetInnerHTML={slateToHtml(
          paragraphToShow,
          config ?? richTextConfig
        )}
        {...props}
      />
      {clamped && (
        <LinkButton
          className={clsx("w-fit mt-4", buttonClassName)}
          onClick={() => setClamped(false)}
        >
          more+
        </LinkButton>
      )}
    </>
  );
}

"use client";

import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import clsx from "clsx";
import { SlateToDomConfig } from "slate-serializers";
import { useState } from "react";
import LinkButton from "./LinkButton";

export default function ClampedText({
  className = "",
  richContent,
  lines = 5,
  config,
  buttonClassName,
  ...props
}: {
  richContent: {
    [k: string]: unknown;
  }[];
  lines?: number;
  config?: SlateToDomConfig;
  buttonClassName?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const [clamped, setClamped] = useState(true);

  return (
    <>
      <div
        style={
          {
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: clamped ? lines.toString() : "unset",
          } as any
        }
        className={clsx("richtext", className)}
        dangerouslySetInnerHTML={slateToHtml(
          richContent,
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

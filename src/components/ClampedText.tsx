"use client";

import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import clsx from "clsx";
import { SlateToDomConfig } from "slate-serializers";
import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";

export default function ClampedText({
    className = "",
    richContent,
    text,
    lines = 5,
    config,
    buttonClassName,
    ...props
}: {
    richContent?: {
        [k: string]: unknown;
    }[];
    text?: string;
    lines?: number;
    config?: SlateToDomConfig;
    buttonClassName?: string;
} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) {
    const [clamped, setClamped] = useState(true);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const element = document.getElementById("clamped-text-container");
        if (element) {
            setIsOverflowing(element.scrollHeight > element.clientHeight);
        }
    }, [richContent, lines]);

    return (
        <>
            {richContent && (
                <div
                    id="clamped-text-container"
                    style={
                        {
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: clamped
                                ? lines.toString()
                                : "unset",
                        } as any
                    }
                    className={clsx("richtext", className)}
                    dangerouslySetInnerHTML={slateToHtml(
                        richContent,
                        config ?? richTextConfig
                    )}
                    {...props}
                />
            )}
            {text && (
                <div
                   id="clamped-text-container"
                    style={
                        {
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: clamped
                                ? lines.toString()
                                : "unset",
                        } as any
                    }
                    className={className}
                >
                    {text}
                </div>
            )}
            {isOverflowing && (
                <LinkButton
                    className={clsx("w-fit mt-4", buttonClassName)}
                    onClick={() => setClamped(!clamped)}
                >
                    {clamped ? "more+" : "less-"}
                </LinkButton>
            )}
        </>
    );
}

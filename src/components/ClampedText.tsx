import React, { useEffect, useState } from "react";
import clsx from "clsx";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import { SlateToDomConfig } from "slate-serializers";
import LinkButton from "./LinkButton";
import { AnimateChangeInHeight } from "./AnimateChangeInHeight";

interface ClampedTextProps {
    className?: string;
    richContent?: {
        [k: string]: unknown;
    }[];
    text?: string;
    lines?: number;
    config?: SlateToDomConfig;
    buttonClassName?: string;
}

export default function ClampedText({
    className = "",
    richContent,
    text,
    lines = 5,
    config,
    buttonClassName,
    ...props
}: ClampedTextProps &
    React.DetailedHTMLProps<
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
    }, [richContent, text, lines]);

    return (
        <>
            {(richContent || text) && (
                <AnimateChangeInHeight>
                    <div
                        id="clamped-text-container"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: clamped
                                ? lines.toString()
                                : "unset",
                            overflow: "hidden",
                        }}
                        className={clsx(
                            "richtext",
                            className
                        )}
                        dangerouslySetInnerHTML={
                            richContent
                                ? slateToHtml(
                                      richContent,
                                      config ?? richTextConfig
                                  )
                                : undefined
                        }
                        {...props}
                    >
                        {text && text}
                    </div>
                </AnimateChangeInHeight>
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

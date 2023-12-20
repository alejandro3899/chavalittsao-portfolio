"use client";

import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";
import clsx from "clsx";
import { SlateToDomConfig } from "slate-serializers";
import { useEffect, useState } from "react";
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
    const paragraphToShow = clamped
        ? richContent?.slice(0, number * 2) || []
        : richContent;

    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const element = document.getElementById("clamped-text-container");
        if (element) {
            setIsOverflowing(element.scrollHeight > element.clientHeight);
        }
    }, [richContent, number]);

    return (
        <>
            <div
                id="clamped-text-container"
                className={clsx("richtext", className)}
                dangerouslySetInnerHTML={slateToHtml(
                    paragraphToShow,
                    config ?? richTextConfig
                )}
                {...props}
            />
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

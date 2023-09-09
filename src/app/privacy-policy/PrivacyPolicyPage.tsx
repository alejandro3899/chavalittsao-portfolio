"use client";

import { Privacypolicypage } from "@/types/cms";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";

export default function PrivacyPolicyPage({
  privacyPolicy,
}: {
  privacyPolicy: Privacypolicypage;
}) {
  const { heading, content } = privacyPolicy;

  return (
    <section className="w-full flex justify-center pb-8 sm:pb-12 pt-[var(--nav-offset)]">
      <div className="container flex md:flex-row flex-col justify-between gap-6 md:gap-8">
        <div className="md:flex-[0.5]">
          <div className="max-w-[280px]">
            <h1 className="text-3xl sm:text-[32px] leading-none -tracking-[0.96px] sm:tracking-tighter">
              {heading}
            </h1>
          </div>
        </div>

        <div className="w-full md:flex-[0.5] md:max-w-[680px]">
          <div
            className="richtext text-xs [&_*]:text-xs [&_*]:tracking-tight [&_*]:leading-snug"
            dangerouslySetInnerHTML={slateToHtml(content, richTextConfig)}
          />
        </div>
      </div>
    </section>
  );
}

import { Book } from "@/types/cms";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";

export default function BookIntro({ intro }: { intro: Book["intro"] }) {
  const { introText } = intro;

  return (
    <div className="section w-full py-16 sm:py-20">
      <div className="container max-w-[780px] w-full flex items-center justify-center">
        <div className="w-full">
          <div
            dangerouslySetInnerHTML={slateToHtml(introText, richTextConfig)}
            className="text-base text-center leading-snug tracking-tighter"
          />
        </div>
      </div>
    </div>
  );
}

import { Book } from "@/types/cms";

export default function BookIntro({ intro }: { intro: Book["intro"] }) {
  const { introText } = intro;

  return (
    <div className="section w-full py-16 sm:py-20">
      <div className="container max-w-[780px] w-full flex items-center justify-center">
        <div className="w-full">
          <p className="text-base text-center leading-snug tracking-tighter">
            {introText}
          </p>
        </div>
      </div>
    </div>
  );
}

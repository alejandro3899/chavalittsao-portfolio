import { Aboutpage, Media } from "@/types/cms";
import ImageKit from "@/components/ImageKit";
import ClampedText from "@/components/ClampedText";

export default function AboutIntro({ intro }: { intro: Aboutpage["intro"] }) {
  const { heading, image, excerpt } = intro;

  return (
    <section className="w-full bg-lilac pt-8 sm:pt-12 pb-20 sm:pb-12">
      <div className="container w-full flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-14">
        <h2 className="block md:hidden text-center text-[21px] uppercase leading-tight mb-2">
          {heading}
        </h2>
        <div className="md:flex-[0.5] flex items-center">
          <ImageKit
            image={image as Media}
            alt={(image as Media)?.altText ?? "About"}
            width={600}
            height={600}
            sizes="100vw"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:flex-[0.5] flex items-end">
          <div className="max-w-[540px] w-full flex flex-col justify-end md:gap-6">
            <h2 className="hidden md:block text-[21px] uppercase leading-tight">
              {heading}
            </h2>
            <ClampedText
              richContent={excerpt}
              lines={8}
              className="paragraph"
              buttonClassName="text-base leading-[1.4] tracking-tighter"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

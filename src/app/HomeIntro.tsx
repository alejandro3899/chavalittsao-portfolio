import { Homepage, Media } from "@/types/cms";
import ImageKit from "@/components/ImageKit";
import ClampedText from "@/components/ClampedText";

export default function HomeIntro({ intro }: { intro: Homepage["intro"] }) {
  const { heading, image, excerpt } = intro;

  return (
    <>
      <section className="w-full flex lg:items-stretch py-8 sm:py-12">
        <div className="container flex flex-col lg:flex-row lg:justify-between items-stretch gap-8 sm:gap-12">
          <div className="max-w-xl lg:max-w-full flex lg:flex-[0.5] flex-col lg:justify-end mx-auto">
            <h2 className="text-lg sm:text-[21px] text-center lg:text-left mb-6">
              {heading}
            </h2>
            <div className="block lg:hidden w-full max-w-xl lg:flex-[0.5] mb-6">
              <ImageKit
                image={image as Media}
                alt={(image as Media)?.altText}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <ClampedText
                richContent={excerpt}
                lines={5}
                className="text-[14.33px] font-sans text-royal-purple -tracking-[0.26px] leading-snug"
              />
            </div>
          </div>

          <div className="hidden lg:block min-h-[400px] lg:flex-[0.5]">
            <ImageKit
              image={image as Media}
              alt={(image as Media)?.altText}
              width={400}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

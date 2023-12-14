import { Book, Media } from "@/types/cms";
import ImageKit from "@/components/ImageKit";
import slateToHtml, { richTextConfig } from "@/utils/slateToHtml";

export default function BookExcerpt({ excerpt }: { excerpt: Book["excerpt"] }) {
  const { excerpt: excerptText, image, page } = excerpt;

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container w-full flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:gap-24">
        <div className="max-w-[522px] lg:h-[95vh] lg:max-h-[800px] lg:max-w-full w-full mx-auto lg:flex-[0.5]">
          <div className="w-full h-full">
            <ImageKit
              image={image as Media}
              alt={(image as Media)?.altText}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto lg:h-full rounded-lg object-contain lg:object-cover"
            />
          </div>
        </div>
        <div className="lg:flex-[0.5]">
          <div className="max-w-[522px] mx-auto w-full h-full flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-xs uppercase text-center">Excerpt</h2>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-1 font-sans font-light text-base sm:text-[22.33px] text-center leading-[1.3] tracking-tightest">
                <span>“</span>
                <div
                  dangerouslySetInnerHTML={slateToHtml(
                    excerptText,
                    richTextConfig
                  )}
                />
                <span>”</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

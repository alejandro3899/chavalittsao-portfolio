import { Bookspage, Media } from "@/types/cms";
import ImageKit from "@/components/ImageKit";

export default function BooksExcerpt({
  excerpt,
}: {
  excerpt: Bookspage["bookExcerpt"];
}) {
  const { excerpt: excerptText, image, page } = excerpt;

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container lg:min-h-[95vh] w-full flex flex-col md:flex-row justify-between items-stretch gap-8 lg:gap-24">
        <div className="max-w-[522px] md:max-w-full w-full mx-auto md:flex-[0.5]">
          <div className="w-full h-full">
            <ImageKit
              image={image as Media}
              alt={(image as Media)?.altText}
              width={0}
              height={760}
              sizes="100vw"
              className="w-full h-[600px] lg:h-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="md:flex-[0.5]">
          <div className="max-w-[522px] mx-auto w-full h-full flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-xs uppercase text-center">Excerpt</h2>
            </div>
            <div className="flex items-center justify-center">
              <p className="flex flex-col gap-1 font-serif font-light text-base sm:text-[21px] text-center leading-[1.3] tracking-tightest">
                <span>“</span>
                <span>{excerptText}</span>
                <span>“</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-center">{page}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

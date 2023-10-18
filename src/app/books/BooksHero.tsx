import { Book, Bookspage, Media } from "@/types/cms";
import ImageKit from "@/components/ImageKit";
import Button from "@/components/Button";
import ClampedText from "@/components/ClampedText";
import Link from "next/link";

export default function BooksHero({ hero }: { hero: Bookspage["hero"] }) {
  const { bookShowcase, heroImage } = hero;
  const { name, description, linkToBuy } = bookShowcase as Book;

  return (
    <section className="w-full pb-8 sm:pb-12 pt-[var(--nav-offset)]">
      <div className="container lg:max-h-[800px] w-full lg:h-[calc(100vh-var(--nav-offset))]">
        <div className="max-w-[640px] lg:max-w-full w-full h-full flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 mx-auto">
          <div className="max-w-[390px] lg:flex-[0.5] h-full flex flex-col gap-8">
            <div className="w-full h-full flex flex-col justify-end">
              <h1 className="text-3xl sm:text-[32px] tracking-tighter">
                {name}
              </h1>
              <div>
                <ClampedText
                  richContent={description}
                  lines={7}
                  buttonClassName="mt-0"
                  className="text-xs leading-snug -tracking-[0.24px]"
                />
              </div>
            </div>

            {linkToBuy && (
              <Link href={linkToBuy?.url!} className="w-fit">
                <Button
                  className="text-xs font-semibold leading-tight -tracking-[0.24px]"
                  theme="primary"
                >
                  {linkToBuy?.label ?? "BUY"}
                </Button>
              </Link>
            )}
          </div>

          <div className="lg:flex-[0.5] w-full h-full flex lg:justify-end lg:items-end">
            <ImageKit
              image={heroImage as Media}
              alt={(heroImage as Media)?.altText}
              sizes="100vw"
              width={0}
              height={0}
              className="max-w-[630px] w-full lg:w-auto h-auto lg:h-full lg:aspect-[1_/_1.17] rounded-lg lg:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

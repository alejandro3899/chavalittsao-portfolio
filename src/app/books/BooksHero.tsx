import ImageKit from "@/components/ImageKit";
import LinkButton from "@/components/LinkButton";
import PrimaryButton from "@/components/PrimaryButton";
import { Book, Bookspage, Media } from "@/types/cms";
import Link from "next/link";

export default function BooksHero({ hero }: { hero: Bookspage["hero"] }) {
  const { bookShowcase, heroImage } = hero;
  const { name, description, linkToBuy, learnMoreLink } = bookShowcase as Book;

  return (
    <section className="w-full pb-8 sm:pb-12 pt-[var(--nav-offset)]">
      <div className="container w-full">
        <div className="max-w-[640px] lg:max-w-full w-full flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-20 mx-auto">
          <div className="max-w-[390px] lg:flex-[0.5] flex flex-col gap-8">
            <div className="w-full h-full flex flex-col justify-end gap-4">
              <h1 className="text-3xl sm:text-[32px] tracking-tighter">
                {name}
              </h1>
              <p className="leading-snug -tracking-[0.24px] text-xs">
                {description}
              </p>
              {learnMoreLink && (
                <LinkButton
                  href={learnMoreLink?.url!}
                  className="text-xs leading-tight"
                >
                  more+
                </LinkButton>
              )}
            </div>

            {linkToBuy && (
              <Link href={linkToBuy?.url!}>
                <PrimaryButton className="text-xs font-semibold leading-tight -tracking-[0.24px]">
                  {linkToBuy?.label ?? "BUY"}
                </PrimaryButton>
              </Link>
            )}
          </div>

          <div className="lg:flex-[0.5] w-full flex lg:justify-end">
            <ImageKit
              image={heroImage as Media}
              alt={(heroImage as Media)?.altText}
              sizes="100vw"
              width={0}
              height={0}
              className="max-w-[630px] w-full h-auto lg:aspect-[1_/_1.025] rounded-lg lg:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

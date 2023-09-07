import { Homepage, Media } from "@/types/cms";
import LinkButton from "../components/LinkButton";
import ImageKit from "../components/ImageKit";

export default function HomeIntro({ intro }: { intro: Homepage["intro"] }) {
  const { heading, image, excerpt, readMoreLink } = intro;

  return (
    <>
      <section className="w-full flex lg:items-stretch py-8 sm:py-12">
        <div className="container flex lg:flex-row flex-col lg:justify-between items-stretch gap-8 sm:gap-12">
          <div className="flex lg:flex-[0.5] flex-col lg:justify-end">
            <h2 className="mb-6 text-lg sm:text-[21px]">{heading}</h2>
            <div>
              <p className="leading-[1.4] text-[13px] mb-4">{excerpt}</p>
              <LinkButton
                target={readMoreLink?.newTab ? "_blank" : "_default"}
                href={readMoreLink?.url ?? "#"}
              >
                {readMoreLink?.label ?? "more+"}
              </LinkButton>
            </div>
          </div>

          <div className="min-h-[400px] lg:flex-[0.5]">
            <ImageKit
              image={image as Media}
              alt={(image as Media)?.altText}
              width={400}
              height={400}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}

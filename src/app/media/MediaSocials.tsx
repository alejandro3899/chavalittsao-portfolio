import { Media, Mediapage } from "@/types/cms";
import Link from "next/link";

export default function MediaSocials({
  socials,
}: {
  socials: Mediapage["socials"];
}) {
  const { heading, socialMediaLinks = [] } = socials;

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="container xl:!max-w-[1200px] flex flex-col items-center">
        <div className="mb-6">
          <h3 className="text-xl text-center leading-none tracking-tight">
            {heading}
          </h3>
        </div>
        <div className="max-w-xl mx-auto w-full flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {socialMediaLinks.map(({ icon, label, link }) => {
            return (
              link && (
                <Link
                  href={link}
                  className="w-16 h-16 flex items-center justify-center border-neutral border rounded-full"
                >
                  <img
                    src={(icon as Media)?.imagekit?.url}
                    alt={(icon as Media)?.altText ?? label}
                    title={label}
                  />
                </Link>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

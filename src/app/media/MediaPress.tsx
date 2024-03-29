import { Mediapage } from "@/types/cms";
import Link from "next/link";

export default function MediaPress({ press }: { press: Mediapage["press"] }) {
  const { pressReleases = [] } = press;

  return (
    <section className="w-full bg-lilac py-8 sm:py-12">
      <div className="container xl:!max-w-[1200px] w-full">
        <h2 className="text-3xl sm:text-[33.33px] uppercase mb-8">Press</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressReleases.map(({ title, date, link }, i) => {
            const formattedDate = new Date(date).toLocaleString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            });

            return (
              <div
                key={i}
                className="w-full h-full bg-grey flex flex-col justify-between gap-8 sm:gap-12 p-6 rounded-[4px]"
              >
                <div className="w-full">
                  <span className="text-lavender text-xs -tracking-[0.24px] leading-snug mb-2">
                    {formattedDate}
                  </span>
                  <Link href={link?.url!} className="block font-serif font-light text-2xl leading-snug -tracking-[0.48px]">
                    {title}
                  </Link>
                </div>
                {link && (
                  <div className="w-full flex justify-end items-center">
                    <Link
                      href={link?.url!}
                      className="uppercase text-xs leading-snug -tracking-[0.24px]"
                    >
                      {link?.label ?? "Read More"}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

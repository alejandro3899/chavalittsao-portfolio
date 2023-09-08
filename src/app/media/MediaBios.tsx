import ImageKit from "@/components/ImageKit";
import { Media, Mediapage } from "@/types/cms";

export default function MediaBios({ bios }: { bios: Mediapage["bios"] }) {
  const { bios: allBios = [], heading } = bios;

  return (
    <section className="w-full py-8 sm:py-12">
      <div className="container xl:!max-w-[1200px] w-full">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-[32px] text-center tracking-tighter leading-none">
            {heading}
          </h2>
        </div>

        <div className="w-full max-w-[400px] mx-auto md:max-w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {allBios?.map(({ bio, image, name }, i) => {
            return (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-ful h-[360px] lg:h-[450px] mb-2">
                  <ImageKit
                    image={image as Media}
                    alt={(image as Media)?.altText}
                    width={0}
                    height={0}
                    sizes="100vw"
                    // title={name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-base text-center tracking-tighter leading-none mb-4">
                    {name}
                  </h3>
                  <p className="max-w-[344px] mx-auto font-serif text-center leading-[1.3] tracking-tightest text-sm">
                    {bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

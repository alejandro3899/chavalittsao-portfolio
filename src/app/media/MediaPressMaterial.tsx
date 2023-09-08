import ImageKit from "@/components/ImageKit";
import { Media, Mediapage } from "@/types/cms";

export default function MediaPressMaterial({
  pressMaterial,
}: {
  pressMaterial: Mediapage["pressMaterial"];
}) {
  const { pressMaterials = [] } = pressMaterial;

  return (
    <section className="w-full bg-lilac pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="container xl:!max-w-[1200px] w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {pressMaterials.map(({ title, image }, i) => {
            return (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-full h-auto md:h-[360px] lg:h-[400px] rounded-lg overflow-hidden">
                  <ImageKit
                    image={image as Media}
                    alt={(image as Media)?.altText}
                    width={650}
                    height={400}
                    className="w-full h-full object-fit md:object-cover"
                  />
                </div>
                <div className="w-full flex items-center justify-between">
                  <p className="text-xs leading-snug -tracking-[0.24px]">
                    {title}
                  </p>
                  <a
                    href={(image as Media)?.imagekit?.url}
                    download={
                      (image as Media)?.imagekit?.name ?? "press-material"
                    }
                    className="text-base-purple text-xs leading-snug -tracking-[0.24px]"
                  >
                    Download
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

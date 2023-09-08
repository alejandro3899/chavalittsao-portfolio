import ImageKit from "@/components/ImageKit";
import { Media, Mediapage } from "@/types/cms";

export default function MediaPressMaterial({
  pressMaterial,
}: {
  pressMaterial: Mediapage["pressMaterial"];
}) {
  const { pressMaterials = [] } = pressMaterial;

  return (
    <section className="w-full bg-lilac py-8 sm:py-12">
      <div className="container w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2">
          {pressMaterials.map(({ title, image }) => {
            return (
              <div className="flex flex-col gap-4">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <ImageKit
                    image={image as Media}
                    alt={(image as Media)?.altText}
                    width={650}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex items-center justify-between">
                  <p className="text-xs leading-snug -tracking-[0.24px]">
                    {title}
                  </p>
                  <a
                    target="_blank"
                    href={(image as Media)?.imagekit?.url}
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

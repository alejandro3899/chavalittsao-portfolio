import { Homepage, Media } from "@/types/cms";
import QuoteBlock from "../components/QuoteBlock";

export default function HomeQuote({
  quoteBlock: { quote },
}: {
  quoteBlock: Homepage["quoteBlock"];
}) {
  const { image, quoteText, size } = quote;

  return (
    <>
      <section className="w-full py-8 sm:py-12">
        <div className="container flex justify-center">
          <QuoteBlock
            theme="dark"
            imgSrc={(quote.image as Media).imagekit?.url!}
            imgAlt={(image as Media)?.altText ?? "Quote"}
            size={size}
            text={quoteText}
          />
        </div>
      </section>
    </>
  );
}

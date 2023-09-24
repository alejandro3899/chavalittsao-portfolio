import { Homepage } from "@/types/cms";
import QuoteBlock from "@/components/QuoteBlock";

export default function HomeQuote({
  quoteBlock: { quote },
}: {
  quoteBlock: Homepage["quoteBlock"];
}) {
  return (
    !quote.hide && (
      <section className="w-full py-8 sm:py-12">
        <div className="container flex justify-center">
          <QuoteBlock theme="dark" quote={quote} />
        </div>
      </section>
    )
  );
}

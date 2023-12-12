import { Homepage } from "@/types/cms";
import QuoteBlock from "@/components/QuoteBlock";

export default function HomeQuote({
  quoteBlock: { quotes },
}: {
  quoteBlock: Homepage["quoteBlock"];
}) {
 
  return (
      <section className="w-full py-8 sm:py-12">
        <div className="container flex justify-center">
          <QuoteBlock theme="dark" quotes={quotes} />
        </div>
      </section>
  );
}

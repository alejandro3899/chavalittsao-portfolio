import { Book } from "@/types/cms";
import { baseMetadata } from "@/utils/baseMetadata";
import { getColl } from "@/utils/api";
import BookPage from "./BookPage";
import BaseLayout from "@/components/BaseLayout";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { slug } }: { params: any }) {
  const pageSlug = slug?.[0];
  const { docs } = await getColl<Book>("/books", {
    where: { slug: { equals: pageSlug } },
  });
  const { meta } = docs?.[0] ?? { meta: {} };

  return baseMetadata({
    title: meta?.title ?? "Book",
    description: meta?.description,
    slug: `books/${pageSlug}`,
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export async function generateStaticParams() {
  const { docs: allBooks } = await getColl<Book>("/books");

  const params = allBooks.map(({ slug }) => {
    return { slug: [slug] };
  });

  return params;
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const pageSlug = slug?.[0];
  const { docs } = await getColl<Book>("/books", {
    where: { slug: { equals: pageSlug } },
  });
  const book = docs?.[0];

  const { docs: otherBooks } = await getColl<Book>("/books", {
    limit: 3,
    where: {
      slug: { not_equals: pageSlug },
    },
  });

  if (!book) return notFound();

  return (
    <BaseLayout theme="default">
      <BookPage book={book} otherBooks={otherBooks} />
    </BaseLayout>
  );
}

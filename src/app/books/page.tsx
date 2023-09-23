import { Book, Bookspage } from "@/types/cms";
import { getColl, getGlob } from "@/utils/api";
import { baseMetadata } from "@/utils/baseMetadata";
import BooksPage from "./BooksPage";
import BaseLayout from "@/components/BaseLayout";

export async function generateMetadata() {
  const { meta } = await getGlob<Bookspage>(
    "/bookspage",
    {},
    { next: { tags: ["bookspage"] } }
  );

  return baseMetadata({
    title: meta?.title ?? "Books",
    description: meta?.description,
    slug: "books",
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export default async function Books() {
  const books = await getGlob<Bookspage>(
    "/bookspage",
    {},
    { next: { tags: ["bookspage"] } }
  );
  const { docs: allBooks } = await getColl<Book>(
    "/books",
    {},
    { next: { tags: ["books"] } }
  );

  return (
    <BaseLayout theme="default">
      <BooksPage books={books} allBooks={allBooks} />
    </BaseLayout>
  );
}

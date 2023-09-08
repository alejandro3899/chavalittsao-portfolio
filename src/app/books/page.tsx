import { Bookspage } from "@/types/cms";
import { getGlob } from "@/utils/api";
import { baseMetadata } from "@/utils/baseMetadata";
import BooksPage from "./BooksPage";

export async function generateMetadata() {
  const { meta } = await getGlob<Bookspage>(
    "/bookspage",
    {},
    { next: { tags: ["bookspage"] } }
  );

  return baseMetadata({
    title: meta?.title ?? "Books",
    description: meta?.description,
    slug: "",
    image: (meta?.image as any)?.imagekit?.url,
  });
}

export default async function Books() {
  const books = await getGlob<Bookspage>(
    "/bookspage",
    {},
    { next: { tags: ["bookspage"] } }
  );

  return (
    <>
      <BooksPage books={books} />
    </>
  );
}

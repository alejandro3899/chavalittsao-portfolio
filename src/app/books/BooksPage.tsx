import { Book, Bookspage } from "@/types/cms";
import BooksHero from "./BooksHero";
import BooksIntro from "./BooksIntro";
import BooksExcerpt from "./BooksExcerpt";
import BooksOtherBooks from "./BooksOtherBooks";

export default function BooksPage({
  books,
  allBooks,
}: {
  books: Bookspage;
  allBooks: Book[];
}) {
  const { hero, intro, bookExcerpt, otherBooks } = books;

  return (
    <>
      <BooksHero hero={hero} />
      <BooksIntro intro={intro} />
      <BooksExcerpt excerpt={bookExcerpt} />
      <BooksOtherBooks books={allBooks} otherBooks={otherBooks} />
    </>
  );
}

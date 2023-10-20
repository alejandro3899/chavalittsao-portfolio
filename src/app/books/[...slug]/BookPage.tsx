"use client";

import { Book } from "@/types/cms";
import BookHero from "./BookHero";
import BookIntro from "./BookIntro";
import BookExcerpt from "./BookExcerpt";
import BookBooksList from "./BookBooksList";

export default function BookPage({
  book,
  otherBooks: books,
}: {
  book: Book;
  otherBooks: Book[];
}) {
  const { intro, excerpt, otherBooks } = book;

  return (
    <>
      <BookHero book={book} />
      <BookIntro intro={intro} />
      <BookExcerpt excerpt={excerpt} />
      <BookBooksList otherBooks={otherBooks} books={books} />
    </>
  );
}

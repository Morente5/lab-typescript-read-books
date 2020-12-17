import { isBookRead } from './is-book-read.js';

export const fn = () => {
  const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  console.log(isBookRead(books, "Devastación"));  // true
  console.log(isBookRead(books, "Canción de hielo y fuego"));  // false
  console.log(isBookRead(books, "Los Pilares de la Tierra"));  // false
}
fn();
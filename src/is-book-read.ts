interface Book {
  title: string;
  isRead: boolean;
}

export const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const emptyBook: Book = {
    title: null,
    isRead: false,
  };
  // Using Nullish coalescing operator (??)
  return (books.find(({ title }) => title === titleToSearch) ?? emptyBook).isRead;
}

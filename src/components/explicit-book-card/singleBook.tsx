import { mockData } from '../../utils/mock-data';
import { ExplicitBookCard } from './explicit-book-card';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookItem } from '../../utils/interfaces-books';


export const SingleBook = () => {
  const { id } = useParams();

  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  useEffect(() => {
    if (id && mockData.items) {
      const book = mockData.items.find(item => item.id === id);
      setSelectedBook(book ?? null);
    }
  }, [id]);

  return (
    <div>
      {selectedBook && <ExplicitBookCard book={selectedBook} />}
    </div>
  );
};
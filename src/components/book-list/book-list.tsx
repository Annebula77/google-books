import React, { useEffect } from 'react';
import styles from './book-list.module.css';
import { Loader } from '../loader/loader';
import { BookCard } from '../book-card/book-card';
import { loadBooks } from '../../service/book-slice/book-slice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

interface BookListProps {
  searchParams: { query: string, category: string, orderBy: string };
}
export const BookList: React.FC<BookListProps> = ({ searchParams }) => {
  const dispatch = useAppDispatch();

  const books = useAppSelector(state => state.books.books.items);
  const status = useAppSelector(state => state.books.status);

  useEffect(() => {
    if (status === 'idle' && searchParams) {
      dispatch(loadBooks(searchParams));
    }
  }, [status, dispatch, searchParams]);

  return (
    <div className={styles.list__container}>
      {status === 'succeeded' && books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
      {status === 'loading' && <Loader />}
      {status === 'failed' && <p>Error loading books.</p>}
    </div>
  );
};


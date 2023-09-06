import React from 'react';
import styles from './book-list.module.css';
import { mockData } from '../../utils/mock-data';
import { BookCard } from '../book-card/book-card';


export const BookList = () => {
  return (
    <div className={styles.list__container}>
      {mockData.items.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

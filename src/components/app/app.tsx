import React from 'react';
import styles from './app.module.css';
import { Header } from '../header/header';
import { BookList } from '../book-list/book-list';
import { SingleBook } from '../explicit-book-card/singleBook';
import { TotalBooks } from '../total/total';
import { Loader } from '../loader/loader';

export function App() {
  return (
    <div className={styles.app}>
      <Loader />
      <Header />
      <TotalBooks />
      <BookList />
      <SingleBook />

    </div>
  );
}


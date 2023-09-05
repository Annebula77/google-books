import React from 'react';
import styles from './app.module.css';
import { Header } from '../header/header';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import { Header } from '../header/header';
import { HomePage } from '../../pages/home-page/home-page';
import { ResultPage } from '../../pages/result-page/result-page';
import { VolumePage } from '../../pages/volume-page/volume-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result/:id" element={<VolumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}


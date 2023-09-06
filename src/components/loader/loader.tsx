import styles from './loader.module.css';
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.artboard}>
        <div className={styles.domino}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

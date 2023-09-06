import styles from './main.module.css';
import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main: React.FC<MainProps> = (props) => {
  return (
    <main className={styles.main}>
      {props.children}
    </main>
  )
}

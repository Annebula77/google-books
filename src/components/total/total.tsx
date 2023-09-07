import styles from './total.module.css';
import { mockData } from '../../utils/mock-data';

export const TotalBooks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Books found: {mockData.totalItems} pc.</h2>
    </div>
  )
}
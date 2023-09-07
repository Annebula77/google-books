import styles from './total.module.css';
import { useAppSelector } from '../../utils/hooks';

export const TotalBooks = () => {

  const total = useAppSelector(state => state.books.response.totalItems);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Books found: {total} pc.</h2>
    </div>
  )
}
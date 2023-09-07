import styles from './book-card.module.css';
import { Link } from 'react-router-dom';
import { BookItem } from '../../utils/interfaces-books';


export const BookCard = ({ book }: { book: BookItem }) => {
  const imageUrl = book.volumeInfo.imageLinks?.smallThumbnail || '';

  return (
    <Link to={`/result/${book.id}`} className={styles.card__containter}>
      <img src={imageUrl} alt={book.volumeInfo.title} className={styles.card__image} />
      <p
        className={styles.category}
      >
        {book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}
      </p>
      <h2 className={styles.title}>{book.volumeInfo.title}</h2>
      <p className={styles.author}>{book.volumeInfo.authors ? book.volumeInfo.authors : ''}</p>
    </Link>
  );
};
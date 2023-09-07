import styles from './explicit-book-card.module.css';
import { useAppSelector } from '../../utils/hooks';
import { useParams } from 'react-router-dom';

export const ExplicitBookCard = () => {

  const { id } = useParams<{ id: string }>();
  const books = useAppSelector(state => state.books.response.items);

  const book = books.find(b => b.id === id);

  if (!book) {
    return <p>Book not found!</p>;
  }


  return (
    <div className={styles.card__containter}>
      <div className={styles.image__container}>
        <img
          src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
          className={styles.card__image}
        />
      </div>
      <div className={styles.data__container} data-test-id="bookPage">
        <h2
          className={styles.category}
        >
          {book.volumeInfo.categories ? book.volumeInfo.categories.join(' / ') : ''}
        </h2>
        <h2 className={styles.title}>{book.volumeInfo.title}</h2>
        <h3
          className={styles.author}
        >
          {book.volumeInfo.authors ? book.volumeInfo.authors.join(' / ') : ''}
        </h3>
        <p className={styles.description}>
          {book.volumeInfo.description ? book.volumeInfo.description : ''}
        </p>
      </div>
    </div>
  );
};
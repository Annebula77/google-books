import styles from './explicit-book-card.module.css';
import { BookItem } from '../../utils/interfaces-books';

export const ExplicitBookCard = ({ book }: { book: BookItem }) => {

  const handleSortByCategory = (categories: string[]) => {
    // Здесь ваш код для сортировки
    console.log("Сортировка по категориям:", categories);
  };

  const handleSortByAuthor = (authors: string[]) => {
    // Здесь ваш код для сортировки
    console.log("Сортировка по категориям:", authors);
  };

  return (
    <div className={styles.card__containter}>
      <div className={styles.image__container}>
        <img
          src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
          className={styles.card__image}
        />
      </div>
      <div className={styles.data__container}>
        <button
          className={styles.category__button}
          onClick={() => {
            if (book.volumeInfo.categories) {
              handleSortByCategory(book.volumeInfo.categories);
            }
          }}
        >
          {book.volumeInfo.categories ? book.volumeInfo.categories.join(' / ') : 'No Category'}
        </button>
        <h2 className={styles.title}>{book.volumeInfo.title}</h2>
        <button
          className={styles.author}
          onClick={() => {
            if (book.volumeInfo.authors) {
              handleSortByAuthor(book.volumeInfo.authors)
            }
          }}
        >
          {book.volumeInfo.authors ? book.volumeInfo.authors.join(' / ') : 'Unknown Author'}
        </button>

        <p className={styles.description}>
          {book.volumeInfo.description ? book.volumeInfo.description : 'No description'}
        </p>
      </div>
    </div>
  );
};
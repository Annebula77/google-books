import styles from './book-card.module.css';
import { BookItem } from '../../utils/interfaces-books';

export const BookCard = ({ book }: { book: BookItem }) => {

  const handleSortByCategory = (categories: string[]) => {
    // Здесь ваш код для сортировки
    console.log("Сортировка по категориям:", categories);
  };
  return (
    <div className={styles.card__containter}>
      <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} className={styles.card__image} />
      <button
        className={styles.category__button}
        onClick={() => {
          if (book.volumeInfo.categories) {
            handleSortByCategory(book.volumeInfo.categories);
          }
        }}
      >
        {book.volumeInfo.categories ? book.volumeInfo.categories[0] : 'No Category'}
      </button>
      <h2 className={styles.title}>{book.volumeInfo.title}</h2>
      <p className={styles.author}>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author'}</p>
    </div>
  );
};
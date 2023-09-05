import styles from './header.module.css';
import { SearchForm } from '../form/form';


export const Header = () => {

  const handleSearch = (query: any) => {
    console.log("Поиск по запросу:", query);
    // Здесь отправляете запрос
  };


  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Find your book</h1>
      <SearchForm onSearch={handleSearch} />
    </header>
  )
}
import React, { useState, FormEvent } from 'react';
import { Input } from '../input/input';
import { Select } from '../select/select';
import { categoryOptions, sortingOptions } from '../../utils/consts';
import styles from './form.module.css'

interface SearchFormProps {
  onSearch: (value: string, category: string, sorting: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [sorting, setSorting] = useState<string>("relevance");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchValue, category, sorting);
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleInputSearch = (value: string) => {
    // Вы можете добавить дополнительную логику здесь, если нужно
    setSearchValue(value);
  };


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
        onSearch={handleInputSearch}
      />
      <div className={styles.selector__container}>
        <div className={styles.slot}>
          <h2 className={styles.search__type}>Categories</h2>
          <Select
            options={categoryOptions}
            onChange={value => {
              setCategory(value);
            }}
            value={category}
          />
        </div>
        <div className={styles.slot}>
          <h2 className={styles.search__type}>Sorting by</h2>
          <Select
            options={sortingOptions}
            onChange={value => {
              setSorting(value);
            }}
            value={sorting}
          />
        </div>
      </div>
    </form>
  );
};

import React, { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { loadBooks } from '../../service/book-slice/book-slice';
import { useNavigate } from 'react-router-dom';
import { Input } from '../input/input';
import { Select } from '../select/select';
import { categoryOptions, sortingOptions } from '../../utils/consts';
import { updateSearchValue, updateCategory, updateSorting } from '../../service/form-slice/form-slice';
import styles from './form.module.css'

interface SearchFormProps {
  onSearch: (value: string, category: string, sorting: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchValue = useAppSelector(state => state.searchForm.searchValue);
  const category = useAppSelector(state => state.searchForm.category);
  const sorting = useAppSelector(state => state.searchForm.sorting);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchValue.trim()) return;

    dispatch(loadBooks({ query: searchValue, category, orderBy: sorting }));
    navigate("/result", { state: { query: searchValue, category, orderBy: sorting } });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        placeholder="Search"
        value={searchValue}
        onChange={(value) => dispatch(updateSearchValue(value))}
        onSubmit={handleSubmit}
      />
      <div className={styles.selector__container}>
        <div className={styles.slot}>
          <h2 className={styles.search__type} data-test-id="select1">Categories</h2>
          <Select
            options={categoryOptions}
            onChange={(value) => dispatch(updateCategory(value))}
            value={category}
          />
        </div>
        <div className={styles.slot}>
          <h2 className={styles.search__type} data-test-id="select2">Sorting by</h2>
          <Select
            options={sortingOptions}
            onChange={(value) => dispatch(updateSorting(value))}
            value={sorting}
          />
        </div>
      </div>
    </form>
  );
};

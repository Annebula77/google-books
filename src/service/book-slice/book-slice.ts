import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from '../../utils/api';
import { BookState, Books } from '../../utils/interfaces-books';
import { Draft } from 'immer';

export const loadBooks = createAsyncThunk('books/loadBooks', async (params: { query: string, category: string, orderBy: string }) => {
  const books = await fetchBooks(params.query, params.category, params.orderBy);
  return books;
});



const initialState: BookState = {
  books: { items: [] }, // начальное значение
  status: 'idle',
  error: null,
  searchValue: "",
  category: "all",
  sorting: "relevance"
};

export const bookSlice = createSlice<BookState, {}>({
  name: 'books',
  initialState,
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    updateCategory: (state: Draft<BookState>, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    updateSorting: (state: Draft<BookState>, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadBooks.fulfilled, (state, action: PayloadAction<Books>) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const {
  updateSearchValue,
  updateCategory,
  updateSorting
} = bookSlice.actions as {
  updateSearchValue: (value: string) => void;
  updateCategory: (value: string) => void;
  updateSorting: (value: string) => void;
};

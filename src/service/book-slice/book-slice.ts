import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from '../../utils/api';
import { BookState, Books } from '../../utils/interfaces-books';

export const loadBooks = createAsyncThunk('books/loadBooks', async (params: { query: string, category: string, orderBy: string }) => {
  const books = await fetchBooks(params.query, params.category, params.orderBy);
  return books;
});



const initialState: BookState = {
  books: { items: [] }, // начальное значение
  status: 'idle',
  error: null,
};

export const bookSlice = createSlice<BookState, {}, 'books'>({
  name: 'books',
  initialState,
  reducers: {},
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

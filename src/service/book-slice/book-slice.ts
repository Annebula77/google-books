import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from '../../utils/api';
import { BookState, BooksResponse } from '../../utils/interfaces-books';


export const loadBooks = createAsyncThunk(
  'books/loadBooks',
  async (params: { query: string, category: string, orderBy: string, startIndex?: number }) => {
    const books = await fetchBooks(params.query, params.category, params.orderBy, params.startIndex);
    return { ...books, query: params.query };
  }
);

const initialState: BookState = {
  response: { totalItems: 0, items: [], query: "" },
  status: 'idle',
  error: null,
  currentPage: 1,
  totalPages: 0,
  currentQuery: "",
};

export const bookSlice = createSlice<BookState, {}>({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadBooks.fulfilled, (state, action: PayloadAction<BooksResponse>) => {
        state.status = 'succeeded';

        if (state.currentQuery !== action.payload.query) {
          state.response.items = action.payload.items;
          state.currentQuery = action.payload.query;
          state.currentPage = 1;
        } else {
          state.response.items = [...state.response.items, ...action.payload.items];
        }
        state.response.totalItems = action.payload.totalItems;
        state.totalPages = Math.ceil(action.payload.totalItems / 30);
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});


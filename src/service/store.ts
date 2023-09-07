import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './book-slice/book-slice';
import { searchFormSlice } from './form-slice/form-slice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    searchForm: searchFormSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
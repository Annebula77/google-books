import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './book-slice/book-slice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
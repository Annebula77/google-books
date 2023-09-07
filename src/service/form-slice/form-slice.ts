import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchFormState {
  searchValue: string;
  category: string;
  sorting: string;
}

const initialState: SearchFormState = {
  searchValue: "",
  category: "all",
  sorting: "relevance"
};

export const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    updateCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    updateSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
  },
});

export const { updateSearchValue, updateCategory, updateSorting } = searchFormSlice.actions;

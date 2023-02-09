import { createSlice } from '@reduxjs/toolkit';

const filter = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filter,

  reducers: {
    setNameFilter(state, action) {
      return (state = action.payload)
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    addImage: (state, { payload }) => {
      state.unshift(payload);
    },
  },
});

export const { addImage } = slice.actions;

export default slice.reducer;

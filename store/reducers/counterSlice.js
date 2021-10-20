import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;

export default slice.reducer;

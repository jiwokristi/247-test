import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  quantity: number;
};

const initialState: InitialState = {
  quantity: 0,
};

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    increment: state => {
      if (state.quantity < 10000) {
        state.quantity++;
      }
    },
    decrement: state => {
      if (state.quantity) {
        state.quantity--;
      }
    },
    onChange: (state, action: PayloadAction<string>) => {
      state.quantity = +action.payload;
    },
  },
});

export const { increment, decrement, onChange } = boxSlice.actions;
export default boxSlice.reducer;

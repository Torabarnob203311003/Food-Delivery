import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const CardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    // You can add more reducers like removeItem, clearCart, etc.
  },
});

export const { addItem } = CardSlice.actions;
export default CardSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cardSlice.actions;
export default cardSlice.reducer;

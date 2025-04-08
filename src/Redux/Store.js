import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './CardSlice';
const store = configureStore({
  reducer: {
    cart: cardSlice,
  },
});
export default store;

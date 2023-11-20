import { configureStore } from '@reduxjs/toolkit';
import shoppingCartSlice from '../features/ShoppingCart/shoppingCartSlice';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartSlice.reducer,
    },
});

export default store;

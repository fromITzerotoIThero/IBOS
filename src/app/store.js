import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from '../features/ShoppingCart/shoppingCartSlice';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
    },
});

export default store;

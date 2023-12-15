import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from '../services/productsApi';
import shoppingCartReducer from './shoppingCartSlice';

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        shoppingCart: shoppingCartReducer,
    },
});

setupListeners(store.dispatch);

export default store;

import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        itemCount: 0,
    },
    reducers: {
        addItem: (state) => {
            state.itemCount += 1;
        },
        clearShoppingCart: (state) => {
            state.itemCount = 0;
        },
    }
});

export const { addItem, clearShoppingCart } = shoppingCartSlice.actions;

export const selectItemCount = (state) => state.shoppingCart.itemCount;

export default shoppingCartSlice.reducer;

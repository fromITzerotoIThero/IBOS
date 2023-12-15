import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        currentPage: 1,
        // totalPages: 1,
    },
    reducers: {
        setProducts: (state, action) => {
            // state.data = action.payload;
        },
        setCurrentPage: (state, action) => {
            // state.currentPage = action.payload;
        },
        setTotalPages: (state, action) => {
            // state.totalPages = action.payload;
        },
    },
});

export const { setProducts, setCurrentPage, setTotalPages } = productsSlice.actions;

export default productsSlice.reducer;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/productsapi' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (page = 1) => `products?page=${page}`,
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (page = 1) => `products?page=${page}`,
        }),
    }),
});

export const { useGetProductsQuery } = api;

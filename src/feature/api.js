import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8089",
  }),
  endpoints: (builder) => ({
    // landing page start
    getReviews: builder.query({
      query: () => "/products/reviews",
      transformResponse: response => response.Results,
    }),
    getProductHome: builder.query({
      query: () => "/products/home",
      transformResponse: response => response.Results,
    }),
    // landing page end
    // browse product start
    getBrowseProducts: builder.query({
      query: () => "/browseproducts",
      transformResponse: response => response.Results,
    }),
    // browse product end
    // detail product start
    getDetailProduct: builder.query({
      query: () => "/detailproduct",
      transformResponse: response => response.Results,
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    // detail product end
  }),
});

export const { useGetReviewsQuery, useGetProductHomeQuery, useGetBrowseProductsQuery, useGetDetailProductQuery, useRegisterMutation } = api;
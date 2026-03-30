import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wildan-backend.camps.fahrul.id",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
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
    // detail product end

    // auth start
    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    // auth end

    // admin users start
    getUsers: builder.query({
      query: () => "/admin/users",
      transformResponse: response => response.Results,
    }),
    // admin users end

    // admin product start
    getProduct: builder.query({
      query: () => "/admin/products",
      transformResponse: response => response.Results,
    }),
    // admin product end

  }),
});

export const { useGetReviewsQuery, useGetProductHomeQuery, useGetBrowseProductsQuery, useGetDetailProductQuery, useRegisterMutation, useLoginMutation, useGetUsersQuery, useGetProductQuery } = api;
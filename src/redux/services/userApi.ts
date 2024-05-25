import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
    endpoints: (builder)=>({
        getPosts: builder.query<Post[], null>({
            query: ()=> "posts"
        }),
        getPostById: builder.query<Post, {id:string}>({
            query: (id)=> `posts/${id}`
        })
    })
})

export const { useGetPostsQuery, useGetPostByIdQuery } = userApi;
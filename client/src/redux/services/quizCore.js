import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizCoreApi = createApi({
  reducerPath: 'quizCoreApi',
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: 'http://localhost:8080/endpoint/',
    prepareHeaders: (headers) => {
=======
    baseUrl: 'http://localhost:8080/api',
    prepareHeaders: headers => {
>>>>>>> parent of 9989181 (added loader and error component)
      headers.set(
        'X-RapidAPI-Key',
        '9db21c3aecmsh80660243797b1b9p1dd7f3jsn254440462b1f',
      );
      return headers;
    },
  }),
<<<<<<< HEAD
  endpoints: (builder) => ({
    getQuestions: builder.query({ query: () => '/' }),
    addQuestion: builder.mutation({
      query: (question) => ({
        url: '/create-question',
        method: 'POST',
        body: question,
      }),
=======
  endpoints: builder => ({
    getQuestions: builder.query({ query: () => '/forms' }),
    addQuestion: builder.mutation({
      query: question => ({ url: '/forms', method: 'POST', body: question }),
>>>>>>> parent of 9989181 (added loader and error component)
    }),
  }),
});

export const { useGetQuestionsQuery, useAddQuestionMutation } = quizCoreApi;

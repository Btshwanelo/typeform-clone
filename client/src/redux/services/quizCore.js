import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizCoreApi = createApi({
  reducerPath: 'quizCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        '9db21c3aecmsh80660243797b1b9p1dd7f3jsn254440462b1f',
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getQuestions: builder.query({ query: () => '/forms' }),
    addQuestion: builder.mutation({
      query: question => ({ url: '/forms', method: 'POST', body: question }),
    }),
  }),
});

export const { useGetQuestionsQuery, useAddQuestionMutation } = quizCoreApi;

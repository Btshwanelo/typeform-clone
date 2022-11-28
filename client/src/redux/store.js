import { configureStore } from '@reduxjs/toolkit';

import { quizCoreApi } from './services/quizCore';

export const store = configureStore({
  reducer: {
    [quizCoreApi.reducerPath]: quizCoreApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(quizCoreApi.middleware),
});

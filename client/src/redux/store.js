import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { quizCoreApi } from './services/quizCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: quizCoreApi.reducer,
    player: playerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(quizCoreApi.middleware),
});

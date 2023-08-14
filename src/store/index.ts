import { configureStore } from '@reduxjs/toolkit';

import { githubApi } from './usersGitApi';
export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

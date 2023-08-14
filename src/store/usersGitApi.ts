import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    searchUsers: build.query({
      query: ({ debounced, sortOrder, currentPage = 1 }) => ({
        url: 'search/users',
        params: {
          q: debounced,
          per_page: 30,
          sort: 'repositories',
          page: currentPage,
          order: sortOrder,
        },
      }),
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;

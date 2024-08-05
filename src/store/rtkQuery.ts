// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { City } from '@slices/cities';

export interface Metadata {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
}

export interface ApiResponse {
  metadata: Metadata;
  record: {
    cities: Record<number, City>;
  };
}
const token = '$2a$10$TBeCGnYGNSq9JikcipGPQegZDiWjnH7Scg1KS4PMIXyALtr9uoL6i';
// Определяем наш API-сервис
export const api = createApi({
  reducerPath: 'api', // Путь до редьюсера в сторе
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jsonbin.io/v3/', // Базовый URL для запросов
    prepareHeaders: (headers) => {
      headers.set('X-Access-Key', token); // Добавляем заголовок X-Access-Key
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<ApiResponse, void>({
      query: () => 'b/66abd94dacd3cb34a86e93db', // URL для запроса
    }),
  }),
});
// Экспортируем хуки, созданные RTK Query
export const { useGetUsersQuery } = api;

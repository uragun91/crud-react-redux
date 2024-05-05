import { AsyncThunkConfig, GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';

export interface LoginData {
  username: string;
  password: string;
}

export type AsyncThunkApi = GetThunkAPI<AsyncThunkConfig>;

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
}

export interface Author {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  title: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
}

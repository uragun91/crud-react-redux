import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Article } from '@/types';
import { getArticlesThunk } from './thunks';

const initialState: {
  articles: Article[];
  isLoadingArticles: boolean;
} = {
  articles: [],
  isLoadingArticles: false,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesThunk.pending, (state) => {
        state.isLoadingArticles = true;
      })
      .addCase(getArticlesThunk.fulfilled, (state, action) => {
        state.isLoadingArticles = false;
      })
      .addCase(getArticlesThunk.rejected, (state, action) => {
        state.isLoadingArticles = false;
      });
  },
});

export const { setArticles } = articleSlice.actions;

export default articleSlice.reducer;

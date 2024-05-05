import { getArticles } from '@/services/article.service';
import { Article } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setArticles } from './articleSlice';

export const getArticlesThunk = createAsyncThunk('articles/get', () => {
  return getArticles().then((articles: Article[]) => {
    setArticles(articles);
  });
});

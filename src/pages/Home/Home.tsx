import React, { useEffect } from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store';
import { getArticlesThunk } from '@/store/features/article/thunks';
import { Article } from '@/types';

const Home = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.article.articles);
  const isLoading = useAppSelector((state) => state.article.isLoadingArticles);

  useEffect(() => {
    dispatch(getArticlesThunk());
  }, []);

  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <h1>Articles</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {articles.length === 0 ? (
            <div>No articles yet</div>
          ) : (
            articles.map((article: Article) => {
              return <div key={article.id}>{article.title}</div>;
            })
          )}
        </div>
      )}
    </Container>
  );
};

export default Home;

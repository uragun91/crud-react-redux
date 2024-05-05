import { Article } from '@/types';
import http from './http';

export function getArticles(): Promise<Article[]> {
  const token = localStorage.getItem('access_token');

  return http.get('articles', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

import { LoginResponseData } from '@/types';
import http from './http';

export function apiLogin(username: string, password: string): Promise<LoginResponseData> {
  return http
    .post<{ meta: any; data: LoginResponseData }>('auth/login', { username: username, password: password })
    .then((resp) => {
      return resp.data.data;
    });
}

import http from './http';

export function apiLogin(username: string, password: string): Promise<any> {
  return http.post('auth/login', { username: username, password: password });
}

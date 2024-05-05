import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoutes() {
  const userAccessToken = localStorage.getItem('access_token');

  if (!userAccessToken) {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

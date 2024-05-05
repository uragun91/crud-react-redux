import { apiLogin } from '@/services/user.service';
import { AsyncThunkApi, LoginData, LoginResponseData } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCredentials } from './userSlice';

export const userLoginThunk = createAsyncThunk('user/login', (loginData: LoginData, thunkAPI: AsyncThunkApi) => {
  return apiLogin(loginData.username, loginData.password).then((loginData: LoginResponseData) => {
    localStorage.setItem('access_token', loginData.accessToken);
    localStorage.setItem('refresh_token', loginData.refreshToken);

    thunkAPI.dispatch(setCredentials(loginData));

    return loginData;
  });
});

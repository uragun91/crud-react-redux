import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { userLoginThunk } from './thunks';
import { LoginResponseData } from '@/types';

const initialState = {
  accessToken: '',
  refreshToken: '',
  isLoggingIn: false,
  loginError: '',
  user: null,
  mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponseData>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginThunk.pending, (state) => {
        state.loginError = '';
        state.isLoggingIn = true;
      })
      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.isLoggingIn = false;
        // update state with user or credentials
      })
      .addCase(userLoginThunk.rejected, (state, action) => {
        state.isLoggingIn = false;
        state.loginError = action.error.message ?? '';
      });
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;

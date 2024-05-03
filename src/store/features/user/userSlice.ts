import { apiLogin } from '@/services/user.service';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggingIn: false,
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
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    changeMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        localStorage.setItem('mode', 'dark');
      } else {
        state.mode = 'light';
        localStorage.setItem('mode', 'light');
      }
    },
    loginSuccessful: (state) => {
      state.isLoggingIn = false;
    },

    login: (state, action) => {
      state.isLoggingIn = true;

      console.log('GGGGGGGGG');

      apiLogin(action.payload.username, action.payload.password).catch((result: any) => {
        dispatchEvent(loginSuccessful());
      });
    },
  },
});

export const { setCredentials, setToken, changeMode, login } = userSlice.actions;

export default userSlice.reducer;

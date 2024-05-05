import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import userReducer from '@/store/features/user/userSlice';
import articleReducer from '@/store/features/article/articleSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
    article: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

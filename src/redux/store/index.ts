import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../reducers/index';

export const store = configureStore({
  reducer: { posts: postsReducer },
});
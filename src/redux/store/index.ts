import { configureStore } from '@reduxjs/toolkit';

import postsSlicer from './../reducers';
export const store = configureStore({
  reducer: { postsState: postsSlicer },
});

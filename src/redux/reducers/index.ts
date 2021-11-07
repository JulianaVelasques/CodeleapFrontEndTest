import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

export const postsStateSlicer = createSlice({
  name: 'postsState',
  initialState,
  reducers: {
    setPosts: (state: any, action: any) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postsStateSlicer.actions;

export default postsStateSlicer.reducer;

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'My First Post At CodeLeap Network!',
    content:
      'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.',
    date: '25 minutes',
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    postDeleted(state, action) {
      const { id } = action.payload;
      return (state = state.filter((post) => post.id !== id));
    },
    sortPost(state, action) {
      state.push(...action.payload);
      state.sort((a, b) => b.date.localeCompare(a.date));
    },
  },
});

// Action creators are generated for each case reducer function
export const { postAdded, postUpdated, postDeleted, sortPost } = postsSlice.actions;

export default postsSlice.reducer;

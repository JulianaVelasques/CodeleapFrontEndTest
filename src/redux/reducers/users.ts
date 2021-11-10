import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    user: '',
  },
];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.data = payload;
    },
    logOut: (state) => {
      state.data = null;
    },
    setProfile: (state, { payload }) => {
      state.data = payload;
    }
  }
});

export const { logIn, logOut, setProfile } = userSlice.actions;

export default userSlice.reducer;

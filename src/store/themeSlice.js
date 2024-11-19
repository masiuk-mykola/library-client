import { createSlice } from "@reduxjs/toolkit";

import { themeLSKey } from "@constants/common";

const themeMode = localStorage.getItem(themeLSKey);

const initialState = {
  themeMode: JSON.parse(themeMode) || "light"
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.themeMode = payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

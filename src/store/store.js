import { configureStore } from '@reduxjs/toolkit';

import userReducer from './authSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer
  }
});

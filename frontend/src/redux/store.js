// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add reducers here
  },
});

export default store;

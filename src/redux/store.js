import { configureStore } from '@reduxjs/toolkit';
import counterSlices from './slides/counterSlices';
import userSlices from './slides/userSlices';

export const store = configureStore({
  reducer: {
    counter: counterSlices,
    user: userSlices
  },
})
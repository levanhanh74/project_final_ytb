import { configureStore } from '@reduxjs/toolkit'
import counterSlices from './slides/counterSlices'


export const store = configureStore({
  reducer: {
    counter: counterSlices
  },
})
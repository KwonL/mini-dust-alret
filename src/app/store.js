import { configureStore } from '@reduxjs/toolkit'
import dustReducer from '../feature/dustSlice'

export const store = configureStore({
  reducer: {
    dust: dustReducer,
  },
})

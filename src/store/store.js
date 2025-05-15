import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal/journalSlices'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journalSlice: journalSlice.reducer,
  },
})


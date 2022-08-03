import { configureStore } from '@reduxjs/toolkit'
import historyReducer from './historySlice'
import modalReducer from './modalSlice'

export const store = configureStore({
  reducer: {
    history: historyReducer,
    modal: modalReducer
  },
})


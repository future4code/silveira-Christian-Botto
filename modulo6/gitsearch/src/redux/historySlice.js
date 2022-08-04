import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      const newHistory = [...state.history]
      state.history= [ action.payload, ...newHistory]
      // state.history.unshift(action.payload) // Another way that also works
    },
    updateHistory: (state, action) => {
      state.history= [ ...action.payload]
      // state.history.unshift(action.payload) // Another way that also works
    },
    removeFromHistory: (state, action) => {
        state.filter(remove => remove !== action.payload);
    },
    cleanHistory: (state) => {
      const cleanHistory = []
      state.history= [ cleanHistory]
  }
  },
})

export const {  addToHistory, removeFromHistory, cleanHistory, updateHistory } = historySlice.actions

export default historySlice.reducer
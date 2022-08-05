import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history: "",
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
    },
    removeFromHistory: (state, action) => {
        // state.filter(remove => remove === action.payload);
        const newHistory = state.filter(remove => remove !== action.payload);
        state.history= [...newHistory]
    },
    cleanHistory: (state) => {
      const cleanHistory = ""
      state.history=  cleanHistory
      window.sessionStorage.setItem("history", JSON.stringify(""))
  }
  },
})

export const {  addToHistory, removeFromHistory, cleanHistory, updateHistory } = historySlice.actions

export default historySlice.reducer
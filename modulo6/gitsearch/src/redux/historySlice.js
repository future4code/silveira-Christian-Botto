import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      // state.history= [ action.payload, ...state]
      state.history.unshift(action.payload) 
    },
    removeFromHistory: (state, action) => {
        state.filter(remove => remove !== action.payload);
    }
  },
})

export const {  addToHistory } = historySlice.actions

export default historySlice.reducer
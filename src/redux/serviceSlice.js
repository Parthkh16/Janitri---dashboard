// src/redux/serviceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visits: [],
};

const serviceSlice = createSlice({
  name: 'service',   // ✅ match store.js
  initialState,
  reducers: {
    setVisits: (state, action) => {
      state.visits = action.payload;
    },
    addVisit: (state, action) => {
      state.visits.push(action.payload);
    },
    updateVisit: (state, action) => {
      const index = state.visits.findIndex(v => v.id === action.payload.id);
      if (index !== -1) state.visits[index] = action.payload;
    },
    deleteVisit: (state, action) => {
      state.visits = state.visits.filter(v => v.id !== action.payload);
    },
  },
});

export const { setVisits, addVisit, updateVisit, deleteVisit } = serviceSlice.actions;
export default serviceSlice.reducer;

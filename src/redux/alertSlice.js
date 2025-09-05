// src/redux/alertSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlerts: (state, action) => {
      state.alerts = action.payload;
    },
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    updateAlert: (state, action) => {
      const index = state.alerts.findIndex(a => a.id === action.payload.id);
      if (index !== -1) state.alerts[index] = action.payload;
    },
    deleteAlert: (state, action) => {
      state.alerts = state.alerts.filter(a => a.id !== action.payload);
    },
  },
});

export const { setAlerts, addAlert, updateAlert, deleteAlert } = alertSlice.actions;
export default alertSlice.reducer;
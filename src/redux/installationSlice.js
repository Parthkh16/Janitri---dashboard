// src/redux/installationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  installations: [],
};

const installationSlice = createSlice({
  name: 'installations',
  initialState,
  reducers: {
    setInstallations: (state, action) => {
      state.installations = action.payload;
    },
    addInstallation: (state, action) => {
      state.installations.push(action.payload);
    },
    updateInstallation: (state, action) => {
      const index = state.installations.findIndex(i => i.id === action.payload.id);
      if (index !== -1) state.installations[index] = action.payload;
    },
    deleteInstallation: (state, action) => {
      state.installations = state.installations.filter(i => i.id !== action.payload);
    },
  },
});

export const { setInstallations, addInstallation, updateInstallation, deleteInstallation } = installationSlice.actions;
export default installationSlice.reducer;
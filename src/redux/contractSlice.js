// src/redux/contractSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contracts: [],
};

const contractSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setContracts: (state, action) => {
      state.contracts = action.payload;
    },
    addContract: (state, action) => {
      state.contracts.push(action.payload);
    },
    updateContract: (state, action) => {
      const index = state.contracts.findIndex(c => c.id === action.payload.id);
      if (index !== -1) state.contracts[index] = action.payload;
    },
    deleteContract: (state, action) => {
      state.contracts = state.contracts.filter(c => c.id !== action.payload);
    },
  },
});

export const { setContracts, addContract, updateContract, deleteContract } = contractSlice.actions;
export default contractSlice.reducer;
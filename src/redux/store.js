// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./serviceSlice";
import contractReducer from "./contractSlice";
import alertReducer from "./alertSlice";
import installationReducer from "./installationSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,        // state.service.visits
    contract: contractReducer,
    alert: alertReducer,
    installation: installationReducer, // state.installation.installations
  },
});

export default store;

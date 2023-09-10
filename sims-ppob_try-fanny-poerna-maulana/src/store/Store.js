// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/UserSlice";
import profileReducer from "../store/ProfileSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    // Other reducers...
  },
});

export default store;

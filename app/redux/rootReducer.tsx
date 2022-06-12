import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  userAuth: authSlice,
});

export default rootReducer;

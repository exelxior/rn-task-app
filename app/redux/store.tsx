import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../types";
import tasksReducer from "./slices/taskSlice";
import authReducer from "./slices/authSlice";

const reducer = {
  tasks: tasksReducer,
  auth: authReducer,
};
const store = configureStore({
  reducer,
});

export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default store;

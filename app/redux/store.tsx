import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../types";
import tasksReducer from "./slices/taskSlice";
import authReducer from "./slices/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const persistedTaskReducer = persistReducer(persistConfig, tasksReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const reducer = {
  tasks: persistedTaskReducer,
  auth: persistedAuthReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export const persistor = persistStore(store);

import rootReducer from "./redux/rootReducer";
import store from "./redux/store";

// data
export type Task = {
  id: string | number[];
  title: string;
};

// navigation
export enum MainRoutes {
  // App Stack
  Home = "Home Screen",
  NewTask = "New Task Screen",

  // Auth Stack
  SignIn = "Sign In Screen",
}

// redux types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

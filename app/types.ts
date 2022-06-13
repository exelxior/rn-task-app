import store from "./redux/store";

// data
export type Task = {
  id: ID;
  title: string;
};

export type ID = {
  id: string | number[];
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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import rootReducer from "./redux/rootReducer";
import store from "./redux/store";

export type Task = {
  id: string | number[];
  title: string;
};

// redux types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

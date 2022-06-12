import React from "react";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import { AppRoute } from "./app/navigation/AppRoute";

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

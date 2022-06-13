import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./app/redux/store";
import { AppRoute } from "./app/navigation/AppRoute";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>
  );
}

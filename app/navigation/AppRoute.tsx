import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { selectIsLoggedIn } from "../redux/slices/authSlice";
import { useReduxSelector } from "../redux/store";

export const AppRoute = () => {
  const isLoggedIn = useReduxSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

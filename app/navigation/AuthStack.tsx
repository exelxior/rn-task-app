import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import { MainRoutes } from "../types";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MainRoutes.SignIn} component={SignIn} />
    </Stack.Navigator>
  );
};

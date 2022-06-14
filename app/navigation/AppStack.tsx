import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewTask from "../screens/Home/NewTask";
import { MainRoutes } from "../types";
import NavHeader from "../components/NavHeader";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MainRoutes.Home}
        component={Home}
        options={{ header: NavHeader }}
      />
      <Stack.Screen name={MainRoutes.NewTask} component={NewTask} />
    </Stack.Navigator>
  );
};

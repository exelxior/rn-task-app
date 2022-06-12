import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Button } from "react-native";
import { setSignOut } from "../redux/slices/authSlice";
import { useReduxDispatch } from "../redux/store";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const dispatch = useReduxDispatch();

  const handleSignOut = () => {
    const user = {
      isLoggedIn: false,
    };
    dispatch(setSignOut(user));
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{
          headerRight: () => (
            <Button onPress={handleSignOut} title="Sign Out" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

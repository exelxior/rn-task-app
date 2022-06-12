import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { setSignOut } from "../redux/slices/authSlice";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const dispatch = useDispatch();

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

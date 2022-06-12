import React from "react";
import { View, Button } from "react-native";
import { setSignIn } from "../../redux/slices/authSlice";
import { useReduxDispatch } from "../../redux/store";

export default function SignIn() {
  const dispatch = useReduxDispatch();

  const handleSignOut = () => {
    const user = {
      isLoggedIn: true,
    };
    dispatch(setSignIn(user));
  };

  return (
    <View>
      <Button title="Sign In" onPress={handleSignOut} />
    </View>
  );
}

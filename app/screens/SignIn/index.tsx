import React from "react";
import { View, Button } from "react-native";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../redux/slices/authSlice";

export default function SignIn() {
  const dispatch = useDispatch();

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

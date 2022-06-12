import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";
import { MainRoutes } from "../../types";
import TaskList from "./TaskList";

export default function Home() {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate(MainRoutes.NewTask);
  };

  return (
    <View>
      <TaskList />
      <Button title="Add Task" onPress={handleOnPress} />
    </View>
  );
}

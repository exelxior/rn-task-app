import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";
import TaskList from "./TaskList";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <TaskList />
      <Button title="Add Task" onPress={() => navigation.navigate("AddTask")} />
    </View>
  );
}

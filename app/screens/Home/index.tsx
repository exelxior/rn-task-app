import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MainRoutes } from "../../types";
import styles from "./styles";
import TaskList from "./TaskList";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();

  const handleAddTask = () => {
    navigation.navigate(MainRoutes.NewTask);
  };

  return (
    <View style={styles.container}>
      <TaskList />
      <TouchableOpacity style={styles.newTaskBtn} onPress={handleAddTask}>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

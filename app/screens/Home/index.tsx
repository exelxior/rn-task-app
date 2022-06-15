import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MainRoutes, Task } from "../../types";
import styles from "./styles";
import TaskList from "./TaskList";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/slices/taskSlice";

export default function Home() {
  const navigation = useNavigation();
  const tasks = useSelector(selectTasks);
  const completedTasks = tasks.filter((item: Task) => item.isCompleted);
  const incompleteTasks = tasks.filter((item: Task) => !item.isCompleted);

  console.log(tasks);

  const handleAddTask = () => {
    navigation.navigate(MainRoutes.NewTask);
  };

  return (
    <View style={styles.container}>
      {incompleteTasks.length > 0 ? (
        <View>
          <Text>Incomplete</Text>
          <TaskList tasks={incompleteTasks} />
        </View>
      ) : null}

      {completedTasks.length > 0 ? (
        <View>
          <Text>Completed</Text>
          <TaskList tasks={completedTasks} />
        </View>
      ) : null}

      <TouchableOpacity style={styles.newTaskBtn} onPress={handleAddTask}>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

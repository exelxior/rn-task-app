import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { useSelector } from "react-redux";
import { selectTasks } from "../../../redux/slices/taskSlice";
import { Task } from "../../../types";
import TaskItem from "../TaskItem";
import styles from "./styles";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  console.log(tasks);

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskItem item={item} />
  );

  return (
    <View style={styles.taskList}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item: Task) => item.id}
      />
    </View>
  );
};

export default TaskList;

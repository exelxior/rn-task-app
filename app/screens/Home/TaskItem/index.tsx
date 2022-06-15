import React, { useState } from "react";
import { Text, View } from "react-native";
import { completeTask, restoreTask } from "../../../redux/slices/taskSlice";
import { useReduxDispatch } from "../../../redux/store";
import { Task } from "../../../types";
import styles from "./styles";
import Checkbox from "expo-checkbox";

const TaskItem = ({ item }: { item: Task }) => {
  const dispatch = useReduxDispatch();

  const onChecked = () => {
    if (item.isCompleted) {
      dispatch(restoreTask(item.id));
    } else {
      dispatch(completeTask(item.id));
    }
  };

  return (
    <View style={styles.taskContainer}>
      <Checkbox value={item.isCompleted} onValueChange={onChecked} />
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskCategory}>{item.category}</Text>
      </View>
    </View>
  );
};

export default TaskItem;

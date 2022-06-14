import React, { useState } from "react";
import { Text, View, CheckBox } from "react-native";
import { completeTask } from "../../../redux/slices/taskSlice";
import { useReduxDispatch } from "../../../redux/store";
import { Task } from "../../../types";
import styles from "./styles";

const TaskItem = ({ item }: { item: Task }) => {
  //console.log(task);
  const [isSelected, setSelection] = useState(false);
  const dispatch = useReduxDispatch();

  const onChecked = () => {
    setSelection;
    dispatch(completeTask(item.id));
  };

  return (
    <View style={styles.taskContainer}>
      <CheckBox value={isSelected} onValueChange={onChecked} />
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskCategory}>Category</Text>
      </View>
    </View>
  );
};

export default TaskItem;

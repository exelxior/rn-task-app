import React from "react";
import { Text, View } from "react-native";
import { Task } from "../../../types";

const TaskItem = ({ item }: { item: Task }) => {
  //console.log(task);
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default TaskItem;

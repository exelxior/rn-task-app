import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { Task, tasksProp } from "../../../types";
import TaskItem from "../TaskItem";
import styles from "./styles";

const TaskList = (props: tasksProp) => {
  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskItem item={item} />
  );

  return (
    <View style={styles.taskList}>
      <FlatList
        data={props.tasks}
        renderItem={renderItem}
        keyExtractor={(item: Task) => item.id}
      />
    </View>
  );
};

export default TaskList;

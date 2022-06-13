import React from "react";
import { FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { completeTask, selectTasks } from "../../../redux/slices/taskSlice";
import { useReduxDispatch } from "../../../redux/store";
import { Task } from "../../../types";
import TaskItem from "../TaskItem";

const TaskList = () => {
  const dispatch = useReduxDispatch();
  const tasks = useSelector(selectTasks);
  console.log(tasks);

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => dispatch(completeTask(item.id))}
    >
      <TaskItem item={item} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item: Task) => item.id}
    />
  );
};

export default TaskList;

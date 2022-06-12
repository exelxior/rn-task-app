import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { Task } from "../../../types";
import TaskItem from "../TaskItem";

const TaskList = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Cleaning House",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Cooking Dinner",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Buying Plants",
    },
  ];

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskItem item={item} />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item: Task) => item.id}
    />
  );
};

export default TaskList;

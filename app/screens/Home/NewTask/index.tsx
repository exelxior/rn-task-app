import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import { newTask } from "../../../redux/slices/taskSlice";
import { useReduxDispatch } from "../../../redux/store";

export default function NewTask() {
  const [task, setTask] = useState(""); //
  const textInputDisabled = task === "";
  const dispatch = useReduxDispatch();
  const navigation = useNavigation();

  const onPress = () => {
    dispatch(newTask(task));
    setTask("");
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder={"Write a task"}
        onChangeText={setTask}
        value={task}
      ></TextInput>
      <Button title="Add Task" onPress={onPress} disabled={textInputDisabled} />
    </View>
  );
}

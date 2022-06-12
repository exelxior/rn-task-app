import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

export default function AddTask() {
  const [task, setTask] = useState(""); //
  const textInputDisabled = task === "";
  const onPress = () => {};

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

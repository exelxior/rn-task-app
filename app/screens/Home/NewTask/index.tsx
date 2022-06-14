import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { View, Button, TextInput } from "react-native";
import { newTask } from "../../../redux/slices/taskSlice";
import { useReduxDispatch } from "../../../redux/store";
import styles from "./styles";

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useReduxDispatch();
  const navigation = useNavigation();

  const isValidTask = useMemo(() => {
    return title.length > 0 && category.length > 0;
  }, [title, category]);

  const handleAddTask = async () => {
    if (isValidTask) {
      dispatch(newTask({ title, category }));
    }
    navigation.goBack();
  };

  return (
    <View style={styles.newTaskContainer}>
      <TextInput placeholder={"Title"} onChangeText={setTitle} />
      <TextInput placeholder={"Category"} onChangeText={setCategory} />
      <View>
        <Button
          title="Add"
          style={styles.addBtn}
          onPress={handleAddTask}
          disabled={!isValidTask}
        >
          Add
        </Button>
      </View>
    </View>
  );
}

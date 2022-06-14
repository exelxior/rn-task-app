import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";
import { ID, RootState, Task } from "../../types";

const tasks: Task[] = [];

export const taskSlice = createSlice({
  name: "userTask",
  initialState: { tasks },
  reducers: {
    // TODO: find type of action here
    newTask: (state, action) => {
      const newTaskItem = {
        id: uuid.v4(),
        title: action.payload.title,
        category: action.payload.category,
        isCompleted: false,
      };
      state.tasks.push(newTaskItem);
    },
    completeTask: (state, action: PayloadAction<ID>) => {
      const newTasks = state.tasks.filter(
        (item: Task) => item.id !== action.payload
      );
      console.log(newTasks);
      state.tasks = newTasks;
    },
  },
});

export const { newTask, completeTask } = taskSlice.actions;
export const selectTasks = (state: RootState["tasks"]) => state.tasks.tasks;
export default taskSlice.reducer;

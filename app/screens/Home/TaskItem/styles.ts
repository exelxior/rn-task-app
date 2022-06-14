import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    backgroundColor: "#F8F8F8",
  },
  taskCheckBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: "#FAFAFAB2",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "rgba(250, 250, 250, 0.7)",
  },
  taskItem: {
    width: 302,
    height: 45,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    marginLeft: 16,
  },
  taskTitle: {
    width: 302,
    height: 24,
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    color: "#575767",
  },
  taskCategory: {
    width: 71,
    height: 17,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 14,
    color: "#B9B9BE",
  },
});

export default styles;

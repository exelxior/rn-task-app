import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBlock: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  dateBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  date: {
    width: 227,
    height: 39,
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 39,
    color: "#292B35",
  },
  taskSummary: {
    width: 180,
    height: 17,
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 17,
    color: "#575767",
  },
  rightBlock: {
    padding: 10,
  },
  profilePic: {
    width: 48,
    height: 48,
  },
});

export default styles;

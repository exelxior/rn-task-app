import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  newTaskContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  addBtn: {
    width: 95,
    height: 34,
    backgroundColor: "#1294F2",
    padding: 8,
    borderRadius: 4,
    margin: 10,
  },
  addBtnTxt: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18,
    color: "#F8F8F8",
    alignSelf: "center",
  },
});

export default styles;

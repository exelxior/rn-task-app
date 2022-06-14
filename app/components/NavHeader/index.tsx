import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import moment from "moment";
import { useReduxDispatch } from "../../redux/store";
import { setSignOut } from "../../redux/slices/authSlice";
import { Feather } from "@expo/vector-icons";

const NavHeader = () => {
  const dispatch = useReduxDispatch();
  const today = new Date();
  const date = moment(today).format("M D, YYYY");

  const handleSignOut = () => {
    const user = {
      isLoggedIn: false,
    };
    dispatch(setSignOut(user));
  };

  return (
    <View style={styles.navHeader}>
      <View style={styles.leftBlock}>
        <View style={styles.dateBlock}>
          <Text style={styles.date}>{date}</Text>
          <TouchableOpacity>
            <Feather name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.taskSummary}>5 incomplete, 5 complete</Text>
      </View>
      <TouchableOpacity style={styles.rightBlock} onPress={handleSignOut}>
        <Image
          style={styles.profilePic}
          source={require("../../../assets/images/stock-avatar.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavHeader;

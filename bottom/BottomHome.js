import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import HomePage from "../components/HomePage";
// import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

const BottomHome = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Homepage" iconType="menu" navigation={navigation}/>
      <HomePage navigation={navigation}/>
    </View>
  );
};

export default BottomHome;

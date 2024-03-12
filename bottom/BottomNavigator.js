import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomHome from "./BottomHome";
import { Ionicons } from "@expo/vector-icons";
import Styles from "../Styles";
import BottomAboutUs from "./BottomAboutUs";
import BottomContactUs from "./BottomContactUs";

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={BottomHome}
        options={{ 
            headerShown: false,
            tabBarStyle: Styles.bottom_tabBar,
            tabBarIcon: (prop) => ( <Ionicons name="home" size={25} color={prop.focused ? "white":"grey"} /> )
            }}
      />
      <Bottom.Screen
        name="aboutUs"
        component={BottomAboutUs}
        options={{ 
            headerShown: false,
            tabBarStyle: Styles.bottom_tabBar,
            tabBarIcon: (prop) => ( <Ionicons name="information-circle-outline" size={25} color={prop.focused ? "white":"grey"} /> ),
            
            }}
      />
      <Bottom.Screen 
        name='Contact Us' 
        component={BottomContactUs}
        options={{ 
            headerShown: false,
            tabBarStyle: Styles.bottom_tabBar,
            tabBarIcon: (prop) => ( <Ionicons name="mail-outline" size={25} color={prop.focused ? "white":"grey"} /> ),
            
            }}
        />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

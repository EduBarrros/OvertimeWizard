import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import { Home, Settings } from "../screens";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{tabBarShowLabel: false, tabBarIcon: ({focused}) => (<Ionicons name="home" size={32} color={focused ? "blue" : "gray"} />)}}/>
        <Tab.Screen name="Settings" component={Settings} options={{tabBarShowLabel: false, tabBarIcon: ({focused}) => (<Ionicons name="settings" size={32} color={focused ? "blue" : "gray"} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

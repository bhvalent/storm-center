import React from 'react'
import FontAwesome5Icon from '@expo/vector-icons/FontAwesome5';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Whiteboard from '../screens/Whiteboard';
import Calendar from '../screens/Calendar';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Menu from '../screens/Menu';
import ShopStack from './ShopStack';

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Whiteboard"
        component={Whiteboard}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icon name="chalkboard-teacher" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="calendar" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icon name="shopping-bag" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icon name="user" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icon name="bell" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="navicon" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
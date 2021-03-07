import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { CONST } from '..//const';
import { Header } from '../components/Header';

const NotificationsNavigator = createStackNavigator();

export const Notifications = () => {
  return (
    <NotificationsNavigator.Navigator
      initialRouteName="Notifications"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <NotificationsNavigator.Screen
        name={'Notifications'}
        component={NotificationsScreen}
        options={(route) => Header(route)}
      />
    </NotificationsNavigator.Navigator>
  );
};

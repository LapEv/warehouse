import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../screens/SettingsScreen';
import { CONST } from '..//const';
import { Header } from '../components/Header';

const SettingsNavigator = createStackNavigator();

export const Settings = () => {
  return (
    <SettingsNavigator.Navigator
      initialRouteName="Settings"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <SettingsNavigator.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={(route) => Header(route)}
      />
    </SettingsNavigator.Navigator>
  );
};

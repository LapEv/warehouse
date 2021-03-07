import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SupportScreen } from '../screens/SupportScreen';
import { CONST } from '..//const';
import { Header } from '../components/Header';

const SupportNavigator = createStackNavigator();

export const Support = () => {
  return (
    <SupportNavigator.Navigator
      initialRouteName="Support"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <SupportNavigator.Screen
        name={'Support'}
        component={SupportScreen}
        options={(route) => Header(route)}
      />
    </SupportNavigator.Navigator>
  );
};

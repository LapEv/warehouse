import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NewMovingScreen } from '../screens/NewMovingScreen';
import { CONST } from '..//const';
import { Header } from '../components/Header';

const NewMovingNavigator = createStackNavigator();

export const NewMoving = () => {
  return (
    <NewMovingNavigator.Navigator
      initialRouteName="NewMoving"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <NewMovingNavigator.Screen
        name={'NewMoving'}
        component={NewMovingScreen}
        options={(route) => Header(route)}
      />
    </NewMovingNavigator.Navigator>
  );
};

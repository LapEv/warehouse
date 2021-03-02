import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';

import { CONST } from '../const';

const MainNavigator = createStackNavigator();

export const Main = () => {
  return (
    <MainNavigator.Navigator
      initialRouteName="HomeScreen"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <MainNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        backBehavior="none"
        options={{ title: 'Главная' }}
        // options={{ headerShown: false }}
      />
    </MainNavigator.Navigator>
  );
};

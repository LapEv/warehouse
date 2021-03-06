import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { CONST } from '..//const';
import { Header } from '../components/Header';

const HomeNavigator = createStackNavigator();

export const Home = () => {
  return (
    <HomeNavigator.Navigator
      initialRouteName="Home"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <HomeNavigator.Screen
        name={'Home'}
        component={HomeScreen}
        options={(route) => Header(route)}
      />
    </HomeNavigator.Navigator>
  );
};

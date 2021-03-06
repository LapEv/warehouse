import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AboutScreen } from '../screens/AboutScreen';
import { CONST } from '..//const';
import { LabelConstants } from '..//labelConstants';
import { Header } from '../components/Header';

const AboutNavigator = createStackNavigator();

export const About = () => {
  return (
    <AboutNavigator.Navigator
      initialRouteName="About"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <AboutNavigator.Screen
        name={'About'}
        component={AboutScreen}
        options={(route) => Header(route)}
      />
    </AboutNavigator.Navigator>
  );
};

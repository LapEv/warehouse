import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AboutScreen } from "../screens/AboutScreen"
import { CONST } from '..//const'

const AboutNavigator = createStackNavigator()

export const About = () => {
  return (
    <AboutNavigator.Navigator
      initialRouteName="About"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <AboutNavigator.Screen
        name="About"
        component={AboutScreen}
        options = {AboutScreen.navigationOption}
      />
    </AboutNavigator.Navigator>
  )
}

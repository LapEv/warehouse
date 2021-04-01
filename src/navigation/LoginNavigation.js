import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/LoginScreens/LoadingScreen';
import { SignUpScreen } from '../screens/LoginScreens/SignUpScreen';
import { LoginScreen } from '../screens/LoginScreens/LoginScreen';
import { ResetPasswordScreen } from '../screens/LoginScreens/ResetPasswordScreen';
import { PinCodeScreen } from '../screens/LoginScreens/PinCodeScreen.js';

const LoginNavigator = createStackNavigator();

const horizontalAnimation = {
  headerShown: false,
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export const Login = () => {
  return (
    <LoginNavigator.Navigator initialRouteName="LoadingScreen">
      <LoginNavigator.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={horizontalAnimation}
      />
      <LoginNavigator.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={horizontalAnimation}
      />
      <LoginNavigator.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={horizontalAnimation}
      />
      <LoginNavigator.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={horizontalAnimation}
      />
      <LoginNavigator.Screen
        name="PinCodeScreen"
        component={PinCodeScreen}
        options={horizontalAnimation}
      />
    </LoginNavigator.Navigator>
  );
};

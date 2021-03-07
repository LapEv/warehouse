import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/LoadingScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ResetPasswordScreen } from '../screens/ResetPasswordScreen';
import { PinCodeScreen } from '../screens/PinCodeScreen.js';
import { CONST } from '../const';

const LoginNavigator = createStackNavigator();

export const Login = () => {
  return (
    <LoginNavigator.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <LoginNavigator.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <LoginNavigator.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <LoginNavigator.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <LoginNavigator.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <LoginNavigator.Screen
        name="PinCodeScreen"
        component={PinCodeScreen}
        options={{ headerShown: false }}
      />
    </LoginNavigator.Navigator>
  );
};

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/LoadingScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ResetPasswordScreen } from '../screens/ResetPasswordScreen';
import { PinCodeScreen } from '../screens/PinCodeScreen.js';
import { CONST } from '../const';
import { Header } from '../components/Header';

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
        options={(route) => Header(route)}
      />
      <LoginNavigator.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={(route) => Header(route)}
      />
      <LoginNavigator.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={(route) => Header(route)}
      />
      <LoginNavigator.Screen
        name="PinCodeScreen"
        component={PinCodeScreen}
        options={(route) => Header(route)}
      />
    </LoginNavigator.Navigator>
  );
};

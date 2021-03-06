import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NewReceiptScreen } from '../screens/NewReceiptScreen';
import { CONST } from '..//const';
import { Header } from '../components/Header';

const NewReceiptNavigator = createStackNavigator();

export const NewReceipt = () => {
  return (
    <NewReceiptNavigator.Navigator
      initialRouteName="NewReceipt"
      screenOptions={CONST.SCREEN_OPTIONS}
    >
      <NewReceiptNavigator.Screen
        name={'NewReceipt'}
        component={NewReceiptScreen}
        options={(route) => Header(route)}
      />
    </NewReceiptNavigator.Navigator>
  );
};

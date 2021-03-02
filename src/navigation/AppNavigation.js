import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Main } from '../navigation/MainNavigation';
import { About } from '..//navigation/AboutNavigation';
import { Login } from '..//navigation/LoginNavigation';
import { CONST } from '../const';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerPosition="left"
        drawerContentOptions={{
          activeTintColor: CONST.MAIN_COLOR,
          itemStyle: { marginTop: 10 },
          labelStyle: { fontFamily: 'open-bold' },
          backgroundColor: CONST.MAIN_BACKGROUNDCOLOR,
        }}
      >
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: () => (
              <Ionicons
                name="home"
                size={25}
                color={Platform.OS === 'android' ? CONST.MAIN_COLOR : '#fff'}
              />
            ),
            title: 'Авторизация',
          }}
        />
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{ title: 'Главная' }}
          backBehavior="none"
          hideStatusBar="true"
          // options={{ headerShown: false }}
        />

        <Drawer.Screen
          name="О приложении"
          component={About}
          hideStatusBar="true"
          options={{
            drawerIcon: () => (
              <Ionicons
                name="book"
                size={25}
                color={Platform.OS === 'android' ? CONST.MAIN_COLOR : '#fff'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

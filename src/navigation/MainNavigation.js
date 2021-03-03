import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '..//components/CustomDrawer';
import { HomeScreen } from '../screens/HomeScreen';
import { NewMovingScreen } from '../screens/NewMovingScreen';
import { NewReceiptScreen } from '../screens/NewReceiptScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

import { CONST } from '../const';

const MainNavigator = createDrawerNavigator();

export const Main = () => {
  return (
    <MainNavigator.Navigator
      initialRouteName="HomeScreen"
      drawerPosition="left"
      drawerStyle={{
        width: Dimensions.get('window').width * (CONST.ratioScreen / 100),
      }}
      drawerContent={(props) => {
        const filteredProps = {
          ...props,
          state: {
            ...props.state,
            routeNames: props.state.routeNames.filter((routeName) => {
              routeName !== 'Main1';
            }),
            routes: props.state.routes.filter(
              (route) => route.name !== 'Main1'
            ),
          },
        };
        return <CustomDrawer filteredProps={filteredProps} />;
      }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#30cfd0',
        itemStyle: { marginTop: 30 },
        labelStyle: { fontFamily: 'open-bold', fontSize: 17 },
        // backgroundColor: 'white',
      }}
    >
      <MainNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        backBehavior="none"
        options={{
          drawerIcon: () => <Ionicons name="home" size={30} color={'#fff'} />,
          title: 'Главная',
        }}
        // options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        name="NewMovingScreen"
        component={NewMovingScreen}
        backBehavior="none"
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-arrow-right-outline"
              size={30}
              color={'#fff'}
            />
          ),
          title: 'Новое перемещение',
        }}
        // options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        name="NewReceiptScreen"
        component={NewReceiptScreen}
        backBehavior="none"
        options={{
          drawerIcon: () => (
            <MaterialIcons name="library-add" size={30} color={'#fff'} />
          ),
          title: 'Новое поступление',
        }}
        // options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        backBehavior="none"
        options={{
          drawerIcon: () => (
            <Ionicons name="md-settings-sharp" size={30} color={'#fff'} />
          ),
          title: 'Настройки',
        }}
        // options={{ headerShown: false }}
      />
    </MainNavigator.Navigator>
  );
};

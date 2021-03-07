import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '..//components/CustomDrawer';
import { HomeScreen } from '../screens/HomeScreen';
import { NewMovingScreen } from '../screens/NewMovingScreen';
import { NewReceiptScreen } from '../screens/NewReceiptScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { SupportScreen } from '../screens/SupportScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
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
              routeName !== 'Notifications';
            }),
            routes: props.state.routes.filter(
              (route) => route.name !== 'Notifications'
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
        name="Home"
        component={HomeScreen}
        backBehavior="none"
        options={{
          drawerIcon: () => <Ionicons name="home" size={30} color={'#fff'} />,
          title: 'Главная',
        }}
      />
      <MainNavigator.Screen
        name="NewMoving"
        component={NewMovingScreen}
        backBehavior="none"
        hideStatusBar="true"
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
      />
      <MainNavigator.Screen
        name="NewReceipt"
        component={NewReceiptScreen}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <MaterialIcons name="library-add" size={30} color={'#fff'} />
          ),
          title: 'Новое поступление',
        }}
      />
      <MainNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <MaterialIcons name="email" size={30} color={'#fff'} />
          ),
          title: 'Настройки',
        }}
      />
      <MainNavigator.Screen
        name="Support"
        component={SupportScreen}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <Ionicons name="md-settings-sharp" size={30} color={'#fff'} />
          ),
          title: 'Написать в поддержку',
        }}
      />
      <MainNavigator.Screen
        name="About"
        component={AboutScreen}
        hideStatusBar="true"
        backBehavior="none"
        options={{
          drawerIcon: () => <Ionicons name="book" size={30} color={'#fff'} />,
          title: 'О приложении',
        }}
      />
      <MainNavigator.Screen
        name="Notifications"
        component={NotificationsScreen}
        hideStatusBar="true"
        backBehavior="none"
        options={{
          drawerIcon: () => (
            <Ionicons name="notifications" size={30} color={'#fff'} />
          ),
          title: 'Уведомления',
        }}
      />
    </MainNavigator.Navigator>
  );
};

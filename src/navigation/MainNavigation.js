import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '..//components/CustomDrawer';
import { About } from '..//navigation/AboutNavigation';
import { Home } from './HomeNavigation';
import { NewMoving } from './NewMovingNavigation';
import { NewReceipt } from './NewReceiptNavigation';
import { Settings } from './SettingsNavigation';
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
        name="Home"
        component={Home}
        backBehavior="none"
        options={{
          drawerIcon: () => <Ionicons name="home" size={30} color={'#fff'} />,
          title: 'Главная',
        }}
      />
      <MainNavigator.Screen
        name="NewMoving"
        component={NewMoving}
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
        component={NewReceipt}
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
        component={Settings}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <Ionicons name="md-settings-sharp" size={30} color={'#fff'} />
          ),
          title: 'Настройки',
        }}
      />
      <MainNavigator.Screen
        name="About"
        component={About}
        hideStatusBar="true"
        backBehavior="none"
        options={{
          drawerIcon: () => <Ionicons name="book" size={30} color={'#fff'} />,
          title: 'О приложении',
        }}
      />
    </MainNavigator.Navigator>
  );
};

import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { CustomDrawer } from '..//components/CustomDrawer';
import { MainTabNavigation } from './MainTabNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { SupportScreen } from '../screens/SupportScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { DatabaseTabNavigation } from './DatabaseTabNavigation';
import { ReportScreen } from '../screens/ReportScreen';

import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import { CONST } from '../const';
import { LabelConstants } from '../labelConstants';

const MainNavigator = createDrawerNavigator();

export const Main = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <MainNavigator.Navigator
      initialRouteName="MainTabNavigation"
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
              routeName !== 'Notifications' &&
                routeName !== 'Profile' &&
                routeName !== 'TabNavigation';
            }),
            routes: props.state.routes.filter(
              (route) =>
                route.name !== 'Notifications' &&
                route.name !== 'Profile' &&
                route.name !== 'TabNavigation'
            ),
          },
        };
        return <CustomDrawer filteredProps={filteredProps} />;
      }}
      drawerContentOptions={{
        activeTintColor: theme.ITEM_COLOR,
        inactiveTintColor: theme.ITEM_COLOR,
        activeBackgroundColor: theme.BACKGROUNDCOLOR,
        // inactiveBackgroundColor: 'silver',
        itemStyle: {
          marginTop: 10,
          height: 60,
          justifyContent: 'center',
          borderRadius: 5,
        },
        labelStyle: {
          fontFamily: 'open-bold',
          fontSize: 17,
        },
        // backgroundColor: 'white',
      }}
    >
      <MainNavigator.Screen
        name="MainTabNavigation"
        component={MainTabNavigation}
        backBehavior="none"
        options={{
          drawerIcon: () => (
            <Ionicons name="home" size={30} color={theme.ITEM_COLOR} />
          ),
          title: 'Главная',
        }}
      />
      <MainNavigator.Screen
        name="DatabaseTabNavigation"
        component={DatabaseTabNavigation}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="database"
              size={30}
              color={theme.ITEM_COLOR}
            />
          ),
          title: LabelConstants.headerTitle.database,
        }}
      />
      <MainNavigator.Screen
        name="ReportScreen"
        component={ReportScreen}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <Ionicons name="pie-chart" size={30} color={theme.ITEM_COLOR} />
          ),
          title: LabelConstants.headerTitle.report,
        }}
      />

      <MainNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <Ionicons
              name="md-settings-sharp"
              size={30}
              color={theme.ITEM_COLOR}
            />
          ),
          title: LabelConstants.headerTitle.settings,
        }}
      />
      <MainNavigator.Screen
        name="Support"
        component={SupportScreen}
        backBehavior="none"
        hideStatusBar="true"
        options={{
          drawerIcon: () => (
            <MaterialIcons name="email" size={30} color={theme.ITEM_COLOR} />
          ),
          title: LabelConstants.headerTitle.support,
        }}
      />
      <MainNavigator.Screen
        name="About"
        component={AboutScreen}
        hideStatusBar="true"
        backBehavior="none"
        options={{
          drawerIcon: () => (
            <Ionicons name="book" size={30} color={theme.ITEM_COLOR} />
          ),
          title: LabelConstants.headerTitle.about,
        }}
      />
      <MainNavigator.Screen
        name="Notifications"
        component={NotificationsScreen}
        hideStatusBar="true"
        backBehavior="none"
      />
      <MainNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        hideStatusBar="true"
        backBehavior="none"
        options={{
          title: LabelConstants.headerTitle.notifications,
        }}
      />
    </MainNavigator.Navigator>
  );
};

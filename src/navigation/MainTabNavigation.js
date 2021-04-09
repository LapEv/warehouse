import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../screens/MainScreens/HomeScreen';
import { NewMovingScreen } from '../screens/MainScreens/NewMovingScreen';
import { NewReceiptScreen } from '../screens/MainScreens/NewReceiptScreen';
import { CustomTab } from '../components/CustomTab';
import { LabelConstants } from '../labelConstants';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

const MainTabNavigator = createMaterialTopTabNavigator();

export const MainTabNavigation = ({ navigation }) => {
  let i = 0;
  return (
    <MainTabNavigator.Navigator
      initialRouteName="HomeScreen"
      backBehavior="initialRoute"
      tabBar={(props) => {
        i++;
        const params = navigation
          .dangerouslyGetState()
          .routes[navigation.dangerouslyGetState().index].hasOwnProperty(
            'state'
          )
          ? navigation.dangerouslyGetState().routes[
              navigation.dangerouslyGetState().index
            ].state.routes[
              navigation.dangerouslyGetState().routes[
                navigation.dangerouslyGetState().index
              ].state.index
            ].params
          : undefined;
        return <CustomTab {...props} iter={i} params={params} />;
      }}
      tabBarPosition="top"
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { width: 100, height: 130 },
        style: { backgroundColor: '#30cfd0' },
      }}
    >
      <MainTabNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: <Ionicons name="home" size={40} color={'#fff'} />,
          title: LabelConstants.headerTitle.main,
        }}
      />
      <MainTabNavigator.Screen
        name="NewMovingScreen"
        component={NewMovingScreen}
        options={{
          tabBarLabel: 'Перемещение',
          tabBarIcon: (
            <MaterialCommunityIcons
              name="clipboard-arrow-right-outline"
              size={40}
              color={'#fff'}
            />
          ),
          title: LabelConstants.headerTitle.newMoving,
        }}
      />
      <MainTabNavigator.Screen
        name="NewReceiptScreen"
        component={NewReceiptScreen}
        options={{
          tabBarLabel: 'Поступление',
          tabBarIcon: (
            <MaterialIcons name="library-add" size={40} color={'#fff'} />
          ),
          title: LabelConstants.headerTitle.newReceipt,
        }}
      />
    </MainTabNavigator.Navigator>
  );
};

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { СlassifierScreen } from '../screens/DatabaseScreens/ClassifierScreen';
import { UsersScreen } from '../screens/DatabaseScreens/UsersScreen';
import { WarehousesScreen } from '../screens/DatabaseScreens/WarehousesScreen';
import { CustomTab } from '../components/CustomTab';
import { LabelConstants } from '../labelConstants';
import { FontAwesome5 } from '@expo/vector-icons';

const DatabaseTabNavigator = createMaterialTopTabNavigator();

export const DatabaseTabNavigation = ({ navigation }) => {
  let i = 0;

  return (
    <DatabaseTabNavigator.Navigator
      initialRouteName="СlassifierScreen"
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
      <DatabaseTabNavigator.Screen
        name="СlassifierScreen"
        component={СlassifierScreen}
        options={{
          tabBarLabel: 'Классификатор',
          tabBarIcon: <FontAwesome5 name="list" size={36} color={'#fff'} />,
          title: LabelConstants.headerTitle.classifier,
        }}
      />
      <DatabaseTabNavigator.Screen
        name="WarehousesScreen"
        component={WarehousesScreen}
        options={{
          tabBarLabel: 'Склады',
          tabBarIcon: (
            <FontAwesome5 name="warehouse" size={36} color={'#fff'} />
          ),
          title: LabelConstants.headerTitle.warehouses,
        }}
      />
      <DatabaseTabNavigator.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          tabBarLabel: 'Пользователи',
          tabBarIcon: <FontAwesome5 name="users" size={36} color={'#fff'} />,
          title: LabelConstants.headerTitle.users,
        }}
      />
    </DatabaseTabNavigator.Navigator>
  );
};

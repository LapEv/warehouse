import React, { useEffect } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Easing,
  Alert,
  BackHandler,
} from 'react-native';

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
        console.log('params = ', params);
        console.log('i = ', i);
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

// index =  Object {
//   "history": Array [
//     Object {
//       "key": "MainTabNavigation-Aa2KkN4W7g9tSBPuUn3sY",
//       "type": "route",
//     },
//   ],
//   "index": 0,
//   "key": "drawer-6yZNBLJVCQo8t5g4MAMCJ",
//   "routeNames": Array [
//     "MainTabNavigation",
//     "DatabaseTabNavigation",
//     "ReportScreen",
//     "Settings",
//     "Support",
//     "About",
//     "Notifications",
//     "Profile",
//   ],
//   "routes": Array [
//     Object {
//       "key": "MainTabNavigation-Aa2KkN4W7g9tSBPuUn3sY",
//       "name": "MainTabNavigation",
//       "params": undefined,
//       "state": Object {
//         "history": Array [
//           Object {
//             "key": "HomeScreen-VBrFieMrnbBXwmvWL5fM5",
//             "type": "route",
//           },
//           Object {
//             "key": "NewMovingScreen-S3dSv9CkuchdyE2ffod_p",
//             "type": "route",
//           },
//         ],
//         "index": 1,
//         "key": "tab-eLtgbLYUKvTQHgLQYFTe_",
//         "routeNames": Array [
//           "HomeScreen",
//           "NewMovingScreen",
//           "NewReceiptScreen",
//         ],
//         "routes": Array [
//           Object {
//             "key": "HomeScreen-VBrFieMrnbBXwmvWL5fM5",
//             "name": "HomeScreen",
//             "params": undefined,
//           },
//           Object {
//             "key": "NewMovingScreen-S3dSv9CkuchdyE2ffod_p",
//             "name": "NewMovingScreen",
//             "params": undefined,
//           },
//           Object {
//             "key": "NewReceiptScreen-Js9K6KJn3bUdsndBLNhpI",
//             "name": "NewReceiptScreen",
//             "params": undefined,
//           },
//         ],
//         "stale": false,
//         "type": "tab",
//       },
//     },
//     Object {
//       "key": "DatabaseTabNavigation-pfvEs9CvJSi9Gd1pfQQrF",
//       "name": "DatabaseTabNavigation",
//       "params": undefined,
//     },
//     Object {
//       "key": "ReportScreen-TUjgXlNt1VFUv747RtslU",
//       "name": "ReportScreen",
//       "params": undefined,
//     },
//     Object {
//       "key": "Settings-nny8K8xlvFDTsWkMFnQyd",
//       "name": "Settings",
//       "params": undefined,
//     },
//     Object {
//       "key": "Support-RKp4wu3Mbb8aT9pKNbofC",
//       "name": "Support",
//       "params": undefined,
//     },
//     Object {
//       "key": "About-2tv6PO9wtEQ5WNZrSQfbn",
//       "name": "About",
//       "params": undefined,
//     },
//     Object {
//       "key": "Notifications-fUS7ewVUl1VJ07394yDJd",
//       "name": "Notifications",
//       "params": undefined,
//     },
//     Object {
//       "key": "Profile-795My99GucP9tSa1lxF69",
//       "name": "Profile",
//       "params": undefined,
//     },
//   ],
//   "stale": false,
//   "type": "drawer",
// }

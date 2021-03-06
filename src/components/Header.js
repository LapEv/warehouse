import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '..//const';
import { LabelConstants } from '../labelConstants';

export const Header = (route) => {
  let headerTitle;
  switch (route.route.name) {
    case 'About':
      headerTitle = LabelConstants.headerTitle.about;
      break;
    case 'Home':
      headerTitle = LabelConstants.headerTitle.main;
      break;
    case 'NewMoving':
      headerTitle = LabelConstants.headerTitle.newMoving;
      break;
    case 'NewReceipt':
      headerTitle = LabelConstants.headerTitle.newReceipt;
      break;
    case 'Settings':
      headerTitle = LabelConstants.headerTitle.settings;
      break;
    default:
      headerTitle = '';
      break;
  }

  return CONST.HEADER_OPTIONS.mainBackground
    ? {
        headerTitle: headerTitle,
        headerBackground: () => {
          return (
            <View style={{ flex: 1 }}>
              <LinearGradient
                colors={CONST.HEADER_OPTIONS.backgroundColor}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></LinearGradient>
            </View>
          );
        },
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
              title="Toggle Drawer"
              iconName={CONST.HEADER_OPTIONS.drawerIcon}
              onPress={() =>
                route.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
          </HeaderButtons>
        ),
      }
    : {
        headerTitle: headerTitle,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
              title="Toggle Drawer"
              iconName={CONST.HEADER_OPTIONS.drawerIcon}
              onPress={() =>
                route.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
          </HeaderButtons>
        ),
      };
};

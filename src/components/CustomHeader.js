import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';
import { AppHeaderIcon } from './AppHeaderIcon';
import { CONST } from '../const';

export const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Toggle Drawer"
          iconName={CONST.HEADER_OPTIONS.drawerIcon}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </HeaderButtons>
      <Text style={styles.title}>{title}</Text>
      {CONST.isLogged ? (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Settings"
            iconName={CONST.HEADER_OPTIONS.settingsIcon}
            onPress={() => navigation.navigate('Settings')}
          />
          <Item
            title="Notifications"
            iconName={CONST.HEADER_OPTIONS.notificationsIcon}
            onPress={() => navigation.navigate('Notifications')}
          />
        </HeaderButtons>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#30cfd0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 10,
      },
    }),
    paddingTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'open-bold',
    letterSpacing: 0,
  },
});

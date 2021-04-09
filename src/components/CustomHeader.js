import React, { useState, useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
  AppHeaderIconIonicons,
  AppHeaderIconMaterialIcons,
} from './AppHeaderIcon';
import { CONST } from '../const';
import { THEME } from '../parametrs/theme';
import Animated from 'react-native-reanimated';

export const CustomHeader = ({
  screen,
  navigation,
  state,
  location,
  descriptors,
  title,
}) => {
  const animatedWidth = state ? state.routes.length : 1;
  const width = useWindowDimensions().width;

  const [currentRouteName, setRouteName] = useState('');

  const checkGoBackButton =
    Platform.OS === 'ios' &&
    currentRouteName !== 'HomeScreen' &&
    currentRouteName !== 'PinCodeScreen' &&
    currentRouteName !== 'LoginScreen'
      ? true
      : false;

  const delta = Platform.OS === 'ios' ? 240 : 160;

  useEffect(() => {
    screen !== undefined ? setRouteName(screen) : '';
    state !== undefined ? setRouteName(state.routeNames[state.index]) : '';
  }, [state]);

  const isLogged = useSelector((state) => state.pinCode.isLogged);
  const pinCodeChangeActive = useSelector(
    (state) => state.pinCode.pinCodeChangeActive
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          zIndex: 3,
          backgroundColor: THEME.MAIN_THEME.BACKGROUNDCOLOR,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <HeaderButtons HeaderButtonComponent={AppHeaderIconMaterialIcons}>
            <Item
              title="Toggle Drawer"
              iconSize={44}
              iconName={CONST.HEADER_OPTIONS.drawerIcon}
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            />
          </HeaderButtons>
          <HeaderButtons HeaderButtonComponent={AppHeaderIconMaterialIcons}>
            {checkGoBackButton ? (
              <Item
                title="Back"
                iconSize={30}
                iconName={CONST.HEADER_OPTIONS.back}
                onPress={() => {
                  navigation.goBack();
                  state ? navigation.setParams({ action: 'goback' }) : '';
                }}
              />
            ) : Platform.OS === 'ios' ? (
              <View style={{ width: 50 }}></View>
            ) : (
              <View></View>
            )}
          </HeaderButtons>
        </View>
      </View>
      <Animated.View
        style={{
          width: width * animatedWidth,
          flexDirection: 'row',
          marginLeft: location,
          zIndex: 1,
        }}
      >
        {state ? (
          state.routes.map((route) => {
            const { options } = descriptors[route.key];
            return (
              <View
                style={{
                  width: width - delta,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1,
                }}
                key={route.key}
              >
                <Animated.Text style={styles.title}>
                  {options.title}
                </Animated.Text>
              </View>
            );
          })
        ) : (
          <View
            style={{
              width: width - delta,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </Animated.View>
      {isLogged && !pinCodeChangeActive ? (
        <View style={styles.rightButtons}>
          <HeaderButtons HeaderButtonComponent={AppHeaderIconIonicons}>
            <Item
              title="Settings"
              iconSize={30}
              iconName={CONST.HEADER_OPTIONS.settingsIcon}
              onPress={() => navigation.navigate('Settings')}
            />
            <Item
              title="Notifications"
              iconSize={30}
              iconName={CONST.HEADER_OPTIONS.notificationsIcon}
              onPress={() => navigation.navigate('Notifications')}
            />
          </HeaderButtons>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_THEME.BACKGROUNDCOLOR,
    ...Platform.select({
      ios: {
        height: 90,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
      },
      android: {
        height: 80,
        elevation: 10,
      },
    }),
    paddingTop: 30,
    zIndex: 99,
  },
  title: {
    color: THEME.MAIN_THEME.TEXT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'open-bold',
    letterSpacing: 0,
    zIndex: 1,
  },
  rightButtons: {
    position: 'absolute',
    right: 0,
    ...Platform.select({
      ios: {
        top: 90 / 2,
      },
      android: {
        top: 80 / 2,
      },
    }),
    backgroundColor: THEME.MAIN_THEME.BACKGROUNDCOLOR,
    zIndex: 3,
  },
});

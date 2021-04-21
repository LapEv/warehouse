import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text, Switch } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { THEME } from '../parametrs/theme';
import { SECURITY } from '../parametrs/security';
import { PinCodeSettings } from '../store/actions/security';
import { ChangeTheme } from '../store/actions/theme';
import { LinearGradientButton } from '../components/LinearGradientButton';

export const SettingItems = ({ item, value, _key, width }) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const pinCodeSettings = useSelector((state) => state.pinCode);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  async function setValueFor(key, value) {
    try {
      return await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (e) {
      console.log('SettingsItems: Error: ', e);
    }
  }

  async function setAsyncStorageValueFor(key, value) {
    try {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log('SettingsItems: Error: ', e);
    }
  }

  async function deleteValueFor(key) {
    try {
      return await SecureStore.deleteItemAsync(key);
    } catch (e) {
      console.log('SettingsItems: Error: ', e);
    }
  }

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (_key === 'use_PinCode') {
      setValueFor(SECURITY.key, {
        use_PinCode: !isEnabled ? true : false,
      });
      isEnabled ? deleteValueFor(SECURITY.KeychainName) : '';
      dispatch(
        PinCodeSettings({
          use_PinCode: !isEnabled ? true : false,
          statusPinCode: 'choose',
          pinCodeChangeActive: true,
        })
      );
    }
    if (_key === 'use_FingerPrint') {
      setValueFor(SECURITY.key, {
        use_PinCode: pinCodeSettings.use_PinCode,
        use_FingerPrint: !isEnabled ? true : false,
      });
      dispatch(
        PinCodeSettings({
          use_PinCode: pinCodeSettings.use_PinCode,
          use_FingerPrint: !isEnabled ? true : false,
        })
      );
    }
  };

  const changeThemeHandler = (newTheme) => {
    if (THEME.currentTheme !== newTheme.name) {
      dispatch(ChangeTheme(newTheme));
      setAsyncStorageValueFor(THEME.theme._key, newTheme);
    }
  };

  useEffect(() => {
    _key === SECURITY.use_FingerPrint._key &&
    pinCodeSettings.use_FingerPrint !== pinCodeSettings.use_PinCode &&
    pinCodeSettings.pinCodeChangeActive
      ? (setIsEnabled((previousState) => !previousState),
        setValueFor(SECURITY.key, {
          use_PinCode: pinCodeSettings.use_PinCode,
          use_FingerPrint: pinCodeSettings.support_FingerPrint
            ? pinCodeSettings.use_PinCode
            : false,
        }),
        dispatch(
          PinCodeSettings({
            pinCodeChangeActive: !pinCodeSettings.use_PinCode ? false : true,
            use_FingerPrint: pinCodeSettings.support_FingerPrint
              ? pinCodeSettings.use_PinCode
              : false,
          })
        ))
      : null;
  }, [pinCodeSettings]);

  return (
    <View style={[styles.item, { width: width }]}>
      <Text style={{ color: theme.TEXT_COLOR, fontSize: 17 }}>{item}</Text>
      {_key === 'Theme' ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LinearGradientButton
            disabled={false}
            buttonLocation={styles.buttonLocation}
            buttonStyle={[
              styles.buttonStyle,
              { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 },
            ]}
            buttonTextStyle={[
              styles.buttonText,
              { color: THEME.MAIN_THEME.TEXT_COLOR },
            ]}
            backgroundColor={THEME.MAIN_THEME.BACKGROUNDCOLOR_LG}
            backgroundColorDisabled={
              THEME.MAIN_THEME.BACKGROUNDCOLOR_LG_Disabled
            }
            onPress={() => changeThemeHandler(THEME.MAIN_THEME)}
            text={'Основная'}
          />
          <LinearGradientButton
            disabled={false}
            buttonLocation={styles.buttonLocation}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={[
              styles.buttonText,
              { color: THEME.LIGHT_THEME.TEXT_COLOR },
            ]}
            backgroundColor={THEME.LIGHT_THEME.BACKGROUNDCOLOR_LG}
            backgroundColorDisabled={
              THEME.MAIN_THEME.BACKGROUNDCOLOR_LG_Disabled
            }
            onPress={() => changeThemeHandler(THEME.LIGHT_THEME)}
            text={'Светлая'}
          />
          <LinearGradientButton
            disabled={false}
            buttonLocation={styles.buttonLocation}
            buttonStyle={[
              styles.buttonStyle,
              { borderTopRightRadius: 15, borderBottomRightRadius: 15 },
            ]}
            buttonTextStyle={[
              styles.buttonText,
              { color: THEME.DARK_THEME.TEXT_COLOR },
            ]}
            backgroundColor={THEME.DARK_THEME.BACKGROUNDCOLOR_LG}
            backgroundColorDisabled={
              THEME.DARK_THEME.BACKGROUNDCOLOR_LG_Disabled
            }
            onPress={() => changeThemeHandler(THEME.DARK_THEME)}
            text={'Темная'}
          />
        </View>
      ) : (
        <Switch
          trackColor={{
            false: theme.NO_ACTIVE,
            true: theme.BACKGROUNDCOLOR,
          }}
          thumbColor={isEnabled ? theme.ITEM_COLOR : theme.ITEM_COLOR}
          ios_backgroundColor={theme.BACKGROUNDCOLOR}
          onValueChange={
            _key === SECURITY.use_FingerPrint._key &&
            !pinCodeSettings.use_PinCode
              ? null
              : toggleSwitch
          }
          value={isEnabled}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 30,
    paddingRight: 15,
  },
  // parameter: {
  //   color: THEME.MAIN_THEME.TEXT_COLOR,
  //   fontSize: 17,
  // },
  buttonLocation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
  },
  buttonStyle: {
    minHeight: 40,
    minWidth: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text, Switch } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { THEME } from '../parametrs/theme';
import { SECURITY } from '../parametrs/security';
import { PinCodeSettings } from '../store/actions/security';

export const SettingItems = ({ item, value, _key, width }) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const pinCodeSettings = useSelector((state) => state.pinCode);
  const dispatch = useDispatch();

  async function setValueFor(key, value) {
    console.log('key = ', key);
    console.log('value = ', value);
    try {
      return await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (e) {
      console.log('SettingsItems: Error: ', e);
    }
  }

  async function deleteValueFor(key) {
    console.log('key = ', key);
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
      setValueFor({
        use_PinCode: pinCodeSettings.use_PinCode,
        use_FingerPrint: !isEnabled ? true : false,
      });
      dispatch(
        PinCodeSettings(SECURITY.key, {
          use_PinCode: pinCodeSettings.use_PinCode,
          use_FingerPrint: !isEnabled ? true : false,
        })
      );
    }
  };

  useEffect(() => {
    _key === SECURITY.use_FingerPrint._key &&
    pinCodeSettings.use_FingerPrint !== pinCodeSettings.use_PinCode &&
    pinCodeSettings.pinCodeChangeActive
      ? (setIsEnabled((previousState) => !previousState),
        setValueFor(SECURITY.key, {
          use_PinCode: pinCodeSettings.use_PinCode,
          use_FingerPrint: pinCodeSettings.use_PinCode,
        }),
        dispatch(
          PinCodeSettings({
            pinCodeChangeActive: !pinCodeSettings.use_PinCode ? false : true,
            use_FingerPrint: pinCodeSettings.use_PinCode,
          })
        ))
      : null;
  }, [pinCodeSettings]);

  return (
    <View style={[styles.item, { width: width }]}>
      <Text style={styles.parameter}>{item}</Text>
      <Switch
        trackColor={{
          false: 'silver',
          true: THEME.MAIN_THEME.BACKGROUNDCOLOR,
        }}
        thumbColor={isEnabled ? 'white' : 'white'}
        ios_backgroundColor={THEME.MAIN_THEME.BACKGROUNDCOLOR}
        onValueChange={
          _key === SECURITY.use_FingerPrint._key && !pinCodeSettings.use_PinCode
            ? null
            : toggleSwitch
        }
        value={isEnabled}
      />
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
  parameter: {
    color: THEME.MAIN_THEME.TEXT_COLOR,
    fontSize: 17,
  },
});

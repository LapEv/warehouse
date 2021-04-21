import * as Font from 'expo-font';
import firebase from 'firebase';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { PinCodeSettings } from './store/actions/security';
import { ChangeTheme } from './store/actions/theme';
import store from './store/index';
// import * as ScreenOrientation from 'expo-screen-orientation';
import { CONST } from './const';
import { SECURITY } from './parametrs/security';
import { THEME } from './parametrs/theme';

async function SupportFinger() {
  if (await LocalAuthentication.hasHardwareAsync()) {
    const supportedAuthentications = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (supportedAuthentications.indexOf(1) !== -1) {
      return await LocalAuthentication.isEnrolledAsync();
    }
  }
}

export async function bootstrap() {
  try {
    const themeValue = await AsyncStorage.getItem(THEME.theme._key);
    if (themeValue && themeValue.name !== 'MAIN_THEME') {
      await store.dispatch(ChangeTheme(JSON.parse(themeValue)));
    }

    await Font.loadAsync({
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
    if (!firebase.apps.length) {
      firebase.initializeApp(CONST.firebaseConfig);
    }

    // firebase.auth().onAuthStateChanged((user) => {
    //   console.log('user = ', user);
    // });

    // SecureStore.deleteItemAsync(SECURITY.key);
    // SecureStore.deleteItemAsync(SECURITY.KeychainName);

    if (await SecureStore.isAvailableAsync()) {
      const supportFingerPrint = await SupportFinger();
      const result = JSON.parse(await SecureStore.getItemAsync(SECURITY.key));
      // console.log('result = ', result);
      if (result) {
        if (!result.use_PinCode) {
          // console.log('Пин код не используется');
          await store.dispatch(
            PinCodeSettings({
              use_PinCode: false,
              statusPinCode: 'choose',
              use_FingerPrint: false,
              support_FingerPrint: false,
            })
          );
          return;
        }
        const pin = await SecureStore.getItemAsync(SECURITY.KeychainName);
        // console.log('pinCode = ', pin);
        if (pin === null || pin === false) {
          // console.log('Пин код не установлен');
          await store.dispatch(
            PinCodeSettings({
              use_PinCode: true,
              statusPinCode: 'choose',
              use_FingerPrint: false,
              support_FingerPrint: supportFingerPrint,
            })
          );
        } else {
          // console.log('Пин код установлен');
          // console.log('supportFingerPrint = ', supportFingerPrint);
          await store.dispatch(
            PinCodeSettings({
              use_PinCode: true,
              statusPinCode: 'enter',
              use_FingerPrint: supportFingerPrint
                ? result.use_FingerPrint
                : false,
              support_FingerPrint: supportFingerPrint,
            })
          );
        }
      }
      if (result === null) {
        // console.log('First Load');
        await store.dispatch(
          PinCodeSettings({
            statusPinCode: 'choose',
            use_PinCode: true,
            use_FingerPrint: supportFingerPrint
              ? result.use_FingerPrint
              : false,
            support_FingerPrint: supportFingerPrint,
          })
        );
      }
    }
    // try {
    //   await ScreenOrientation.lockAsync(
    //     ScreenOrientation.OrientationLock.PORTRAIT_UP
    //   );
    // } catch (e) {
    //   console.log('Error: ', e);
    // }
  } catch (e) {
    console.log('Error: ', e);
  }
}

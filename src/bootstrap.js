import * as Font from 'expo-font';
import firebase from 'firebase';
import * as LocalAuthentication from 'expo-local-authentication';
import * as ScreenOrientation from 'expo-screen-orientation';

import { CONST } from './const';

export async function bootstrap() {
  //console.log('Start bootstrap')
  try {
    await Font.loadAsync({
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
    if (!firebase.apps.length) {
      firebase.initializeApp(CONST.firebaseConfig);
    }
    // try {
    //   await ScreenOrientation.lockAsync(
    //     ScreenOrientation.OrientationLock.PORTRAIT_UP
    //   );
    // } catch (e) {
    //   console.log('Error: ', e);
    // }
    if (CONST.use_PIN_CODE) {
      // считать с базы статус PIN code (choose или enter) и записать в переменную PIN_CODE_status
      if (CONST.use_fingerprint) {
        if (await LocalAuthentication.hasHardwareAsync()) {
          const supportedAuthentications = await LocalAuthentication.supportedAuthenticationTypesAsync();
          if (supportedAuthentications.indexOf(1) !== -1) {
            CONST.supportFingerPrint = await LocalAuthentication.isEnrolledAsync();
          }
        }
      }
    }
    // console.log(CONST.supportFingerPrint)
  } catch (e) {
    console.log('Error: ', e);
  }
}

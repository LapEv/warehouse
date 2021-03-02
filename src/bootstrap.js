import * as Font from 'expo-font'
import firebase from 'firebase';
import * as LocalAuthentication from 'expo-local-authentication';

import { CONST } from './const'

export async function bootstrap() {
    //console.log('Start bootstrap')
  try{
    await Font.loadAsync({
      'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('../assets/fonts/OpenSans-Regular.ttf')
    })
    if (!firebase.apps.length) {
      firebase.initializeApp(CONST.firebaseConfig) 
    }
    console.log(await LocalAuthentication.hasHardwareAsync())
    console.log(await LocalAuthentication.supportedAuthenticationTypesAsync())
    if (await LocalAuthentication.hasHardwareAsync()) {
      const supportedAuthentications = await LocalAuthentication.supportedAuthenticationTypesAsync();
      console.log(supportedAuthentications)
      if (supportedAuthentications.indexOf(1) !== -1) {
        CONST.supportFingerPrint = await LocalAuthentication.isEnrolledAsync();
    }}
    // console.log(CONST.supportFingerPrint)
  } catch (e){
    console.log('Error: ', e)
  }

}
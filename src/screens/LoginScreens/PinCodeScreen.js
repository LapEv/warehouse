import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import PINCode, { hasUserSetPinCode } from '@haskkor/react-native-pincode';
import * as SecureStore from 'expo-secure-store';
import { SECURITY } from '../../parametrs/security';
import { CustomHeader } from '../../components/CustomHeader';
import { PinCodeSettings } from '../../store/actions/security';
import store from '../../store/index';

export const PinCodeScreen = ({ route, navigation }) => {
  const [showPinLock, setShowPinLock] = useState(false);
  const pinCodeSettings = useSelector((state) => state.pinCode);

  async function setValueFor(value) {
    return await SecureStore.setItemAsync(SECURITY.key, JSON.stringify(value));
  }

  const finishProcess = async () => {
    const hasPin = await hasUserSetPinCode(SECURITY.KeychainName);
    if (hasPin) {
      if (pinCodeSettings.statusPinCode === 'choose') {
        await store.dispatch(
          PinCodeSettings({
            statusPinCode: 'enter',
            use_FingerPrint: true,
          })
        );
        setValueFor({
          use_PinCode: true,
          use_FingerPrint: true,
        });
      } else {
        await store.dispatch(
          PinCodeSettings({
            pinCodeChangeActive: false,
          })
        );
        setShowPinLock(false);
        navigation.navigate('Main');
      }
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="" navigation={navigation} screen={route.name} />

      {!showPinLock && (
        <PINCode
          status={pinCodeSettings.statusPinCode}
          touchIDDisabled={true}
          // launchTouchID={true}
          // touchIDDisabled={CONST.supportFingerPrint ? false : true}
          // launchTouchID={CONST.supportFingerPrint ? true : false}
          pinCodeVisible={false}
          pinCodeKeychainName={SECURITY.KeychainName}
          // pinCodeKeychainName={'reactNativePinCode'}
          timeLocked={10000}
          maxAttempts={1}
          delayBetweenAttempts={1500}
          titleChoose={'Enter a PIN Code!!!'}
          titleConfirm={'Confirm your PIN Code'}
          stylePinCodeColorTitle={'white'}
          stylePinCodeColorSubtitle={'white'}
          colorPassword={'white'}
          colorPasswordEmpty={'white'}
          colorCircleButtons={'rgba(255, 0, 255, 0.0)'}
          numbersButtonOverlayColor={'#30cfd0'}
          stylePinCodeTextTitle={{ fontWeight: 'bold' }}
          // stylePinCodeTextSubtitle={{fontWeight: 'bold'}}
          stylePinCodeTextButtonCircle={{ fontWeight: '400' }}
          stylePinCodeButtonNumber={'white'}
          stylePinCodeDeleteButtonColorShowUnderlay={'white'}
          stylePinCodeDeleteButtonColorHideUnderlay={'white'}
          stylePinCodeDeleteButtonSize={36}
          styleLockScreenText={{ color: 'white' }}
          styleLockScreenTextButton={{ color: 'white' }}
          styleLockScreenTextTimer={{ color: 'white' }}
          styleLockScreenTitle={{ color: 'white', fontSize: 22 }}
          styleLockScreenViewCloseButton={{ opacity: 1 }}
          styleLockScreenButton={{ backgroundColor: 'rgba(255, 0, 255, 0.0)' }}
          finishProcess={finishProcess}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
    padding: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  seperator: {
    margin: 10,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

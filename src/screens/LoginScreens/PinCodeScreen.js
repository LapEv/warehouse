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
  const theme = useSelector((state) => state.theme);

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
            use_FingerPrint: pinCodeSettings.support_FingerPrint
              ? pinCodeSettings.use_PinCode
              : false,
          })
        );
        setValueFor({
          use_PinCode: true,
          use_FingerPrint: pinCodeSettings.support_FingerPrint
            ? pinCodeSettings.use_PinCode
            : false,
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
          stylePinCodeColorTitle={theme.TEXT_COLOR}
          stylePinCodeColorSubtitle={theme.TEXT_COLOR}
          colorPassword={theme.TEXT_COLOR}
          colorPasswordEmpty={theme.TEXT_COLOR}
          colorCircleButtons={'rgba(255, 0, 255, 0.0)'}
          numbersButtonOverlayColor={theme.BACKGROUNDCOLOR}
          stylePinCodeTextTitle={{ fontWeight: 'bold' }}
          // stylePinCodeTextSubtitle={{fontWeight: 'bold'}}
          stylePinCodeTextButtonCircle={{ fontWeight: '400' }}
          stylePinCodeButtonNumber={theme.TEXT_COLOR}
          stylePinCodeDeleteButtonColorShowUnderlay={theme.TEXT_COLOR}
          stylePinCodeDeleteButtonColorHideUnderlay={theme.TEXT_COLOR}
          stylePinCodeDeleteButtonSize={36}
          styleLockScreenText={{ color: theme.TEXT_COLOR }}
          styleLockScreenTextButton={{ color: theme.TEXT_COLOR }}
          styleLockScreenTextTimer={{ color: theme.TEXT_COLOR }}
          styleLockScreenTitle={{ color: theme.TEXT_COLOR, fontSize: 22 }}
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

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PINCode, { hasUserSetPinCode } from '@haskkor/react-native-pincode';
import { CONST } from '../../const';
import { CustomHeader } from '../../components/CustomHeader';

export const PinCodeScreen = ({ route, navigation }) => {
  const [showPinLock, setShowPinLock] = useState(false);
  const [PINCodeStatus, setPINCodeStatus] = useState(CONST.PIN_CODE_status);

  const pinCodeKeychainName = CONST.KeychainName;

  console.log('PINstatus = ', PINCodeStatus);

  const finishProcess = async () => {
    const hasPin = await hasUserSetPinCode(pinCodeKeychainName);
    if (hasPin) {
      if (PINCodeStatus === 'choose') {
        setPINCodeStatus('enter');
      } else {
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
          status={PINCodeStatus}
          touchIDDisabled={true}
          // launchTouchID={true}
          // touchIDDisabled={CONST.supportFingerPrint ? false : true}
          // launchTouchID={CONST.supportFingerPrint ? true : false}
          pinCodeVisible={false}
          pinCodeKeychainName={'Ware0809House'}
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

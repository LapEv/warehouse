import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LinearGradientButton } from '../components/LinearGradientButton';
import { NOTIFICATIONS } from '../parametrs/notifications';
import { SECURITY } from '../parametrs/security';
import { THEME } from '../parametrs/theme';
import { LabelConstants } from '../labelConstants';
import { CustomHeader } from '../components/CustomHeader';
import { SettingItems } from '../components/SettingItems';
import { PinCodeSettings } from '../store/actions/security';

export const SettingsScreen = ({ navigation }) => {
  const pinCodeSettings = useSelector((state) => state.pinCode);
  const [btnChangePinCode, setDisabledBtnChangePinCode] = useState(
    pinCodeSettings.use_PinCode
  );
  const theme = useSelector((state) => state.theme);

  const DATA = [
    {
      id: 1,
      title: THEME.section,
      data: [THEME.theme],
    },
    {
      id: 2,
      title: SECURITY.section,
      data: pinCodeSettings.support_FingerPrint
        ? [
            SECURITY.use_PinCode,
            SECURITY.use_FingerPrint,
            SECURITY.change_PIN_CODE,
          ]
        : [SECURITY.use_PinCode, SECURITY.change_PIN_CODE],
    },
    {
      id: 3,
      title: NOTIFICATIONS.section,
      data: [NOTIFICATIONS.use_Email, NOTIFICATIONS.use_Push],
    },
  ];

  const width = useWindowDimensions().width;

  const dispatch = useDispatch();
  const change_PIN_CODE = () => {
    dispatch(
      PinCodeSettings({
        statusPinCode: 'choose',
        pinCodeChangeActive: true,
      })
    );
    navigation.navigate('PinCodeScreen');
  };

  console.log('что там с face id у айфона');

  useEffect(() => {
    setDisabledBtnChangePinCode(pinCodeSettings.use_PinCode);
  }, [pinCodeSettings]);

  return (
    <View style={styles.container}>
      <CustomHeader
        title={LabelConstants.headerTitle.settings}
        navigation={navigation}
      />
      <LinearGradient
        colors={theme.BACKGROUNDCOLOR_LG}
        style={THEME.MAIN_BACKGROUNDSTYLES}
      >
        <SectionList
          style={{
            paddingTop: 20,
            width: '100%',
            flex: 1,
          }}
          contentContainerStyle={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) =>
            item._key !== SECURITY.change_PIN_CODE._key ? (
              <SettingItems
                item={item.name}
                value={item.value}
                _key={item._key}
                width={width}
              />
            ) : (
              <LinearGradientButton
                disabled={!btnChangePinCode}
                buttonLocation={styles.buttonLocation}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={[
                  styles.buttonText,
                  { color: theme.TEXT_COLOR },
                ]}
                backgroundColor={theme.BACKGROUNDCOLOR_LG}
                backgroundColorDisabled={theme.BACKGROUNDCOLOR_LG_Disabled}
                onPress={change_PIN_CODE}
                text={SECURITY.change_PIN_CODE.name}
              />
            )
          }
          renderSectionHeader={({ section: { title, id } }) => (
            <View style={[styles.header, { width: width }]}>
              {id > 1 && (
                <View
                  style={{
                    height: 0.5,
                    paddingRight: 15,
                    backgroundColor: theme.BACKGROUNDCOLOR,
                    elevation: 5,
                  }}
                />
              )}
              <Text
                style={[
                  styles.headerText,
                  { color: theme.TEXT_COLOR },
                  THEME.TITLE_FONT,
                ]}
              >
                {title}
              </Text>
            </View>
          )}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 5,
    paddingLeft: 15,
  },
  headerText: {
    paddingTop: 25,
    width: '100%',
    alignSelf: 'stretch',
  },
  buttonLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: 15,
    minWidth: Platform.OS === 'web' ? 180 : 180,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

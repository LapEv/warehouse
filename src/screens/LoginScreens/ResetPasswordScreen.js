import React, { useState } from 'react';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Platform } from 'react-native';
import { FloatLabelInput } from '../../components/FloatLabelInput';
import { LinearGradientButton } from '../../components/LinearGradientButton';
import { CONST } from '../../const';
import { CustomHeader } from '../../components/CustomHeader';

export const ResetPasswordScreen = ({ route, navigation }) => {
  const [reset, setResetPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleResetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(reset.trim())
      .then(() => navigation.navigate('LoginScreen'))
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
        colors={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
        style={(CONST.MAIN_BACKGROUNDSTYLES, { width: '100%' })}
      >
        <CustomHeader title="" navigation={navigation} screen={route.name} />
        <View style={Platform.OS === 'web' ? styles.web : styles.mobile}>
          <Text style={styles.text}>Reset Password</Text>
          {errorMessage && (
            <Text
              style={{
                color: CONST.THEME.MAIN.DANGER_COLOR,
                fontWeight: 'bold',
              }}
            >
              {errorMessage}
            </Text>
          )}
          <View style={styles.floatingItem}>
            <FloatLabelInput
              isPassword={false}
              label="Email"
              value={reset}
              type="text"
              hintTextColor={'white'}
              onChangeText={setResetPassword}
            />
          </View>
          <View style={styles.buttonContainer}>
            <LinearGradientButton
              buttonLocation={styles.buttonOptions}
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonText}
              backgroundColor={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
              onPress={handleResetPassword}
              text={'Reset'}
            />
          </View>
          <View style={styles.optionsContainer}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.textAnswer}> Already have an account?</Text>
              <LinearGradientButton
                buttonLocation={styles.buttonOptions}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonText}
                backgroundColor={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
                onPress={() => navigation.navigate('LoginScreen')}
                text={'Login'}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: heightButton,
              }}
            >
              <Text style={styles.textAnswer}> Don't have an account?</Text>
              <LinearGradientButton
                buttonLocation={styles.buttonOptions}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonText}
                backgroundColor={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
                onPress={() => navigation.navigate('SignUpScreen')}
                text={'Sign Up'}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const heightButton = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  web: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobile: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingItem: {
    width: '70%',
    height: 60,
    marginTop: 8,
    marginVertical: 15,
    paddingLeft: 15,
  },
  floatingInput: {
    color: CONST.THEME.MAIN.TEXT_COLOR,
    fontSize: 20,
  },
  text: {
    color: CONST.THEME.MAIN.TEXT_COLOR,
    fontSize: 40,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 150,
    // height: heightButton,
    borderRadius: 25,
    color: 'white',
  },
  buttonLocation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: 25,
    minWidth: Platform.OS === 'web' ? 180 : 150,
    minHeight: heightButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 70,
    paddingBottom: 10,
    width: '100%',
    color: 'white',
  },
  buttonOptions: {
    marginTop: 5,
    borderRadius: 25,
    width: 150,
    height: 100,
  },
  textAnswer: {
    color: CONST.THEME.MAIN.TEXT_COLOR,
    fontSize: 12,
    marginBottom: 10,
  },
});

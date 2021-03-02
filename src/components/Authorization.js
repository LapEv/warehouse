import React, { useState } from 'react';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Platform } from 'react-native';
import { FloatLabelInput } from '../components/FloatLabelInput';
import { LinearGradientButton } from '../components/LinearGradientButton';
import { CONST } from '../const';

export const Authorization = ({ screen, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => navigation.navigate('Main'))
      .catch((error) => setErrorMessage(error.message));
  };

  const handleSignUp = () => {
    console.log(email, ' ', password, ' ', confirmPassword);
    if (password !== confirmPassword) {
      setErrorMessage(`Passwords don't match`);
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(() => navigation.navigate('Main'))
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient
        colors={CONST.MAIN_BACKGROUNDCOLOR}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <View style={Platform.OS === 'web' ? styles.web : styles.mobile}>
          <Text style={styles.text}>
            {screen === 'LoginScreen' ? 'Login' : 'Sign Up'}
          </Text>
          {errorMessage && (
            <Text style={{ color: CONST.DANGER_COLOR, fontWeight: 'bold' }}>
              {errorMessage}
            </Text>
          )}
          <View style={styles.floatingItem}>
            <FloatLabelInput
              isPassword={false}
              label="Email"
              value={email}
              type="text"
              hintTextColor={'white'}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.floatingItem}>
            <FloatLabelInput
              isPassword={true}
              label="Password"
              value={password}
              hintTextColor={'white'}
              onChangeText={setPassword}
            />
          </View>
          {screen === 'SignUpScreen' && (
            <View style={styles.floatingItem}>
              <FloatLabelInput
                isPassword={true}
                label="Confirm Password"
                value={confirmPassword}
                hintTextColor={'white'}
                onChangeText={setConfirmPassword}
              />
            </View>
          )}
          <View style={styles.buttonContainer}>
            <LinearGradientButton
              buttonLocation={styles.buttonLocation}
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonText}
              backgroundColor={CONST.MAIN_BACKGROUNDCOLOR}
              onPress={screen === 'LoginScreen' ? handleLogin : handleSignUp}
              text={screen === 'LoginScreen' ? 'Login' : 'Sign Up'}
            />
          </View>
          <View style={styles.optionsContainer}>
            {screen === 'SignUpScreen' ? (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textAnswer}> Already have an account?</Text>
                <LinearGradientButton
                  buttonLocation={styles.buttonOptions}
                  buttonStyle={styles.buttonStyle}
                  buttonTextStyle={styles.buttonText}
                  backgroundColor={CONST.MAIN_BACKGROUNDCOLOR}
                  onPress={() => navigation.navigate('LoginScreen')}
                  text={'Login'}
                />
              </View>
            ) : (
              <View style={styles.optionsInContainer}>
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
                    backgroundColor={CONST.MAIN_BACKGROUNDCOLOR}
                    onPress={() => navigation.navigate('SignUpScreen')}
                    text={'Sign Up'}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: heightButton,
                  }}
                >
                  <Text style={styles.textAnswer}> Forgot Password?</Text>
                  <LinearGradientButton
                    buttonLocation={styles.buttonOptions}
                    buttonStyle={styles.buttonStyle}
                    buttonTextStyle={styles.buttonText}
                    backgroundColor={CONST.MAIN_BACKGROUNDCOLOR}
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                    text={'Reset Password'}
                  />
                </View>
              </View>
            )}
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
    color: CONST.TEXT_COLOR,
    fontSize: 20,
  },
  text: {
    color: CONST.TEXT_COLOR,
    fontSize: 40,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 150,
    height: heightButton,
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
    marginTop: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsInContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 25,
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
    color: CONST.TEXT_COLOR,
    fontSize: 12,
    marginBottom: 10,
  },
});

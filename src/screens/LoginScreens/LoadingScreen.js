import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';
// import firebase from '@react-native-firebase/auth';
// import 'firebase/auth';
import { CONST } from '../../const';

export const LoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged((user) => {
    navigation.navigate(
      user
        ? CONST.use_PIN_CODE
          ? 'PinCodeScreen'
          : 'HomeScreen'
        : 'LoginScreen'
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={styles.text}>Loading</Text>
        <ActivityIndicator color="white" size="large" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: CONST.THEME.MAIN.TEXT_COLOR,
    fontSize: 40,
  },
});

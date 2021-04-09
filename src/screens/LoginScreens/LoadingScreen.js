import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';
import { THEME } from '../../parametrs/theme';

export const LoadingScreen = ({ navigation }) => {
  const use_PinCode = useSelector((state) => state.pinCode.use_PinCode);

  firebase.auth().onAuthStateChanged((user) => {
    navigation.navigate(
      user ? (use_PinCode ? 'PinCodeScreen' : 'Main') : 'LoginScreen'
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={THEME.MAIN_THEME.BACKGROUNDCOLOR_LG}
        style={THEME.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={styles.text}>Loading</Text>
        <ActivityIndicator color="white" size="large" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: THEME.MAIN_THEME.TEXT_COLOR,
    fontSize: 40,
  },
});

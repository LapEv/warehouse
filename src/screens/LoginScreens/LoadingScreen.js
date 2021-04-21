import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase';
import { THEME } from '../../parametrs/theme';
import store from '../../store/index';

export const LoadingScreen = ({ navigation }) => {
  const use_PinCode = useSelector((state) => state.pinCode.use_PinCode);
  const theme = store.getState().theme;

  firebase.auth().onAuthStateChanged((user) => {
    navigation.navigate(
      user ? (use_PinCode ? 'PinCodeScreen' : 'Main') : 'LoginScreen'
    );
  });

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={theme.BACKGROUNDCOLOR_LG}
        style={THEME.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: theme.TEXT_COLOR, fontSize: 40 }}>Loading</Text>
        <ActivityIndicator color="white" size="large" />
      </LinearGradient>
    </View>
  );
};

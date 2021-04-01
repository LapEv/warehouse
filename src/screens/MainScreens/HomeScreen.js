import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../../const';

export const HomeScreen = () => {
  const { currentUser } = firebase.auth();
  !CONST.isLogged ? (CONST.isLogged = true) : '';

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <View style={styles.screen}>
          <Text style={{ color: CONST.THEME.MAIN.TEXT_COLOR }}>
            Hi {currentUser && currentUser.email}!
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

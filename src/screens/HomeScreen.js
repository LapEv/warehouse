import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../const';

export const HomeScreen = () => {
  const { currentUser } = firebase.auth();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={CONST.MAIN_BACKGROUNDCOLOR}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: CONST.TEXT_COLOR }}>
          Hi {currentUser && currentUser.email}!
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

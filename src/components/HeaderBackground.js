import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../const';

export const HeaderBackground = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={CONST.MAIN_BACKGROUNDCOLOR}
        style={styles.center}
      ></LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontFamily: 'open-bold',
  },
});

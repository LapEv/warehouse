import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../const';

export const NewReceiptScreen = () => {
  // state = { currentUser: null }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={CONST.MAIN_BACKGROUNDCOLOR}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: CONST.TEXT_COLOR }}>New Receipt Screen!</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

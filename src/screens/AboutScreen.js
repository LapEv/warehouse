import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '..//const';

export const AboutScreen = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={CONST.MAIN_BACKGROUNDCOLOR} style={styles.center}>
        <Text style={{ color: CONST.TEXT_COLOR }}>
          Это лучшее приложение для учета складских ценностей
        </Text>
        <Text style={{ color: CONST.TEXT_COLOR }}>
          Версия приложения <Text style={styles.version}>1.0.0</Text>
        </Text>
      </LinearGradient>
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

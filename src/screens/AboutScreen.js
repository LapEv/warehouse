import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '..//const';
import { LabelConstants } from '../labelConstants';
import { CustomHeader } from '../components/CustomHeader';

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title={LabelConstants.headerTitle.about}
        navigation={navigation}
      />
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../const';
import { LabelConstants } from '../labelConstants';
import { CustomHeader } from '../components/CustomHeader';
import { ModalAlert } from '../components/Modal';

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        title={LabelConstants.headerTitle.settings}
        navigation={navigation}
      />
      <LinearGradient
        colors={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <View></View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

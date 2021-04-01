import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../../const';
// import { LabelConstants } from '../labelConstants';
// import { CustomHeader } from '../components/CustomHeader';
// import { CustomTab } from '../components/CustomTab';
// import { TabNavigation } from '../navigation/TabNavigation';

export const NewMovingScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: CONST.THEME.MAIN.TEXT_COLOR }}>
          New Moving Screen!
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

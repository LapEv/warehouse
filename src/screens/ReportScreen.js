import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../parametrs/theme';
import { LabelConstants } from '../labelConstants';
import { CustomHeader } from '../components/CustomHeader';

export const ReportScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        title={LabelConstants.headerTitle.report}
        navigation={navigation}
      />
      <LinearGradient
        colors={THEME.MAIN_THEME.BACKGROUNDCOLOR_LG}
        style={THEME.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: THEME.MAIN_THEME.TEXT_COLOR }}>
          Reports Screen
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

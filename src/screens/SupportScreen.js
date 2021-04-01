import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../const';
import { LabelConstants } from '../labelConstants';
import { CustomHeader } from '../components/CustomHeader';

export const SupportScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        title={LabelConstants.headerTitle.support}
        navigation={navigation}
        screen={route.name}
      />
      <LinearGradient
        colors={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: CONST.THEME.MAIN.TEXT_COLOR }}>
          Support Screen!
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../parametrs/theme';

export const UsersScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={THEME.MAIN_THEME.BACKGROUNDCOLOR_LG}
        style={THEME.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: THEME.MAIN_THEME.TEXT_COLOR }}>User Screen!</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

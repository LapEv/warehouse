import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { THEME } from '../parametrs/theme';
import { LabelConstants } from '../labelConstants';
import { CustomHeader } from '../components/CustomHeader';

export const NotificationsScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <View style={styles.container}>
      <CustomHeader
        title={LabelConstants.headerTitle.notifications}
        navigation={navigation}
      />
      <LinearGradient
        colors={theme.BACKGROUNDCOLOR_LG}
        style={THEME.MAIN_BACKGROUNDSTYLES}
      >
        <Text style={{ color: theme.TEXT_COLOR }}>Notifications Screen!</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

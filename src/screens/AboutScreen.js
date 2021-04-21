import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { THEME } from '..//parametrs/theme';
import { LabelConstants } from '../labelConstants';
import { CustomHeader } from '../components/CustomHeader';

export const AboutScreen = ({ route, navigation }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title={LabelConstants.headerTitle.about}
        navigation={navigation}
        screen={route.name}
      />
      <LinearGradient colors={theme.BACKGROUNDCOLOR_LG} style={styles.center}>
        <Text style={{ color: theme.TEXT_COLOR }}>
          Это лучшее приложение для учета складских ценностей
        </Text>
        <Text style={{ color: theme.TEXT_COLOR }}>
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

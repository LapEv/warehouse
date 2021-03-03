import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { CONST } from '../const';

export const CustomDrawer = ({ filteredProps }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ width: '100%' }}
        colors={CONST.MAIN_BACKGROUNDCOLOR}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        <DrawerContentScrollView
          {...filteredProps}
          style={{ width: '100%', marginTop: 40 }}
        >
          <DrawerItemList {...filteredProps} />
        </DrawerContentScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

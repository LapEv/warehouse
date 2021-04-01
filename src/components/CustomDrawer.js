import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { CONST } from '../const';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CustomDrawer = ({ filteredProps }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ width: '100%' }}
        colors={CONST.THEME.MAIN.BACKGROUNDCOLOR_LG}
        style={CONST.MAIN_BACKGROUNDSTYLES}
      >
        {CONST.isLogged ? (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 50,
            }}
            onPress={() => filteredProps.navigation.navigate('Profile')}
          >
            <Image
              source={require('../../assets/profile2.png')}
              style={{ height: 80, width: 80 }}
            />
            <Text style={styles.profileText}>{CONST.profileName}</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <DrawerContentScrollView {...filteredProps} style={{ width: '100%' }}>
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
  profileText: {
    paddingTop: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'open-bold',
  },
});

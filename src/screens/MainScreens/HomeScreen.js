import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { SECURITY } from '../../parametrs/security';
import { THEME } from '../../parametrs/theme';
import { PinCodeSettings } from '../../store/actions/security';

export const HomeScreen = () => {
  const { currentUser } = firebase.auth();

  const isLogged = useSelector((state) => state.pinCode.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    !isLogged ? dispatch(PinCodeSettings({ isLogged: true })) : '';
  }, [dispatch]);

  const theme = useSelector((state) => state.theme);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.BACKGROUNDCOLOR_LG}
        style={THEME.MAIN_BACKGROUNDSTYLES}
      >
        <View style={styles.screen}>
          <Text style={{ color: theme.TEXT_COLOR }}>
            Hi {currentUser && currentUser.email}!
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

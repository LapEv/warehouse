import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { CONST } from '../const'

export const HomeScreen = () => {
  // state = { currentUser: null }
  
  const { currentUser } = firebase.auth()

  return (
    <View style={styles.container}>
      <LinearGradient colors={CONST.MAIN_BACKGROUNDCOLOR} style={CONST.MAIN_BACKGROUNDSTYLES}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
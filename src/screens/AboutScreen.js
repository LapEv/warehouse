import React from 'react'
import { DrawerActions } from '@react-navigation/native';
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import { Item, HeaderButtons } from "react-navigation-header-buttons"
import { View, Text, StyleSheet } from 'react-native'

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Это лучшее приложение для учета складских ценностей</Text>
            <Text>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}

AboutScreen.navigationOption = ({navigation}) => {
    console.log('AboutScreenOption')
    return  {
        headerTitle: 'О приложении',
        headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
            title="Toggle Drawer" 
            iconName="ios-menu" 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
            />
        </HeaderButtons>
        )
    }
}
  
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    version: {
        fontFamily: 'open-bold'
    }
})
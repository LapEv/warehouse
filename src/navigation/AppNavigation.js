import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '..//components/CustomDrawer';
import { Main } from '../navigation/MainNavigation';
import { About } from '..//navigation/AboutNavigation';
import { Login } from '..//navigation/LoginNavigation';
import { CONST } from '../const';
import { Ionicons, Entypo } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerPosition="left"
        drawerStyle={{
          width: Dimensions.get('window').width * (CONST.ratioScreen / 100),
        }}
        drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter((routeName) => {
                routeName !== 'Main';
              }),
              routes: props.state.routes.filter(
                (route) => route.name !== 'Main'
              ),
            },
          };
          return <CustomDrawer filteredProps={filteredProps} />;
        }}
        drawerContentOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          activeBackgroundColor: '#30cfd0',
          itemStyle: {
            marginTop: 30,
          },
          labelStyle: { fontFamily: 'open-bold', fontSize: 17 },
        }}
      >
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: () => <Entypo name="login" size={30} color={'#fff'} />,
            title: 'Авторизация',
          }}
        />
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{ title: 'Главная' }}
          backBehavior="none"
          hideStatusBar="true"
          // options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="О приложении"
          component={About}
          hideStatusBar="true"
          options={{
            drawerIcon: () => <Ionicons name="book" size={30} color={'#fff'} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

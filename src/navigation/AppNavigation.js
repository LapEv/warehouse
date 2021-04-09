import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, BackHandler, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '..//components/CustomDrawer';
import { Main } from '../navigation/MainNavigation';
import { AboutScreen } from '../screens/AboutScreen';
import { Login } from '..//navigation/LoginNavigation';
import { SupportScreen } from '../screens/SupportScreen';
import { CONST } from '../const';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { ModalAlert } from '../components/Modal';
import { modalShow } from '../store/actions/modal';

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  const pinCodeSettings = useSelector((state) => state.pinCode);

  const navigationRef = React.createRef();
  let currentRouteName,
    historyglobal,
    historylocal = 0;

  const onStateChange = () => {
    if (!navigationRef) return;
    historyglobal = navigationRef.current.getRootState().history.length;
    historylocal = navigationRef.current
      .getRootState()
      .routes[navigationRef.current.getRootState().index].hasOwnProperty(
        'state'
      )
      ? navigationRef.current
          .getRootState()
          .routes[
            navigationRef.current.getRootState().index
          ].state.hasOwnProperty('history')
      : 0
      ? navigationRef.current.getRootState().routes[
          navigationRef.current.getRootState().index
        ].state.history.length
      : 0;
    currentRouteName = navigationRef.current.getCurrentRoute().name;
  };

  const dispatch = useDispatch();

  const backAction = () => {
    if (
      (historyglobal >= 1 && currentRouteName === 'LoginScreen') ||
      (historyglobal >= 2 &&
        historylocal &&
        currentRouteName === 'HomeScreen') ||
      (!historylocal && currentRouteName === 'PinCodeScreen')
    ) {
      const modalInfo = {
        show: true,
        title: 'Внимание',
        message: 'Вы действительно хотите выйте из приложения?',
        buttonCancel: 'Нет',
        buttonYes: 'Да',
      };
      dispatch(modalShow(modalInfo));
    } else {
      navigationRef.current.goBack();
      navigationRef.current.setParams({ action: 'goback' });
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <View>
        <ModalAlert />
      </View>
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
            title: pinCodeSettings.isLogged ? 'Пин код' : 'Авторизация',
          }}
        />
        <Drawer.Screen
          name="Support"
          component={SupportScreen}
          hideStatusBar="true"
          options={{
            drawerIcon: () => (
              <MaterialIcons name="email" size={30} color={'#fff'} />
            ),
            title: 'Написать в поддержку',
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          hideStatusBar="true"
          options={{
            drawerIcon: () => <Ionicons name="book" size={30} color={'#fff'} />,
            title: 'О приложении',
          }}
        />
        <Drawer.Screen
          name="Main"
          component={Main}
          // options={(props) => AppOptions(props)}
          backBehavior="none"
          hideStatusBar="true"
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

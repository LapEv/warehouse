export const CONST = {
  ratioScreen: 85,
  use_PIN_CODE: true, // передать в пользовательские настройки
  use_fingerprint: true, // передать в пользовательские настройки
  supportFingerPrint: false,
  KeychainName: 'Ware0809House',
  // PIN_CODE_status: 'choose', // использовать с БД
  PIN_CODE_status: 'enter', // использовать с БД
  isLogged: false,
  profileName: 'User',
  THEME: {
    MAIN: {
      BACKGROUNDCOLOR_LG: ['#30cfd0', '#146185', '#30cfd0'],
      BACKGROUNDCOLOR: '#30cfd0',
      TEXT_COLOR: 'white',
      DANGER_COLOR: '#d81b60',
    },
    LIGHT: {
      BACKGROUNDCOLOR_LG: ['#30cfd0', '#146185', '#30cfd0'],
      BACKGROUNDCOLOR: '#30cfd0',
      TEXT_COLOR: 'black',
      DANGER_COLOR: '#d81b60',
    },
    DARK: {
      BACKGROUNDCOLOR_LG: ['#30cfd0', '#146185', '#30cfd0'],
      BACKGROUNDCOLOR: '#30cfd0',
      TEXT_COLOR: 'white',
      DANGER_COLOR: '#d81b60',
    },
  },
  MAIN_BUTTONS_BORDERRADIUS: 25,
  MAIN_BACKGROUNDSTYLES: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SHADOW_FOR_IOS: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  SCREEN_OPTIONS: {
    headerStyle: {
      backgroundColor: '#30cfd0',
    },
    headerTintColor: '#fff',
  },
  HEADER_OPTIONS: {
    mainBackground: false,
    drawerIcon: 'menu',
    settingsIcon: 'md-settings-sharp',
    notificationsIcon: 'notifications',
    home: 'home',
    newmoving: 'clipboard-arrow-right-outline',
    newreceipt: 'library-add',
    database: 'database',
    report: 'pie-chart',
    back: 'arrow-back-ios',
    backgroundColor: ['#30cfd0', '#146185'],
  },
  firebaseConfig: {
    apiKey: 'AIzaSyAvYSioiBQ-_r85JpC5qriziK95MMfgM0A',
    authDomain: 'warehouse-6b821.firebaseapp.com',
    databaseURL: 'https://warehouse-6b821-default-rtdb.firebaseio.com',
    projectId: 'warehouse-6b821',
    storageBucket: 'warehouse-6b821.appspot.com',
    messagingSenderId: '161171585310',
    appId: '1:161171585310:web:a5dfa1c17a68e5efb4f10f',
    measurementId: 'G-Y8SZ338KVW',
  },
};

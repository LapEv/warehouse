export const CONST = {
  use_PIN_CODE: true,  // передать в пользовательские настройки
  use_fingerprint : true, // передать в пользовательские настройки 
  supportFingerPrint: false,
  // requiredInstallPIN_CODE: true,
  MAIN_BACKGROUNDCOLOR: ['#30cfd0', '#146185', '#30cfd0'],
  MAIN_BUTTONS_BORDERRADIUS: 25,
  MAIN_BACKGROUNDSTYLES: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    height: "100%",
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TEXT_COLOR : 'white',
  DANGER_COLOR: '#d81b60',
  SCREEN_OPTIONS: {
    gestureEnabled: false,
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' 
    //     ? '#0e4a75' : "#fff"
    // },
    headerStyle: {
      backgroundColor: '#0e4a75'
    },
    headerTintColor: '#fff'
    // headerTintColor: Platform.OS === 'android' 
    // ? "#fff" : ['#146185', '#30cfd0']
  },
  // firebaseConfig : {
  //   apiKey: 'AIzaSyAvYSioiBQ-_r85JpC5qriziK95MMfgM0A',
  //   authDomain: 'warehouse-6b821.firebaseapp.com',
  //   databaseURL: 'https://warehouse-6b821.firebaseio.com',
  //   projectId: 'warehouse-6b821',
  //   storageBucket: 'warehouse-6b821.appspot.com',
  //   messagingSenderId: 'sender-id',
  //   appId: '161171585310',
  //   measurementId: 'G-measurement-id',
  // },
  firebaseConfig : {
    apiKey: "AIzaSyAvYSioiBQ-_r85JpC5qriziK95MMfgM0A",
    authDomain: "warehouse-6b821.firebaseapp.com",
    databaseURL: "https://warehouse-6b821-default-rtdb.firebaseio.com",
    projectId: "warehouse-6b821",
    storageBucket: "warehouse-6b821.appspot.com",
    messagingSenderId: "161171585310",
    appId: "1:161171585310:web:a5dfa1c17a68e5efb4f10f",
    measurementId: "G-Y8SZ338KVW"
  },
}
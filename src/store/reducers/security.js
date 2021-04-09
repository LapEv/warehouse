import { PIN_CODE } from '../types';
import { SECURITY } from '../../parametrs/security';

const initialState = {
  use_PinCode: false,
  statusPinCode: '',
  use_FingerPrint: false,
  isLogged: false,
  pinCodeChangeActive: false,
};

export const pinCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case PIN_CODE:
      // console.log(
      //   'Reducer: action.payload.use_FingerPrint = ',
      //   action.payload.use_FingerPrint
      // );
      // console.log(
      //   'Reducer: SECURITY.use_FingerPrint.value = ',
      //   SECURITY.use_FingerPrint.value
      // );
      if (action.payload.use_PinCode !== undefined) {
        SECURITY.use_PinCode.value = action.payload.use_PinCode;
      }
      if (action.payload.use_FingerPrint !== undefined) {
        SECURITY.use_FingerPrint.value = action.payload.use_FingerPrint;
      }
      // console.log(
      //   'Reducer: SECURITY.use_FingerPrint.value = ',
      //   SECURITY.use_FingerPrint.value
      // );

      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

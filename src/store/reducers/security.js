import { PIN_CODE } from '../types';
import { SECURITY } from '../../parametrs/security';

const initialState = {
  use_PinCode: false,
  statusPinCode: '',
  support_FingerPrint: true,
  use_FingerPrint: false,
  isLogged: false,
  pinCodeChangeActive: false,
};

export const pinCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case PIN_CODE:
      if (action.payload.use_PinCode !== undefined) {
        SECURITY.use_PinCode.value = action.payload.use_PinCode;
      }
      if (action.payload.use_FingerPrint !== undefined) {
        SECURITY.use_FingerPrint.value = action.payload.use_FingerPrint;
      }
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

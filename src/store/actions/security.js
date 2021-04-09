import { PIN_CODE } from '../types';

export const PinCodeSettings = (pincode) => {
  return async (dispatch) => {
    dispatch({
      type: PIN_CODE,
      payload: pincode,
    });
  };
};

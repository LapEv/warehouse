import { MODAL_SHOW } from '../types';

const initialState = {
  show: false,
  title: '',
  message: '',
  buttonCancel: '',
  buttonYes: '',
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        show: action.payload.show,
        title: action.payload.title,
        message: action.payload.message,
        buttonCancel: action.payload.buttonCancel,
        buttonYes: action.payload.buttonYes,
      };
    default:
      return state;
  }
};

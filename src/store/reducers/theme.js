import { THEME_MAIN, THEME_DARK, THEME_LIGHT } from '../types';

const initialState = {};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_MAIN:
      return {
        ...state,
        // show: action.payload.show,
        // title: action.payload.title,
        // message: action.payload.message,
        // buttonCancel: action.payload.buttonCancel,
        // buttonYes: action.payload.buttonYes,
      };
    case THEME_DARK:
      return {
        ...state,
        // show: action.payload.show,
        // title: action.payload.title,
        // message: action.payload.message,
        // buttonCancel: action.payload.buttonCancel,
        // buttonYes: action.payload.buttonYes,
      };
    case THEME_LIGHT:
      return {
        ...state,
        // show: action.payload.show,
        // title: action.payload.title,
        // message: action.payload.message,
        // buttonCancel: action.payload.buttonCancel,
        // buttonYes: action.payload.buttonYes,
      };
    default:
      return state;
  }
};

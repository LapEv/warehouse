import { THEME_CURRENT } from '../types';
import { THEME } from '../../parametrs/theme';

const initialState = THEME.MAIN_THEME;

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CURRENT:
      if (action.payload.name) {
        THEME.currentTheme = action.payload.name;
      }
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

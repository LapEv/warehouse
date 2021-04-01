import { THEME_MAIN, THEME_DARK, THEME_LIGHT } from '../types';

export const theme = (theme) => {
  // return (dispatch) => {
  //   dispatch({
  //     type: MODAL_SHOW,
  //     payload: modalInfo,
  //   });
  // };
  return {
    type: THEME,
    payload: theme,
  };
};

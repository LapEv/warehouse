import { MODAL_SHOW } from '../types';

export const modalShow = (modalInfo) => {
  // return (dispatch) => {
  //   dispatch({
  //     type: MODAL_SHOW,
  //     payload: modalInfo,
  //   });
  // };
  return {
    type: MODAL_SHOW,
    payload: modalInfo,
  };
};

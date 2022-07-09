import localTypes from "./local.types";
export const saveUser = () => async (dispatch) => {
  dispatch({
    type: localTypes.SAVE_USER,
    payload: true,
  });
};

export const removeUser = () => async (dispatch) => {
  dispatch({
    type: localTypes.REMOVE_USER,
    payload: false,
  });
};

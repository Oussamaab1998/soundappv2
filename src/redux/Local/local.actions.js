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
export const makeUserPremium = () => async (dispatch) => {
  dispatch({
    type: localTypes.MAKE_USER_PREMIUM,
  });
};
export const restorePurchase = () => async (dispatch) => {
  dispatch({
    type: localTypes.RESTORE_PURCHASE,
  });
};
export const saveUerData = () => async (dispatch) => {
  dispatch({
    type: localTypes.SAVE_USER_DATA,
    payload: false,
  });
};

export const storeUserId = (ourIds, myEmail) => async (dispatch) => {
  console.log("ourIds", ourIds);
  ourIds.data.forEach((item) => {
    if (item.email === myEmail) {
      dispatch({
        type: localTypes.STORE_USER_ID,
        payload: item.id,
      });
      console.log("item =>", item.id);
    }
  });
};

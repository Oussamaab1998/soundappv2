import localTypes from "./local.types";

const INITIAL_STATE = {
  isLoggedIn: false,
  userData: undefined,
  isUserPremium: false,
  myUserId: null,
};

const localReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case localTypes.MAKE_USER_PREMIUM:
      return {
        ...state,
        isUserPremium: true,
      };
    case localTypes.STORE_USER_ID:
      return {
        ...state,
        myUserId: action.payload,
      };
    case localTypes.RESTORE_PURCHASE:
      return {
        ...state,
        isUserPremium: false,
      };
    case localTypes.SAVE_USER:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case localTypes.REMOVE_USER:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case localTypes.SAVE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default localReducer;

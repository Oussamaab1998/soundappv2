import localTypes from "./local.types";

const INITIAL_STATE = {
  isLoggedIn: false,
  userData:undefined,
};

const localReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

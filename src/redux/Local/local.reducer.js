import localTypes from "./local.types";

const INITIAL_STATE = {
  isLoggedIn: false,
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

    default:
      return state;
  }
};

export default localReducer;

import userTypes from "./user.types";

const INITIAL_STATE = {
  currentProperty: null,
  propertySignInSuccess: false,
  propertySignUpSuccess: false,
  propertyRecoverySuccess: false,
  // Fetch
  fetchUserD: null,
  // Errors
  errors: [],
  userData:undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case userTypes.USER_HAVE_TOKEN:
      return {
        ...state,
        propertySignInSuccess: action.payload,
        currentProperty: true,
      };
    case userTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: [],
      };
    case userTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        propertySignInSuccess: action.payload,
        currentProperty: true,
      };
    case userTypes.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        propertySignUpSuccess: action.payload,
        currentProperty: true,
      };
    case userTypes.USER_RECOVERY_SUCCESS:
      return {
        ...state,
        propertyRecoverySuccess: action.payload,
      };

    case userTypes.SAVE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    // PROPERTY
    case userTypes.OUT_CURRENT_USER:
      return {
        ...INITIAL_STATE,
      };
    case userTypes.FETCH_USER:
      return {
        ...state,
        fetchUserD: action.payload,
      };

    // ERRORS
    case userTypes.RESET_ERRORSSTATE_FORMS:
      return {
        ...state,
        errors: [],
      };
    case userTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case userTypes.RESET_STATES:
      return {
        currentProperty: null,
        propertySignInSuccess: false,
        propertySignUpSuccess: false,
        propertyRecoverySuccess: false,
        // Fetch
        fetchUserD: null,
        // Errors
        errors: [],
        userData:undefined,

      };
    // DEFAULT
    default:
      return state;
  }
};
export default userReducer;

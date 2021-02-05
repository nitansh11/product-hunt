import * as actionTypes from "./actionTypes";
import { loadData, saveData } from "../../utils";
const initState = {
  isLoggedIn: loadData("isLoggedIn"),
  currentUser: loadData("currentUser"),
  error: false,
  isLoading: false,

  // dont use this user as current user, only use current user which is defined in above line as "currentUser"
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    // login user
    case actionTypes.LOGIN_SUCCESS:
      saveData("isLoggedIn", true);
      saveData("currentUser", action.payload);
      return {
        ...state,
        isLoggedIn: true,
        currentUser: { ...action.payload },
        error: false,
      };

    case actionTypes.LOGIN_FAILURE:
      return { ...state, isLoggedIn: false, error: true };

    //logout user
    case actionTypes.LOGOUT:
      saveData("isLoggedIn", false);
      saveData("currentUser", null);
      return { ...state, isLoggedIn: false, currentUser: null };

    // adding user if does not exist
    case actionTypes.ADD_USER_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.ADD_USER_SUCCESS:
      return { ...state, isLoading: false, error: false };
    case actionTypes.ADD_USER_FAILURE:
      return { ...state, isLoading: false, error: true };

    // get single user
    case actionTypes.GET_USER_BY_EMAIL_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.GET_USER_BY_EMAIL_SUCCESS:
      return { ...state, isLoading: false, user: action.payload, error: false };
    case actionTypes.GET_USER_BY_EMAIL_FAILURE:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export { authReducer };

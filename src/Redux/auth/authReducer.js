import * as actionTypes from "./actionTypes";

const initState = {
  isLoggedIn: false,
  currentUser: null,
  error: false,
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  console.log("action in reducer: ", action);
  switch (action.type) {
    // login user
    case actionTypes.LOGIN_SUCCESS:
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
      return { ...state, isLoggedIn: false, currentUser: null };

    // adding user if does not exist
    case actionTypes.ADD_USER_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.ADD_USER_SUCCESS:
      return { ...state, isLoading: false, error: false };
    case actionTypes.ADD_USER_FAILURE:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export { authReducer };

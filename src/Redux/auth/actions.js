import axios from "axios";
import * as actionTypes from "./actionTypes";

const loginSuccess = (response) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: response.profileObj,
  };
};

const loginFailure = (response) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: response.error,
  };
};

const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

const addUserRequest = () => {
  return {
    type: actionTypes.ADD_USER_REQUEST,
  };
};

const addUserSuccess = () => {
  return {
    type: actionTypes.ADD_USER_SUCCESS,
  };
};

const addUserFailure = () => {
  return {
    type: actionTypes.ADD_USER_FAILURE,
  };
};

const addUser = (currentUser) => {
  return async (dispatch) => {
    dispatch(addUserRequest());
    try {
      const res = await axios.get(
        "https://json-server-nitansh-1.herokuapp.com/users",
        currentUser
      );

      const existingUser = res.data.find((user) => {
        return user.email === currentUser.email;
      });
      console.log("existing user is:", existingUser);
      if (!existingUser) {
        await axios.post(
          "https://json-server-nitansh-1.herokuapp.com/users",
          currentUser
        );
      }
      dispatch(addUserSuccess());
    } catch (err) {
      dispatch(addUserFailure());
    }
  };
};

export { loginSuccess, loginFailure, logout, addUser };


 
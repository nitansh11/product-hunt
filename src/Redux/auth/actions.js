import axios from "axios";
import * as actionTypes from "./actionTypes";
import { postLocalStorage } from "../../utils";
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

//get user by email:
const getUserByEmailRequest = () => {
  return {
    type: actionTypes.GET_USER_BY_EMAIL_REQUEST,
  };
};
const getUserByEmailSuccess = (user) => {
  return {
    type: actionTypes.GET_USER_BY_EMAIL_SUCCESS,
    payload: user,
  };
};

const getUserByEmailFailure = () => {
  return {
    type: actionTypes.GET_USER_BY_EMAIL_FAILURE,
  };
};

const getUserByEmail = (email) => {
  return async (dispatch) => {
    dispatch(getUserByEmailRequest());
    try {
      const res = await axios.get(
        "https://json-server-nitansh-1.herokuapp.com/users"
      );
      const user = res.data.find((user) => user.email === email);
      dispatch(getUserByEmailSuccess(user));
    } catch (err) {
      dispatch(getUserByEmailFailure());
    }
  };
};

export { loginSuccess, loginFailure, logout, addUser, getUserByEmail };

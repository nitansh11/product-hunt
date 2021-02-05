import axios from "axios";
import * as actionTypes from "./actionTypes";

const getJobsRequest = () => {
  return {
    type: actionTypes.GET_MYJOBS_REQUEST,
  };
};

const getJobsSuccess = (myJobs) => {
  return {
    type: actionTypes.GET_MYJOBS_SUCCESS,
    payload: myJobs,
  };
};

const getJobsFailure = () => {
  return {
    type: actionTypes.GET_MYJOBS_FAILURE,
  };
};

const getJobs = () => {
  return async (dispatch) => {
    dispatch(getJobsRequest());
    try {
      const res = await axios.get(
        "https://json-server-nitansh-1.herokuapp.com/myjobs"
      );
      dispatch(getJobsSuccess(res.data));
    } catch (err) {
      dispatch(getJobsFailure());
    }
  };
};

const updateFilteredJobs = (updatedFilteredJobs) => {
  return {
    type: actionTypes.UPDATE_FILTERED_JOBS,
    payload: updatedFilteredJobs,
  };
};

export { getJobs, updateFilteredJobs };

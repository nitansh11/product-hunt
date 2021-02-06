import axios from "axios";
import * as actionTypes from "./actionTypes";

// get jobs
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

// Update filtered jobs

const updateFilteredJobs = (updatedFilteredJobs) => {
  return {
    type: actionTypes.UPDATE_FILTERED_JOBS,
    payload: updatedFilteredJobs,
  };
};

// Post jobs

const postJobsRequest = () => {
  return {
    type: actionTypes.POST_MYJOBS_REQUEST,
  };
};

const postJobsSuccess = () => {
  return {
    type: actionTypes.POST_MYJOBS_SUCCESS,
  };
};

const postJobsFailure = () => {
  return {
    type: actionTypes.POST_MYJOBS_FAILURE,
  };
};

const postJobs = (job) => {
  return async (dispatch) => {
    dispatch(postJobsRequest());
    try {
      const res = await axios.post(
        "https://json-server-nitansh-1.herokuapp.com/myjobs",
        job
      );
      dispatch(getJobs());
      dispatch(postJobsSuccess());
    
    } catch (err) {
      dispatch(postJobsFailure());
    }
  };
};

export { getJobs, updateFilteredJobs, postJobs };

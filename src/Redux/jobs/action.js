import {
    
    GET_JOBS_FAILURE,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS
  } from "./actionTypes";
  import axios from "axios";

  const getjobsRequest = () => {
    return {
      type: GET_JOBS_REQUEST
    };
  };
  
  const getjobsSuccess = (payload) => {
    return {
      type: GET_JOBS_SUCCESS,
      payload:payload
    };
  };
  
  const getjobsFailure = (error) => {
    return {
      type: GET_JOBS_FAILURE,
      payload: {
        error: error
      }
    };
  };
  
  
  
  export const getjobs = (params) => async (dispatch) => {
    const {remote_status}=params
    dispatch(getjobsRequest());
    try {
      let res = await axios.get(
        "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
      ,{
        remote_status:remote_status
      });
      dispatch(getjobsSuccess(res.data));
    //   console.log(res.data)
    } catch (err) {
      dispatch(getjobsFailure(err));
    }
  };
  
  

  
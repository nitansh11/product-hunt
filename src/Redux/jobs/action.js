import {
    
    GET_JOBS_FAILURE,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    REMOTE_FAILURE,
    REMOTE_SUCCESS,
    REMOTE_REQUEST
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
  const remoteRequest = () => {
    return {
      type: REMOTE_REQUEST
    };
  };
  
  const remoteSuccess = (payload) => {
    return {
      type: REMOTE_SUCCESS,
      payload:payload
    };
  };
  
  const remoteFailure = (error) => {
    return {
      type: REMOTE_FAILURE,
      payload: {
        error: error
      }
    };
  };
  
  
  
  export const getjobs = (params) => async (dispatch) => {
    
    dispatch(getjobsRequest());
    try {
      let res = await axios.get(
        "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
      );
      dispatch(getjobsSuccess(res.data));
    } catch (err) {
      dispatch(getjobsFailure(err));
    }
  };
  export const getremote = (params) => async (dispatch) => {
    const {rem,eng,design}=params
    console.log(rem,eng,design)
    dispatch(remoteRequest());
    try {
      let res = await axios.get(
        "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
      );
      let remote_res =  (rem===false)?( res.data.map(item=>{
        return item.remote_status===true ? item  :null
      })):(res.data)
      //  let eng_res = (eng === false && rem===false)?( remote_res.map(item=>{
      //    return item.engineering_status===true ? item  :null
      //  })):( res.data.map(item=>{
      //   return item.engineering_status===true ? item  :null
      // }))
      // let design_res = (design === false)?( eng_res.map(item=>{
      //   return item.design_status===true ? item  :null
      // })):(eng_res)
     
      dispatch(remoteSuccess(remote_res));
      console.log(remote_res)
    } catch (err) {
      dispatch(remoteFailure(err));
    }
  };
 
  

  
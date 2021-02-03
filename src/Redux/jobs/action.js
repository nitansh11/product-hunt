import {
    
    GET_JOBS_FAILURE,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    REMOTE_FAILURE,
    REMOTE_SUCCESS,
    REMOTE_REQUEST,
    ENG_REQUEST,
    ENG_SUCCESS,
    ENG_FAILURE,
    DESIGN_FAILURE,
    DESIGN_REQUEST,
    DESIGN_SUCCESS
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
  
  const engRequest = () => {
    return {
      type: ENG_REQUEST
    };
  };
  
  const engSuccess = (payload) => {
    return {
      type: ENG_SUCCESS,
      payload:payload
    };
  };
  
  const engFailure = (error) => {
    return {
      type: ENG_FAILURE,
      payload: {
        error: error
      }
    };
  };
  const designRequest = () => {
    return {
      type: DESIGN_REQUEST
    };
  };
  
  const designSuccess = (payload) => {
    return {
      type: DESIGN_SUCCESS,
      payload:payload
    };
  };
  
  const designFailure = (error) => {
    return {
      type: DESIGN_FAILURE,
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
    const {rem}=params
    console.log(rem)
    dispatch(remoteRequest());
    try {
      let res = await axios.get(
        "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
      );
     let final = res.data
     if(rem===false)
     {
         final = final.map(item=>{
           return item.remote_status===true? item : null
         })
     }
     if(rem===true)
     {
       final = final.map(item=>{
         return  item
       })
     }
     console.log("rem",final)
    
      dispatch(remoteSuccess(final));
      console.log(final)
    } catch (err) {
      dispatch(remoteFailure(err));
    }
  };
 
  export const geteng = (params) => async (dispatch) => {
    const {eng}=params
    console.log(eng)
    dispatch(engRequest());
    try {
      let res = await axios.get(
        "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
      );
     let final = res.data
     if(eng===false)
     {
         final = final.map(item=>{
           return item.engineering_status===true? item : null
         })
     }
     if(eng===true)
     {
       final = final.map(item=>{
         return  item
       })
     }
     console.log("eng",final)
    
      dispatch(engSuccess(final));
      console.log(final)
    } catch (err) {
      dispatch(engFailure(err));
    }
  };
  export const getdesign = (params) => async (dispatch) => {
    const {rem,eng,design,marketing,sales,customer,product}=params
    console.log(rem,eng,design,marketing,sales,customer,product)
    dispatch(designRequest());
    try {
      let res = await axios.get(
        "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
      );
     let final = res.data
     let finaldata=[]
    final.map(item=>{
      return item.remote_status===rem && item.engineering_status===eng && item.design_status === design && item.product_status===product && item.marketing_status===marketing && item.sales_status===sales && item.customer_status===customer ?item : null
    })
     console.log("design",final)
    
      dispatch(designSuccess(final));
      console.log(final)
    } catch (err) {
      dispatch(designFailure(err));
    }
  };
 


  
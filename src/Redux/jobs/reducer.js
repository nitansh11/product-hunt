import {
    
    GET_JOBS_FAILURE,
    GET_JOBS_REQUEST,
    GET_JOBS_SUCCESS,
    REMOTE_FAILURE,
    REMOTE_SUCCESS,
    REMOTE_REQUEST
  } from "./actionTypes";
  const initState = {
    jobs: [],
    isLoading: true,
    isError: false
  };
  const jobsreducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_JOBS_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      }
      case GET_JOBS_SUCCESS: {
        return {
          ...state,
          jobs: payload,
          isLoading: false
        };
      }
      case GET_JOBS_FAILURE: {
        return {
          ...state,
          isError: true,
          isLoading: false
        };
      }
      case REMOTE_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      }
      case REMOTE_SUCCESS: {
        return {
          ...state,
          jobs: payload,
          isLoading: false
        };
      }
      case REMOTE_FAILURE: {
        return {
          ...state,
          isError: true,
          isLoading: false
        };
      
      }
      default:
        return state;
    }
  };

  
  export { jobsreducer};
  
import * as actionTypes from "./actionTypes";

const initState = {
  myJobs: [],
  filteredJobs: [],
  error: false,
  loading: false,
};

const myJobsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_MYJOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.GET_MYJOBS_SUCCESS:
      return {
        ...state,
        myJobs: action.payload,
        filteredJobs: action.payload,
        loading: false,
        error: false,
      };
    case actionTypes.GET_MYJOBS_FAILURE:
      return { ...state, error: true, loading: false };

    case actionTypes.UPDATE_FILTERED_JOBS:
      return {
        ...state,
        filteredJobs: action.payload,
      };
    default:
      return state;
  }
};

export { myJobsReducer };

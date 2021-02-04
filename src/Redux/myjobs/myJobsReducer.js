import * as actionTypes from "./actionTypes";

const initState = {
  myjobs: [],
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
      return { ...state, myjobs: action.payload, loading: false, error: false };
    case actionTypes.GET_MYJOBS_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export { myJobsReducer };

import * as actionTypes from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  askQuestions: [],
};

const askReducer = (state = initState, action) => {
  switch (action.type) {
    // getting ask questions
    case actionTypes.GET_ASK_QUESTIONS_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.GET_ASK_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        askQuestions: action.payload,
      };
    case actionTypes.GET_ASK_QUESTIONS_FAILURE:
      return { ...state, isLoading: false, error: true };

    // updating recommendation
    case actionTypes.UPDATE_RECOMMENDATION_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.UPDATE_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case actionTypes.UPDATE_RECOMMENDATION_FAILURE:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export { askReducer };

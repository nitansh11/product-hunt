import * as actionTypes from "./actionTypes";

const initState = {
  isLoading: false,
  error: false,
  askQuestions: [],
  allProducts: [],
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

    // post comment
    case actionTypes.POST_ASK_QUESTION_COMMENT_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.POST_ASK_QUESTION_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case actionTypes.POST_ASK_QUESTION_COMMENT_FAILURE:
      return { ...state, isLoading: false, error: true };

    // post questions
    case actionTypes.POST_ASK_QUESTIONS_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.POST_ASK_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case actionTypes.POST_ASK_QUESTIONS_FAILURE:
      return { ...state, isLoading: false, error: true };

    // getting products
    case actionTypes.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: false };
    case actionTypes.GET_PRODUCTS_SUCCESS:
    
      return {
        ...state,
        isLoading: false,
        error: false,
        allProducts: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: true };

    default:
      return state;
  }
};

export { askReducer };

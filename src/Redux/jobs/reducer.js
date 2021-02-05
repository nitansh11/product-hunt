import {
  GET_JOBS_FAILURE,
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  REMOTE_FAILURE,
  REMOTE_SUCCESS,
  REMOTE_REQUEST,
  ENG_FAILURE,
  ENG_SUCCESS,
  ENG_REQUEST,
  DESIGN_REQUEST,
  DESIGN_SUCCESS,
  DESIGN_FAILURE,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  CUSTOMER_FAILURE,
  CUSTOMER_REQUEST,
  CUSTOMER_SUCCESS,
  SALES_FAILURE,
  SALES_REQUEST,
  SALES_SUCCESS,
  MARKETING_FAILURE,
  MARKETING_REQUEST,
  MARKETING_SUCCESS,
} from "./actionTypes";
const initState = {
  jobs: [],
  isLoading: true,
  isError: false,
};
const jobsreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_JOBS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_JOBS_SUCCESS: {
      return {
        ...state,
        jobs: payload,
        isLoading: false,
      };
    }
    case GET_JOBS_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case REMOTE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case REMOTE_SUCCESS: {
      return {
        ...state,
        jobs: payload,
        isLoading: false,
      };
    }
    case REMOTE_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case ENG_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ENG_SUCCESS: {
      return {
        ...state,
        // jobs: [...state.jobs,payload],
        jobs: payload,
        isLoading: false,
      };
    }
    case ENG_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case DESIGN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DESIGN_SUCCESS: {
      return {
        ...state,
        jobs: payload,
        isLoading: false,
      };
    }
    case DESIGN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        jobs: payload,
        isLoading: false,
      };
    }
    case PRODUCT_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case CUSTOMER_SUCCESS: {
      return {
        ...state,
        jobs: payload,
        isLoading: false,
      };
    }
    case CUSTOMER_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case SALES_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SALES_SUCCESS: {
      return {
        ...state,
        jobs: payload,
        isLoading: false,
      };
    }
    case SALES_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case MARKETING_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case MARKETING_SUCCESS: {
      return {
        ...state,
        jobs: payload,
        isLoading: false,
      };
    }
    case MARKETING_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export { jobsreducer };

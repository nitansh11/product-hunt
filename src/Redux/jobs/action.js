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
  DESIGN_SUCCESS,
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
import axios from "axios";

const getjobsRequest = () => {
  return {
    type: GET_JOBS_REQUEST,
  };
};

const getjobsSuccess = (payload) => {
  return {
    type: GET_JOBS_SUCCESS,
    payload: payload,
  };
};

const getjobsFailure = (error) => {
  return {
    type: GET_JOBS_FAILURE,
    payload: {
      error: error,
    },
  };
};
const remoteRequest = () => {
  return {
    type: REMOTE_REQUEST,
  };
};

const remoteSuccess = (payload) => {
  return {
    type: REMOTE_SUCCESS,
    payload: payload,
  };
};

const remoteFailure = (error) => {
  return {
    type: REMOTE_FAILURE,
    payload: {
      error: error,
    },
  };
};

const engRequest = () => {
  return {
    type: ENG_REQUEST,
  };
};

const engSuccess = (payload) => {
  return {
    type: ENG_SUCCESS,
    payload: payload,
  };
};

const engFailure = (error) => {
  return {
    type: ENG_FAILURE,
    payload: {
      error: error,
    },
  };
};
const designRequest = () => {
  return {
    type: DESIGN_REQUEST,
  };
};

const designSuccess = (payload) => {
  return {
    type: DESIGN_SUCCESS,
    payload: payload,
  };
};

const designFailure = (error) => {
  return {
    type: DESIGN_FAILURE,
    payload: {
      error: error,
    },
  };
};
const productRequest = () => {
  return {
    type: PRODUCT_REQUEST,
  };
};

const productSuccess = (payload) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: payload,
  };
};

const productFailure = (error) => {
  return {
    type: PRODUCT_FAILURE,
    payload: {
      error: error,
    },
  };
};
const customerRequest = () => {
  return {
    type: CUSTOMER_REQUEST,
  };
};

const customerSuccess = (payload) => {
  return {
    type: CUSTOMER_SUCCESS,
    payload: payload,
  };
};

const customerFailure = (error) => {
  return {
    type: CUSTOMER_FAILURE,
    payload: {
      error: error,
    },
  };
};
const marketingRequest = () => {
  return {
    type: MARKETING_REQUEST,
  };
};

const marketingSuccess = (payload) => {
  return {
    type: MARKETING_SUCCESS,
    payload: payload,
  };
};

const marketingFailure = (error) => {
  return {
    type: MARKETING_FAILURE,
    payload: {
      error: error,
    },
  };
};
const salesRequest = () => {
  return {
    type: SALES_REQUEST,
  };
};

const salesSuccess = (payload) => {
  return {
    type: SALES_SUCCESS,
    payload: payload,
  };
};

const salesFailure = (error) => {
  return {
    type: SALES_FAILURE,
    payload: {
      error: error,
    },
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
  const { rem } = params;
  console.log(rem);
  dispatch(remoteRequest());
  try {
    let res = await axios.get(
      "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
    );
    let final = res.data;
    if (rem === false) {
      final = final.map((item) => {
        return item.remote_status === true ? item : null;
      });
    }
    if (rem === true) {
      final = final.map((item) => {
        return item;
      });
    }
    console.log("rem", final);

    dispatch(remoteSuccess(final));
    console.log(final);
  } catch (err) {
    dispatch(remoteFailure(err));
  }
};

export const geteng = (params) => async (dispatch) => {
  const { eng, rem } = params;
  console.log(eng,rem);
  dispatch(engRequest());
  try {
    let res = await axios.get(
      "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
    );
    let final = res.data;
    // if (eng === false && rem === false) {
    //   final = final.map((item) => {
    //     return item.engineering_status === true && item.remote_status === true
    //       ? item
    //       : null;
    //   });
    // }
    if (eng === false && rem === true) {
      final = final.map((item) => {
        return item.engineering_status === true && item.remote_status === true
          ? item
          : null;
      });
    }
    // if (eng === true && rem===true) {
    //   final = final.map((item) => {
    //     return item.remote_status === true
          
    //   });
    // }
    if (eng === true && rem===false) {
      final = final.map((item) => {
        return item.remote_status === true
          ? item
          : null;
      });
    }
    console.log("eng", final);

    dispatch(engSuccess(final));
    console.log(final);
  } catch (err) {
    dispatch(engFailure(err));
  }
};
export const getdesign = (params) => async (dispatch) => {
  const { design, rem } = params;
  console.log(design,rem);
  dispatch(designRequest());
  try {
    let res = await axios.get(
      "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
    );
    let final = res.data;
    if (design === false) {
      final = final.map((item) => {
        return item.design_status === true && item.remote_status === rem
          ? item
          : null;
      });
    }
    if (design === true) {
      final = final.map((item) => {
        return item.remote_status === rem ? item : null;
      });
    }
    console.log("design", final);

    dispatch(designSuccess(final));
    console.log(final);
  } catch (err) {
    dispatch(designFailure(err));
  }
};

export const getproduct = (params) => async (dispatch) => {
  const { product, rem } = params;
  console.log(product);
  dispatch(productRequest());
  try {
    let res = await axios.get(
      "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
    );
    let final = res.data;
    if (product === false) {
      final = final.map((item) => {
        return item.product_status === true && item.remote_status === rem
          ? item
          : null;
      });
    }
    if (product === true) {
      final = final.map((item) => {
        return item.remote_status === rem ? item : null;
      });
    }
    console.log("product", final);

    dispatch(productSuccess(final));
    console.log(final);
  } catch (err) {
    dispatch(productFailure(err));
  }
};

export const getcustomer = (params) => async (dispatch) => {
  const { customer, rem } = params;
  console.log(customer);
  dispatch(customerRequest());
  try {
    let res = await axios.get(
      "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
    );
    let final = res.data;
    if (customer === false) {
      final = final.map((item) => {
        return item.customer_status === true && item.remote_status === rem
          ? item
          : null;
      });
    }
    if (customer === true) {
      final = final.map((item) => {
        return item.remote_status === rem ? item : null;
      });
    }
    console.log("customer", final);

    dispatch(customerSuccess(final));
    console.log(final);
  } catch (err) {
    dispatch(customerFailure(err));
  }
};
export const getmarketing = (params) => async (dispatch) => {
  const { marketing, rem } = params;
  console.log(marketing);
  dispatch(marketingRequest());
  try {
    let res = await axios.get(
      "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
    );
    let final = res.data;
    if (marketing === false) {
      final = final.map((item) => {
        return item.marketing_status === true && item.remote_status === rem
          ? item
          : null;
      });
    }
    if (marketing === true) {
      final = final.map((item) => {
        return item.remote_status === rem ? item : null;
      });
    }
    console.log("marketing", final);

    dispatch(marketingSuccess(final));
    console.log(final);
  } catch (err) {
    dispatch(marketingFailure(err));
  }
};
export const getsales = (params) => async (dispatch) => {
  const { sales, rem } = params;
  console.log(sales);
  dispatch(salesRequest());
  try {
    let res = await axios.get(
      "https://json-server-mocker-masai-gopi.herokuapp.com/jobs"
    );
    let final = res.data;
    if (sales === false) {
      final = final.map((item) => {
        return item.sales_status === true && item.remote_status === rem
          ? item
          : null;
      });
    }
    if (sales === true) {
      final = final.map((item) => {
        return item.remote_status === rem ? item : null;
      });
    }
    console.log("sales", final);

    dispatch(salesSuccess(final));
    console.log(final);
  } catch (err) {
    dispatch(salesFailure(err));
  }
};

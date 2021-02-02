import axios from 'axios'
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from './actionTypes'


const getProductsRequest = () => {
    return {
        type : GET_PRODUCTS_REQUEST
    }
}

const getProductsSuccess = (data) => {
    return {
        type : GET_PRODUCTS_SUCCESS,
        data : data,
    }
}

const getProductsFailure = () => {
    return {
        type : GET_PRODUCTS_FAILURE
    }
}


export const getProducts = (params = {}) => (dispatch) => {
    dispatch(getProductsRequest())
    return  axios.get("https://resto-details.herokuapp.com/product",{
        params : params
    })
    .then(res => dispatch(getProductsSuccess(res.data)))
    .catch(err => dispatch(getProductsFailure()))
}

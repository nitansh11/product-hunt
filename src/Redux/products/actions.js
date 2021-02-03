import axios from 'axios'
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_SOLO_REQUEST,
    GET_SOLO_SUCCESS,   
    GET_SOLO_FAILURE,
   
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
    return  axios.get("https://product-hunt-mocker.herokuapp.com/product",{
        params : params
    })
    .then(res => dispatch(getProductsSuccess(res.data)))
    .catch(err => dispatch(getProductsFailure()))
}



const getSoloRequest = () => {
    return {
        type : GET_SOLO_REQUEST
    }
}

const getSoloSuccess = (data) => {
    return {
        type : GET_SOLO_SUCCESS,
        data : data,
    }
}

const getSoloFailure = () => {
    return {
        type : GET_SOLO_FAILURE
    }
}


export const getSoloProduct = (id) => (dispatch) => {
    dispatch(getSoloRequest())
    return  axios.get(`https://product-hunt-mocker.herokuapp.com/product/${id}`)
    .then(res => dispatch(getSoloSuccess(res.data)))
    .catch(err => dispatch(getSoloFailure()))
}


 

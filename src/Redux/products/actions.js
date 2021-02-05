import axios from 'axios'
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_SOLO_REQUEST,
    GET_SOLO_SUCCESS,   
    GET_SOLO_FAILURE,
    GET_RELATED_PRODUCTS_REQUEST, 
    GET_RELATED_PRODUCTS_SUCCESS,  
    GET_RELATED_PRODUCTS_FAILURE,
    GET_UPCOMING_REQUEST,
    GET_UPCOMING_SUCCESS,
    GET_UPCOMING_FAILURE,
    GET_BEST_REQUEST,
    GET_BEST_SUCCESS,
    GET_BEST_FAILURE,
    GET_OLDER_REQUEST,
    GET_OLDER_SUCCESS,
    GET_OLDER_FAILURE,
    GET_ALL_PRODUCTS
   
} from './actionTypes'

const getAllProducts = (allData) =>{
    return{
        type : GET_ALL_PRODUCTS,
        allData
    }
}

export const getALLProductsData = () => dispatch => {
    return axios.get("https://product-hunt-mocker.herokuapp.com/product")
    .then(res => dispatch(getAllProducts(res.data)))
}



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
    .then((res) => {
        dispatch(getSoloSuccess(res.data))
        return{
            categories : res.data.categories
        }
    })
    .catch(err => dispatch(getSoloFailure()))
}




const getRelatedProductsRequest = () => {
    return {
        type : GET_RELATED_PRODUCTS_REQUEST
    }
}

const getRelatedProductsSuccess = (relatedData) => {
    return {
        type : GET_RELATED_PRODUCTS_SUCCESS,
        relatedData
    }
}

const getRelatedProductsFailure = () => {
    return {
        type : GET_RELATED_PRODUCTS_FAILURE
    }
}


export const getRelatedProducts = (payload) => (dispatch) => {
    dispatch(getRelatedProductsRequest())
    return  axios.get(`https://product-hunt-mocker.herokuapp.com/product?categories=${payload}`)
    .then(res => dispatch(getRelatedProductsSuccess(res.data)))
    .catch(err => dispatch(getRelatedProductsFailure()))
}

 
// best deals


const getBestDealsRequest = () => {
    return {
        type : GET_BEST_REQUEST
    }
}

const getBestDealsSuccess = (data) => {
    return {
        type : GET_BEST_SUCCESS,
        data : data,
    }
}

const getBestDealsFailure = () => {
    return {
        type : GET_BEST_FAILURE
    }
}


export const getBestProducts = (params = {}) => (dispatch) => {
    dispatch(getBestDealsRequest())
    return  axios.get("https://product-hunt-mocker.herokuapp.com/product",{
        params : params
    })
    .then(res => dispatch(getBestDealsSuccess(res.data)))
    .catch(err => dispatch(getBestDealsFailure()))
}


// older products

const getOlderRequest = () => {
    return {
        type : GET_OLDER_REQUEST
    }
}

const getOlderSuccess = (data) => {
    return {
        type : GET_OLDER_SUCCESS,
        data : data,
    }
}

const getOlderFailure = () => {
    return {
        type : GET_OLDER_FAILURE
    }
}


export const getOlderProducts = (params = {}) => (dispatch) => {
    dispatch(getOlderRequest())
    return  axios.get("https://product-hunt-mocker.herokuapp.com/product",{
        params : params
    })
    .then(res => dispatch(getOlderSuccess(res.data)))
    .catch(err => dispatch(getOlderFailure()))
}


// upcoming products

const getUpcomingRequest = () => {
    return {
        type : GET_UPCOMING_REQUEST
    }
}

const getUpcomingSuccess = (data) => {
    return {
        type : GET_UPCOMING_SUCCESS,
        data : data,
    }
}

const getUpcomingFailure = () => {
    return {
        type : GET_UPCOMING_FAILURE
    }
}


export const getUpcomingProducts = (params = {}) => (dispatch) => {
    dispatch(getUpcomingRequest())
    return  axios.get("https://product-hunt-mocker.herokuapp.com/product",{
        params : params
    })
    .then(res => dispatch(getUpcomingSuccess(res.data)))
    .catch(err => dispatch(getUpcomingFailure()))
}


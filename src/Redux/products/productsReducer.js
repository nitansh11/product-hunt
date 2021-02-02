import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from './actionTypes'

const initialState = {
    isLoading : false,
    isError : false,
    productData : []
}


export const productsReducer = ( state = initialState , { type , data }) => {
    switch ( type ){
        case GET_PRODUCTS_REQUEST : 
        return {
            ...state ,
            isLoading : true
        }
        case GET_PRODUCTS_SUCCESS :
        return {
            ...state ,
            isLoading : false,
            productData : data
        }
        case GET_PRODUCTS_FAILURE : 
        return {
            ...state ,
            isLoading : false,
            isError : true
        }

        default : return state
    }
}

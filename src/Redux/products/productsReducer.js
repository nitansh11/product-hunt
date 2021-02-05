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
    GET_ALL_PRODUCTS,
    POST_PRODUCT
  
} from './actionTypes'

const initialState = {
    isLoading : false,
    isError : false,
    allData : [],
    todaysData : [],
    soloData : {},
    relatedProductsData : [],
    bestDealsData : [],
    upcomingProductsData : [],
    olderProductsData : []
}


export const productsReducer = ( state = initialState , { type , data , relatedData ,allData }) => {
    switch ( type ){
        case GET_ALL_PRODUCTS : 
        return {
            ...state,
            allProdcuts : allData
        }

        case GET_PRODUCTS_REQUEST : 
        return {
            ...state ,
            isLoading : true
        }
        case GET_PRODUCTS_SUCCESS :
        return {
            ...state ,
            isLoading : false,
            todaysData : data,
        }
        case GET_PRODUCTS_FAILURE : 
        return {
            ...state ,
            isLoading : false,
            isError : true
        }

        case GET_SOLO_REQUEST : 
        return {
            ...state ,
            isLoading : true
        }
        case GET_SOLO_SUCCESS :
        return {
            ...state ,
            isLoading : false,
            soloData : data,
        }
        case GET_SOLO_FAILURE : 
        return {
            ...state ,
            isLoading : false,
            isError : true
        }
        case GET_RELATED_PRODUCTS_REQUEST : 
        return {
            ...state ,
            isLoading : true
        }
        case GET_RELATED_PRODUCTS_SUCCESS :
        return {
            ...state ,
            isLoading : false,
            relatedProductsData : relatedData,
        }
        case GET_RELATED_PRODUCTS_FAILURE : 
        return {
            ...state ,
            isLoading : false,
            isError : true
        }
        //best deals
        case GET_BEST_REQUEST : 
        return {
            ...state ,
            isLoading : true
        }
        case GET_BEST_SUCCESS :
        return {
            ...state ,
            isLoading : false,
            bestDealsData : data,
        }
        case GET_BEST_FAILURE : 
        return {
            ...state ,
            isLoading : false,
            isError : true
        }
        //older deals
        case GET_OLDER_REQUEST : 
        return {
            ...state ,
            isLoading : true
        }
        case GET_OLDER_SUCCESS :
        return {
            ...state ,
            isLoading : false,
            olderProductsData : data,
        }
        case GET_OLDER_FAILURE : 
        return {
            ...state ,
            isLoading : false,
            isError : true
        }
        // upcoming products
        case GET_UPCOMING_REQUEST : 
        return {
            ...state ,
            isLoading : true
        }
        case GET_UPCOMING_SUCCESS :
        return {
            ...state ,
            isLoading : false,
            upcomingProductsData : data,
        }
        case GET_UPCOMING_FAILURE : 
        return {
            ...state ,
            isLoading : false,
            isError : true
        }

        case POST_PRODUCT : 
        return {
            ...state
        }
    
        default : return state
    }
}

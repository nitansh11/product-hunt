import * as actionTypes from './actionTypes'

const initState = {
    currentUserId : null,
    upvotes : [],
    collection : []
}

export const operationsReducer = ( state = initState , { type , data , currentUserId , collectionData }) => {
    switch (type) {
        case actionTypes.GET_ALL_AUTH_DATA:
            return {
                ...state,
                upvotes : undefined ? [] : data,
                currentUserId : currentUserId,
            }
        
        case actionTypes.GET_CURRENT_UPVOTES : 
        return{
            ...state,
            upvotes: data === undefined ? [] : data
        }

        case actionTypes.GET_CURRENT_COLLECTIONS : 
        return{
            ...state,
            collection : collectionData === undefined ? [] : collectionData
        }

        case actionTypes.POST_COMMENT:
            return{
                ...state,
            }
           
        default:
           return state
    }
}
import * as actionTypes from './actionTypes'

const initState = {
    currentUserId : null,
    upvotes : []
}

export const operationsReducer = ( state = initState , { type , data , currentUserId }) => {
    switch (type) {
        case actionTypes.GET_ALL_AUTH_DATA:
            console.log("operation reducer " , data)
            console.log("first")
            return {
                ...state,
                upvotes : undefined ? [] : data,
                currentUserId : currentUserId
            }
        
        case actionTypes.GET_CURRENT_UPVOTES : 
        console.log("second")
        return{
            ...state,
            upvotes: data === undefined ? [] : data
        }
           
    
        default:
           return state
    }
}
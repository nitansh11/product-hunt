import { PATCH_COMMENT_FAILURE, PATCH_COMMENT_REQUEST, PATCH_COMMENT_SUCCESS } from "./actionTypes"


const initState={
    comments:[],
    isError:false
}


const discussionsReducer=(state=initState,{type,payload})=>{
    switch(type){
        case PATCH_COMMENT_REQUEST:{
            return{
                ...state,
                isError:true
            }
        }
        case PATCH_COMMENT_SUCCESS:{
            return{
                ...state,
                isError:false
            }
        }
        case PATCH_COMMENT_FAILURE:{
            return{
                ...state,
                isError:true
            }
        }
        default:{
            return state
        }
    }
}

export {discussionsReducer}
import { GET_ALL_DISCUSSIONS , PATCH_COMMENT_FAILURE, PATCH_COMMENT_REQUEST, PATCH_COMMENT_SUCCESS } from "./actionTypes"


const initState={
    allDiscussion : [],
    comments:[],
    isError:false
}


const discussionsReducer=(state=initState,{type , payload , data})=>{
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

        case GET_ALL_DISCUSSIONS : {
            return {
                ...state,
                allDiscussion : data
            }
        }

        default:{
            return state
        }
    }
}

export {discussionsReducer}
import { GET_ALL_DISCUSSIONS ,PATCH_COMMENT_FAILURE, PATCH_COMMENT_REQUEST, PATCH_COMMENT_SUCCESS } from "./actionTypes"
import axios from 'axios'

const patchCommentRequest=()=>{
    return{
        type:PATCH_COMMENT_REQUEST
    }
}

const patchCommentSuccess=(payload)=>{
    return{
        type:PATCH_COMMENT_SUCCESS,
        payload
    }
}

const patchCommentFailure=(error)=>{
    return{
        type:PATCH_COMMENT_FAILURE,
        payload:{
            error:error
        }
    }
}

export const patchComment=(comments,id)=>(dispatch)=>{
    console.log(comments , id)
    // dispatch(patchCommentRequest());
    // return axios
    // .patch(`https://janak-routing-project.herokuapp.com/discussions/${id}`,{
    //     comments,
    //     author:"janak"
    // })
    // .then((res)=>{
    //     dispatch(patchCommentSuccess(res.data))
    // })
    // .catch((err)=>{
    //     dispatch(patchCommentFailure(err))
    // })
}



const postNewDiscussion=(payload)=>dispatch=>{
    return axios.post("https://janak-routing-project.herokuapp.com/discussions",{
        payload
    })
    .then((res)=>{
        return{
            data:res.data
        }
    })
}

export { postNewDiscussion}



const getAllDiscussionHandle = (discussion) => {
    return {
        type : GET_ALL_DISCUSSIONS,
        data : discussion
    }
}

export const getAllDiscussion = () => dispatch => {
    return axios.get("https://janak-routing-project.herokuapp.com/discussions")
    .then(res => dispatch(getAllDiscussionHandle(res.data)))
}

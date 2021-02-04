import axios from 'axios'
import * as actionTypes from './actionTypes'


const getAllAuthData = (data , currentUserId) => {
    return {
        type : actionTypes.GET_ALL_AUTH_DATA,
        data,
        currentUserId
    }
}

export const getAllUsersAuthData = (payload) => dispatch => {
    return axios.get("https://json-server-nitansh-1.herokuapp.com/users",{
        params : payload
    })
    .then((res) => {
        console.log(res.data[0].id, "checking upoted")
        dispatch(getAllAuthData(res.data[0].upvoted , res.data[0].id))
        return{
            data : res.data[0].upvoted,
            id : res.data[0].id
        }   
    })
}

export const updateUpvotes = (payload , userId) => dispatch => {
    return axios.patch(`https://json-server-nitansh-1.herokuapp.com/users/${userId}`,{
                    upvoted : payload,
    })
    .then((res)=>{
        return {
            data : res.data
        }
    })
}

const findUpvotes = (data) => {
    return {
        type : actionTypes.GET_CURRENT_UPVOTES,
        data
    }
}


export const findCurrentUserUpvotes = (email) => dispatch => {
    return axios.get(`https://json-server-nitansh-1.herokuapp.com/users/`,{
        params : {
            email,
        }
    })
    .then(res => dispatch(findUpvotes(res.data[0].upvoted)))
}

 
export const upVoteCounter = (payload , id) => dispatch => {
    console.log(payload , id , "from upvote counter")
 return axios.patch(`https://product-hunt-mocker.herokuapp.com/product/${id}`,{
     upvotes : payload.upvotes
 })
 .then((res)=>{
     return{
         data : res.data
     }
 })

}

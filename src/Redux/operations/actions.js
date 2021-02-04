import axios from 'axios'
import * as actionTypes from './actionTypes'


const getAllAuthData = (data , currentUserId , collectionData) => {
    return {
        type : actionTypes.GET_ALL_AUTH_DATA,
        data,
        currentUserId,
        collectionData
    }
}

export const getAllUsersAuthData = (payload) => dispatch => {
    return axios.get("https://json-server-nitansh-1.herokuapp.com/users",{
        params : payload
    })
    .then((res) => {
        dispatch(getAllAuthData(res.data[0].upvoted , res.data[0].id ,res.data[0].collection))
        return{
            data : res.data[0].upvoted,
            id : res.data[0].id,
            collectionData : res.data[0].collection
        }   
    })
}

//upvotes

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
 return axios.patch(`https://product-hunt-mocker.herokuapp.com/product/${id}`,{
     upvotes : payload.upvotes
 })
 .then((res)=>{
     return{
         data : res.data
     }
 })

}


// collections

export const updateCollections = (payload , userId) => dispatch => {
    return axios.patch(`https://json-server-nitansh-1.herokuapp.com/users/${userId}`,{
                    collection : payload,
    })
    .then((res)=>{
        return {
            data : res.data
        }
    })
}

const findCollections = (collectionData) => {
    return {
        type : actionTypes.GET_CURRENT_COLLECTIONS,
        collectionData
    }
}



export const findCurrentUserCollections = (email) => dispatch => {
    return axios.get(`https://json-server-nitansh-1.herokuapp.com/users/`,{
        params : {
            email,
        }
    })
    .then(res => dispatch(findCollections(res.data[0].collection)))
}


//Posting Comments on Product Page
 

 export const postNewComments = ( id ,productDiscussion) => dispatch => {
    return axios.patch(`https://product-hunt-mocker.herokuapp.com/product/${id}`,{
        productDiscussion
 })
    .then((res)=>{
        return {
            data : res.data
        }
    })
}
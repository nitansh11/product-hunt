import React from 'react'
import styles from './Product.module.css'
import { useHistory } from 'react-router-dom'
import { getAllUsersAuthData , findCurrentUserUpvotes, updateUpvotes, upVoteCounter } from '../../Redux/operations/actions'
import { useDispatch , useSelector } from 'react-redux'
 

function ProductCard(props) {
    const { dataHandlers , logo ,name ,category , upvotes , comments, tagline , id  } = props
    const [ trigger , setTrigger ] = React.useState(false)
    const { getTodayProducts , getBestDealsHandler , getOlderProductsHandler , getUpcomingProductsHandler } = dataHandlers
    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.authReducer.currentUser)
    const upvoted = useSelector(state => state.operationsReducer.upvotes)
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    
  

    const modalToggleHandler = (id) =>{
        history.push(`/product/${id}`)
    }

    React.useEffect(()=>{
        if(isLoggedIn){
            console.log(currentUser , "after login")
            dispatch(findCurrentUserUpvotes(currentUser.email))
        }
    },[currentUser])


    const productUpvoteHandler = () =>{
        if(!isLoggedIn){
            alert("You need to login")
            return
        }
        dispatch(getAllUsersAuthData({
            email : currentUser.email
        }))
        .then((res) => {
            if(res.data === undefined){
                const upvoted = []
                upvoted.push(id)
                dispatch(updateUpvotes(upvoted , res.id , currentUser.email))
                 .then(res => dispatch(findCurrentUserUpvotes(currentUser.email)))
                 .then(res => dispatch(upVoteCounter({upvotes : upvotes + 1} , id))
                               .then(res=> setTrigger(!trigger))  
                 )    
            }
            else{
                const findExistence = res.data.find(item => item === id)
                if(findExistence === undefined){
                    const updatedUpVotes = [...res.data , id ]
                    dispatch(updateUpvotes(updatedUpVotes , res.id , currentUser.email)) 
                     .then(res => dispatch(findCurrentUserUpvotes(currentUser.email)))     
                     .then(res => dispatch(upVoteCounter({upvotes : upvotes + 1} , id))
                               .then(res=> setTrigger(!trigger))  
                 )                 
                }
                else{
                    const updatedUpVotes = res.data.filter(item => item !== id)
                    dispatch(updateUpvotes(updatedUpVotes , res.id , currentUser.email)) 
                     .then(res => dispatch(findCurrentUserUpvotes(currentUser.email)))  
                     .then(res => dispatch(upVoteCounter({upvotes : upvotes - 1} , id))
                     .then(res=> setTrigger(!trigger))  
                  )  
                }
            }
        })
    }

    React.useEffect(()=>{
        getTodayProducts("popular")
        getBestDealsHandler()
        getOlderProductsHandler()
        getUpcomingProductsHandler()
    },[trigger])
    

  
    return (
        <div  className={styles.ProductCard}>
            <div className={styles.ProductCard__img}>
                <img src={logo} alt="product-img"></img>
            </div>
            <div onClick={()=>modalToggleHandler(id)} className={styles.ProductCard__content}>
                <h2>{name} <span><i className="fas fa-directions"></i></span></h2>
                <p>{tagline}</p>
                <div className={styles.ProductCard__content__footer}>
                    <div>   
                        <i className="fas fa-comment"></i>
                        <span>{comments}</span>
                    </div>
                    <div>
                        <span>{category}</span>
                    </div>
                </div>
            </div>
            <div onClick={()=>productUpvoteHandler()} className={upvoted?.find(item => item === id) !== undefined && isLoggedIn ? styles.ProductCard__upvote__clicked : styles.ProductCard__upvote}>
                <div>
                    <i className="fas fa-caret-up"></i>
                </div>
                <div>
                    <p>{upvotes}</p>
                </div>    
            </div>
        </div>
    )
}

export default ProductCard

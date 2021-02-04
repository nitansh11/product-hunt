import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {  getRelatedProducts, getSoloProduct } from '../../Redux/products/actions'
import styles from './ProductModal.module.css'
import { useDispatch , useSelector } from 'react-redux'
import SideCard from './SideCard'
import { FacebookShareButton , TwitterShareButton } from 'react-share'
import { findCurrentUserUpvotes, getAllUsersAuthData, updateUpvotes, upVoteCounter } from '../../Redux/operations/actions'


function ProductModal() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const soloData = useSelector(state => state.productsReducer.soloData)
    const relatedProductData = useSelector(state => state.productsReducer.relatedProductsData)
    const upvoted = useSelector(state => state.operationsReducer.upvotes)
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    const history = useHistory()
    const [ showNav , setShowNav ] = React.useState(false)
    const currentUser = useSelector(state => state.authReducer.currentUser)
    const [ trigger , setTrigger ] = React.useState(false)
    


    const handleShowNav = () => {
        if (window.pageYOffset >= 350){
            setShowNav(true)
        } 
        else{
            setShowNav(false)
        }
    };
    
    window.addEventListener('scroll', handleShowNav)


    const modalToggleHandler = () =>{
        history.push("/")
    }

    React.useEffect(()=>{
        getSoloDataHandler()
    },[id,trigger])

    const getSoloDataHandler = () => {
        const action = getSoloProduct(id)
        dispatch(action)
        .then(res =>  getRelatedProductsHandler(res.categories))
    }



    const getRelatedProductsHandler = (categories) => {
        const action = getRelatedProducts(categories)
        dispatch(action)
    }

  
    React.useEffect(()=>{
        if(isLoggedIn){
            dispatch(findCurrentUserUpvotes(currentUser.email))
        }
    },[currentUser])


    const { logo , name , tagline , categories , upvotes , description , developer , video } = soloData


    // React.useEffect(()=>{   
    //     getSoloDataHandler()
    // },[trigger])
    
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
                upvoted.push(Number(id))
                dispatch(updateUpvotes(upvoted , res.id , currentUser.email))
                 .then(res => dispatch(findCurrentUserUpvotes(currentUser.email)))
                 .then(res => dispatch(upVoteCounter({upvotes : upvotes + 1} , id))
                               .then(res=> setTrigger(!trigger))  
                 )     
            }
            else{
                const findExistence = res.data.find(item => item === Number(id))
                if(findExistence === undefined){
                    const updatedUpVotes = [...res.data , Number(id) ]
                    dispatch(updateUpvotes(updatedUpVotes , res.id , currentUser.email)) 
                     .then(res => dispatch(findCurrentUserUpvotes(currentUser.email)))    
                     .then(res => dispatch(upVoteCounter({upvotes : upvotes + 1} , id))
                     .then(res=> setTrigger(!trigger))  
                    )                    
                }
                else{
                    const updatedUpVotes = res.data.filter(item => item !== Number(id))
                    dispatch(updateUpvotes(updatedUpVotes , res.id , currentUser.email)) 
                     .then(res => dispatch(findCurrentUserUpvotes(currentUser.email)))  
                     .then(res => dispatch(upVoteCounter({upvotes : upvotes - 1} , id))
                     .then(res=> setTrigger(!trigger))  
                    )   
                }
            }
        })
    }
    
        
    return (
        <div className={styles.ProductModal}>
            <div className={styles.ProductModal__main}>
              <div className={styles.ProductModal__main__head}>
                <div className={styles.ProductModal__main__head__info}>
                    <div>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <p>{tagline}</p>
                        <div className={styles.ProductModal__main__head__info__categories}>
                                <div><button>{categories}</button></div>
                        </div>
                    </div>
                </div>
                <div className={styles.ProductModal__main__head__rank}>
                    {/* <h1>Rank</h1> */}
                </div>
              </div>
              <div className={styles.ProductModal__main__content}>
                <div className={styles.ProductModal__main__content__demo}>
                    <div className={styles.ProductModal__main__content__demo__video}>
                        <div>
                            <iframe type="text/html" title = {id} width="673" height="380" src={video} alt="404 Not Found" allowFullScreen></iframe>
                        </div>
                        <div className={styles.ProductModal__main__content__demo__video__description} >
                            <p>{description}</p>
                        </div>
                        <div className={styles.ProductModal__main__content__demo__video__footer}>
                            <div>
                                <div className={styles.Twitter}>
                                    <TwitterShareButton url={window.location.href}>
                                     <button > <i className="fab fa-twitter"></i> Tweet</button>
                                    </TwitterShareButton>
                                </div>
                                <div className={styles.Facebook}>
                                    <FacebookShareButton url={window.location.href}>
                                        <button> <i className="fab fa-facebook-f"></i> Share</button>
                                    </FacebookShareButton>
                                </div>
                                <div>
                                    <button> <i className="fas fa-code"></i> Embed</button>
                                </div>
                                <div>
                                    <button> <i className="far fa-plus-square"></i> Collect</button>
                                </div>
                            </div>
                            <div>
                                <button>Featured 11 hour ago</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ProductModal__main__content__demo__discussion}>
                        <h1>Discussion</h1>
                    </div>
                </div>
                <div className={styles.ProductModal__main__content__side}>
                    <div className={styles.ProductModal__main__content__side__head}>
                        <div>
                            <button className={styles.button__light}>
                                GET IT
                            </button>
                            <button onClick={()=>productUpvoteHandler()} 
                                style={upvoted?.find(item => item === Number(id)) !== undefined && isLoggedIn ? {border:"1px solid rgb(173, 84, 0)" , backgroundColor:"white", color:"rgb(173, 84, 0)"} : {}} className={styles.button__dark}>
                                <i className="fas fa-caret-up"></i> UPVOTE {upvotes}
                            </button>
                        </div>
                        <div className={styles.ProductModal__main__content__side__head__upvoters}>
                            {
                              new Array(14).fill(0).map((_,index)=>(
                                <div key={index+1}>
                                    <img src={`https://i.pravatar.cc/150?img=${index+1}`} alt="voters"></img>
                                </div>
                              ))   
                            }     
                        </div>
                    </div>
                    <div className={styles.ProductModal__main__content__side__contributors}>
                        <div>
                            <b>Developer</b>
                        </div>
                        <div>
                            <div>
                                <img src="https://i.pravatar.cc/150?img" alt="voters"></img>    
                            </div>
                            <div>
                                <p>{developer}</p>
                                <span>@{developer}</span> 
                            </div>
                        </div>  
                    </div>
                    <div className={styles.ProductModal__main__content__side__related}>
                        <div>
                            <b>Related Products</b>
                        </div>
                        <div className={styles.Product__sideModal__main__content__side__cards}>
                            {relatedProductData?.filter((_,index) => index < 6 ).map( item => (
                                <SideCard key={item.id} {...item}></SideCard>
                            ))}
                         </div> 
                    </div>
                </div>
              </div>
            </div>
            <div onClick={modalToggleHandler} className={styles.ProductModal__close}>
                <i class="fas fa-times-circle"></i>
            </div>
            { showNav && <div className={styles.ScrollNav__parent}>
                <div className = {styles.ScrollNav}>
                <div className={styles.ScrollNav__right}>
                        <div>
                            <img src={logo} alt="logo"></img>
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <p>{tagline}</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.ScrollNav__left}>
                            <div>
                                <button className={styles.button__light}>
                                    GET IT
                                </button>
                            </div>
                            <div>
                                <button onClick={()=>productUpvoteHandler()} 
                                style={upvoted?.find(item => item === Number(id)) !== undefined && isLoggedIn ? {border:"1px solid rgb(173, 84, 0)" , backgroundColor:"white", color:"rgb(173, 84, 0)"} : {}} className={styles.button__dark}>
                                <i className="fas fa-caret-up"></i> UPVOTE {upvotes}
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ProductModal

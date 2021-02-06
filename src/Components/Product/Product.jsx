import React from 'react'
import styles from './Product.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { getBestProducts, getOlderProducts, getProducts,  getUpcomingProducts } from '../../Redux/products/actions'
import ProductCard from './ProductCard'
import SideCard from './SideCard'
import { getJobs } from '../../Redux/myjobs/actions'
import SideCardJobs from './SideCardJobs'
import { Link, useHistory } from 'react-router-dom'
import { getAllDiscussion } from '../../Redux/discussions/actions'
import SideCardDiscussions from './SideCardDiscussions'
import { AuthContext } from "../../AuthContextProvider";
import { getAllUsersAuthData } from '../../Redux/operations/actions'
 
 
 

function Product() {
   const todaysData = useSelector ( state => state.productsReducer.todaysData)
   const upcomingProductsData = useSelector ( state => state.productsReducer.upcomingProductsData)
   const olderProductsData = useSelector ( state => state.productsReducer.olderProductsData)
   const bestDealsData = useSelector ( state => state.productsReducer.bestDealsData)
   const myJobs = useSelector ( state => state.myJobsReducer.myJobs)
   const allDiscussion = useSelector( state => state.discussionsReducer.allDiscussion)
   const [ showMoreToday , setShowMoreToday ] = React.useState(false)
   const [ showMoreOlder , setShowMoreOlder ] = React.useState(false)
   const [ showScroll, setShowScroll ] = React.useState(false)
   const [ currentFilter , setCurrentFilter ] = React.useState("latest")
   const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
   const { isOpen, setIsOpen } = React.useContext(AuthContext);
   const currentUser = useSelector((state) => state.authReducer.currentUser);
   const history = useHistory()
   const dispatch = useDispatch()  
    
   //scroll to top
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
        }
    };
    
    window.addEventListener('scroll', checkScrollTop)
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    //post a product button handler 
    const postProductButtonHandler = () =>{
        if(isLoggedIn){
            history.push("/product/post")
        }
        else{
            setIsOpen(true);
        }
        
    }


    //getting todays products
    const getTodayProducts = (currentFilter) => {
        if(currentFilter === "popular"){
            const action = getProducts({
                "_sort" : "upvotes",
               "_order": "desc",
               "status":"TODAY"
            })
            dispatch(action)
        }
        else{
            const action = getProducts({
                "_sort" : "id",
               "_order": "desc",
               "status":"TODAY"
            })
            dispatch(action)
        }
    }

    
    // get best deals
    
    const getBestDealsHandler = () =>{
        const action = getBestProducts({
            "_sort" : "upvotes",
            "_order": "desc",
           "status":"BEST"
        })
        dispatch(action)
    }
   
    const getOlderProductsHandler = () =>{
        const action = getOlderProducts({
           "status":"PROCESSED"
        })
        dispatch(action)
    }

    
    const getUpcomingProductsHandler = () =>{
        const action = getUpcomingProducts({
            "status":"UPCOMING",
            "_sort" : "id",
            "_order": "desc",
            "_page": 1,
            "_limit": 5,
        })
        dispatch(action)
    }
     
    React.useEffect(()=>{
        getTodayProducts(currentFilter)
        return ()=>{
           
        }
    },[currentFilter])

    React.useEffect(()=>{
        getBestDealsHandler()
        getOlderProductsHandler()
        getUpcomingProductsHandler()
        dispatch(getJobs())
        dispatch(getAllDiscussion())
        
        return ()=>{
            //clean up
        }
    },[])

    React.useEffect(()=>{
        if(isLoggedIn){
            dispatch(
                getAllUsersAuthData({
                  email: currentUser.email,
                })
              )
        }
        return ()=>{
            //clean up
        }
    },[isLoggedIn])



    const dataHandlers =  { currentFilter , getTodayProducts , getBestDealsHandler , getOlderProductsHandler }

    // show more products pagination toggle
    const showMoreTodayHandler = () => {
        setShowMoreToday(!showMoreToday)
    }
    const showMoreOlderHandler = () => {
        setShowMoreOlder(!showMoreOlder)
    }
    
    


    return (
    <div className={styles.Product__Parent}>
        <div className={styles.Product}>
             <div className={styles.Product__main}>
                 <div className={styles.Product__main__head}>
                    <div>
                        <h2>Today</h2>
                    </div>
                    <div>
                        <span onClick={()=>setCurrentFilter("popular")}>POPULAR</span> <b>|
                        </b> <span onClick={()=>setCurrentFilter("latest")}>NEWEST</span>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                     {!showMoreToday? todaysData?.filter((_,index) => index < 10)
                     .map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     )) :  todaysData?.map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     ))}
                    <div  onClick={showMoreTodayHandler} className={styles.Product__main__content__more}>
                         <i className="fas fa-chevron-down"></i> 
                         <button > {showMoreToday ? "Show Less" : `Show ${todaysData?.length-10} More`}</button>
                     </div>
                 </div>
                 <br></br>
                 <br></br>
                 <div className={styles.Product__main__head}>
                    <div>
                        <h2>Best Deals</h2>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                    {bestDealsData.map( item => (
                          <ProductCard key={item.id}  dataHandlers = {dataHandlers} {...item}></ProductCard>
                     ))}
                 </div>
                 <br></br>
                 <br></br>
                 <div className={styles.Product__main__head}>
                    <div>
                        <h2>Older</h2>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                    {!showMoreOlder? olderProductsData?.filter((_,index) => index < 10)
                     .map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     )) :  olderProductsData?.map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     ))}
                    <div  onClick={showMoreOlderHandler} className={styles.Product__main__content__more}>
                        <i className="fas fa-chevron-down"></i> 
                        <button > {showMoreOlder ? "Show Less" : `Show ${olderProductsData.length-10} More`}</button>
                     </div>
                 </div>
             </div>
             <div className={styles.Product__side}>
                <div className={styles.Product__side__awards}>
                         
                </div>
                <div className={styles.Product__side__highlight}>
                    <div className={styles.PostProduct_button}>
                       <button onClick={postProductButtonHandler}>Post a Product</button>
                    </div>
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Upcoming products <span>powered by Masai</span></h2>
                    <div className={styles.Product__side__highlight__cards}>
                        {upcomingProductsData?.map( item => (
                            <SideCard key={item.id} {...item}></SideCard>
                        ))}
                    </div>
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Hiring Now</h2>
                    <div className={styles.Product__side__highlight__cards}>
                        {myJobs?.filter((_,index) => index < 5).map( item => (
                            <SideCardJobs key={item.id} {...item}></SideCardJobs>
                        ))}
                    </div>
                    <div className={styles.Product__side__highlight__button}>
                       <Link to="/jobs">
                            <button>View All Jobs</button>
                        </Link> 
                    </div>
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Top Discussions</h2>
                    <div className={styles.Product__side__highlight__cards}>
                        {allDiscussion?.filter((_,index) => index < 4).map( item => (
                            <SideCardDiscussions key={item.id} {...item}></SideCardDiscussions>
                        ))}
                    </div>
                    <div className={styles.Product__side__highlight__button}>
                        <Link to="/discussions">
                            <button>View More Discussions</button>
                        </Link> 
                    </div>
                </div>
                <div className={styles.FooterMini}>
                     <ul>
                        <li>Blog</li>
                        <li>Newsletter</li>
                        <li>Apps</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Terms</li>
                        <li>Privacy and Cookies</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Advertise</li>
                    </ul> 
                    <div>
                        <p>© 2021 PRODUCT HUNT</p>
                    </div>
                </div>
             </div>
        </div>
        <div className={styles.Product__scroll}>
            <i style={{height: 40, display: showScroll ? 'inline' : 'none'}} onClick={scrollTop} className="fas fa-chevron-circle-up"></i>
        </div>
    </div>
    )
}

export default Product

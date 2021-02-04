import React from 'react'
import styles from './Product.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { getBestProducts, getOlderProducts, getProducts, getUpcomingProducts } from '../../Redux/products/actions'
import ProductCard from './ProductCard'
import SideCard from './SideCard'
 

 
function Product() {
   const productData = useSelector ( state => state.productsReducer.productData)
   const upcomingProductsData = useSelector ( state => state.productsReducer.upcomingProductsData)
   const olderProductsData = useSelector ( state => state.productsReducer.olderProductsData)
   const bestDealsData = useSelector ( state => state.productsReducer.bestDealsData)
   const [ showMore , setShowMore ] = React.useState(false)
   const [ showScroll, setShowScroll ] = React.useState(false)

   
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

    //getting all products
    const getTodayProducts = (params) => {
        if(params === "popular"){
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
               "_order": "asc",
               "status":"TODAY"
            })
            dispatch(action)
        }
    }

    
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
        getTodayProducts("popular")
        getBestDealsHandler()
        getOlderProductsHandler()
        getUpcomingProductsHandler()
    },[])

    const dataHandlers =  { getTodayProducts , getBestDealsHandler , getOlderProductsHandler , getUpcomingProductsHandler }

    // show more products pagination toggle
    const showMoreHandler = () => {
        setShowMore(!showMore)
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
                        <span onClick={()=>getTodayProducts("popular")}>POPULAR</span> <b>|
                        </b> <span onClick={()=>getTodayProducts("newest")}>NEWEST</span>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                     {!showMore? productData?.filter((_,index) => index < 10)
                     .map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     )) :  productData?.map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     ))}
                    <div  onClick={showMoreHandler} className={styles.Product__main__content__more}>
                         <i className="fas fa-chevron-down"></i> 
                         <button > {showMore ? "Show Less" : `Show ${productData.length-10} More`}</button>
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
                    {!showMore? bestDealsData.map( item => (
                          <ProductCard key={item.id}  dataHandlers = {dataHandlers} {...item}></ProductCard>
                     )) :  productData?.map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
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
                    {!showMore? olderProductsData?.filter((_,index) => index < 10)
                     .map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     )) :  productData?.map( item => (
                          <ProductCard dataHandlers = {dataHandlers}  key={item.id} {...item}></ProductCard>
                     ))}
                    <div  onClick={showMoreHandler} className={styles.Product__main__content__more}>
                        <i className="fas fa-chevron-down"></i> 
                        <button > {showMore ? "Show Less" : `Show ${olderProductsData.length-10} More`}</button>
                     </div>
                 </div>
             </div>
             <div className={styles.Product__side}>
                <div className={styles.Product__side__awards}>
                        
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Upcoming products <span>powered by Masai</span></h2>
                    <div className={styles.Product__side__highlight__cards}>
                        {upcomingProductsData?.map( item => (
                            <SideCard key={item.id} {...item}></SideCard>
                        ))}
                    </div>
                    <div className={styles.Product__side__highlight__button}>
                        <button>View All</button>
                    </div>
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Hiring Now</h2>
                    <div className={styles.Product__side__highlight__cards}>
                        {productData?.filter((item,index) => index < 3).map( item => (
                            <SideCard key={item.id} {...item}></SideCard>
                        ))}
                    </div>
                    <div className={styles.Product__side__highlight__button}>
                        <button>View All Jobs</button>
                    </div>
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Top Discussions</h2>
                    <div className={styles.Product__side__highlight__cards}>
                        {productData?.filter((item,index) => index < 4).map( item => (
                            <SideCard key={item.id} {...item}></SideCard>
                        ))}
                    </div>
                    <div className={styles.Product__side__highlight__button}>
                        <button>View More Discussions</button>
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
            <i style={{height: 40, display: showScroll ? 'inline' : 'none'}} onClick={scrollTop} class="fas fa-chevron-circle-up"></i>
        </div>
    </div>
    )
}

export default Product

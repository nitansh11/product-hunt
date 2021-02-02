import React from 'react'
import styles from './Product.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/products/actions'
import ProductCard from './ProductCard'
import SideCard from './SideCard'
 

 
function Product() {
   const productData = useSelector ( state => state.productsReducer.productData)
   const [ showMore , setShowMore ] = React.useState(false)
//    const isLoading = useSelector ( state => state.productsReducer.isLoading)
//    const isError = useSelector ( state => state.productsReducer.isError)
   const dispatch = useDispatch()     

    const getAllProducts = (params) => {
        if(params === "popular"){
            const action = getProducts({
                "_sort" : "upvotes",
               "_order": "desc"
            })
            dispatch(action)
        }
        else{
            const action = getProducts({
                "_sort" : "id",
               "_order": "asc"
            })
            dispatch(action)
        }
    }

    React.useEffect(()=>{
        getAllProducts("popular")
    },[])


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
                        <span onClick={()=>getAllProducts("popular")}>POPULAR</span> <b>|</b> <span onClick={()=>getAllProducts("newest")}>NEWEST</span>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                     {!showMore? productData?.filter((item,index) => index < 5)
                     .map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     )) :  productData?.map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     ))}
                     <div className={styles.Product__main__content__more}>
                         <i className="fas fa-chevron-down"></i> 
                         <button onClick={showMoreHandler}> {showMore ? "Show Less" : "Show More"}</button>
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
                    {!showMore? productData?.filter((item,index) => index < 5)
                     .map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     )) :  productData?.map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     ))}
                    <div className={styles.Product__main__content__more}>
                        <i className="fas fa-chevron-down"></i> 
                        <button onClick={showMoreHandler}> {showMore ? "Show Less" : "Show More"}</button>
                     </div>
                 </div>
                 <br></br>
                 <br></br>
                 <div className={styles.Product__main__head}>
                    <div>
                        <h2>Yesterday</h2>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                    {!showMore? productData?.filter((item,index) => index < 5)
                     .map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     )) :  productData?.map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     ))}
                    <div className={styles.Product__main__content__more}>
                        <i className="fas fa-chevron-down"></i> 
                        <button onClick={showMoreHandler}> {showMore ? "Show Less" : "Show More"}</button>
                     </div>
                 </div>
             </div>
             <div className={styles.Product__side}>
                <div className={styles.Product__side__awards}>
                        
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Upcoming products <span>powered by Masai</span></h2>
                    <div className={styles.Product__side__highlight__cards}>
                        {productData?.filter((item,index) => index < 4).map( item => (
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
    </div>
    )
}

export default Product

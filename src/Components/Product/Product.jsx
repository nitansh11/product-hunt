import React from 'react'
import styles from './Product.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { getProducts } from '../../Redux/products/actions'
import ProductCard from './ProductCard'
import SideCard from './SideCard'

/* (https://ph-static.imgix.net/golden-kitty/2020/hp_desktop_card_bg.png */
function Product() {
   const productData = useSelector ( state => state.productsReducer.productData)
   const dispatch = useDispatch()     

    const getAllProducts = () => {
        const action = getProducts()
        dispatch(action)
    }

    React.useEffect(()=>{
        getAllProducts()
    },[])
 
    

    return (
        <div className={styles.Product}>
             <div className={styles.Product__main}>
                 <div className={styles.Product__main__head}>
                    <div>
                        <h2>Today</h2>
                    </div>
                    <div>
                        <span>POPULAR</span> <b>|</b> <span>NEWEST</span>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                     {productData?.map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     ))}
                 </div>
                 <br></br>
                 <br></br>
                 <div className={styles.Product__main__head}>
                    <div>
                        <h2>Best Deals</h2>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                     {productData?.map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     ))}
                 </div>
                 <br></br>
                 <br></br>
                 <div className={styles.Product__main__head}>
                    <div>
                        <h2>Yesterday</h2>
                    </div>
                 </div>
                 <div className={styles.Product__main__content}>
                     {productData?.map( item => (
                          <ProductCard key={item.id} {...item}></ProductCard>
                     ))}
                 </div>
             </div>
             <div className={styles.Product__side}>
                <div className={styles.Product__side__awards}>
                        
                </div>
                <div className={styles.Product__side__highlight}>
                    <h2>Yesterday</h2>
                    <div>
                        {productData?.map( item => (
                            <SideCard key={item.id} {...item}></SideCard>
                        ))}
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Product

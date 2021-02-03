import React from 'react'
import styles from './Product.module.css'
import { useHistory } from 'react-router-dom'

function ProductCard(props) {
    const history = useHistory()

    const modalToggleHandler = (id) =>{
        history.push(`/product/${id}`)
    }

    const productUpvoteHandler = () =>{
        
        console.log(id , "upvoted Product")

    }

    const { logo ,name ,category , upvotes , comments, tagline , id  } = props
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
            <div onClick={()=>productUpvoteHandler(id)} className={styles.ProductCard__upvote}>
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

import React from 'react'
import styles from './Product.module.css'


function ProductCard(props) {
    const { id ,name ,categories , upvotes , comments, image ,description } = props
    return (
        <div className={styles.ProductCard}>
            <div className={styles.ProductCard__img}>
                <img src={image} alt="product-img"></img>
            </div>
            <div className={styles.ProductCard__content}>
                <h2>{name} <span><i className="fas fa-directions"></i></span></h2>
                <p>{description.substring(0,70)}</p>
                <div className={styles.ProductCard__content__footer}>
                    <div>   
                        <i className="fas fa-comment"></i>
                        <span>{comments}</span>
                    </div>
                    <div>
                        <span>{categories}</span>
                    </div>
                </div>
            </div>
            <div className={styles.ProductCard__upvote}>
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

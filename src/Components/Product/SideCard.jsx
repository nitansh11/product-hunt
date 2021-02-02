import React from 'react'
import styles from './Product.module.css'

function SideCard(props) {
    const { name , description , image } = props
    return (
        <div className={styles.SideCard}>
            <div className={styles.SideCard__content}>
                <h2>{name}</h2>
                <p>{description.substring(0,30)}</p>
                <i className="fas fa-plus"></i>  <span> FOLLOW (0)</span> 
            </div>
            <div className={styles.SideCard__img}>
                <img src={image} alt="product-img"></img>
            </div>
        </div>
    )
}

export default SideCard


 
import React from 'react'
import styles from './Product.module.css'

function SideCard(props) {
    const { name , tagline , image, logo } = props
    return (
        <div className={styles.SideCard}>
            <div className={styles.SideCard__content}>
                <h2>{name}</h2>
                <p>{tagline}</p>
                <div className={styles.SideCard__content__follow} >
                    <div>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div>   
                        <span> FOLLOW (0)</span> 
                    </div>
                </div>
            </div>
            <div className={styles.SideCard__img}>
                <img src={logo} alt="product-img"></img>
            </div>
        </div>
    )
}

export default SideCard


 
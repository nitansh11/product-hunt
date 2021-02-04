import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Product.module.css'

function SideCard(props) {
    const { name , tagline , image, logo , id } = props
    const history = useHistory()
    
    const modalRedirectHandler = (id) => {
        history.push(`/product/${id}`)
    }

    return (
        <div onClick={()=>modalRedirectHandler(id)} className={styles.SideCard}>
            <div className={styles.SideCard__content}>
                <h2>{name}</h2>
                <p>{tagline}</p>
                <div className={styles.SideCard__content__follow} >
                    {/* <div>
                        <i className="fas fa-plus"></i>
                    </div> */}
                    {/* <div>   
                        <span> FOLLOW (0)</span> 
                    </div> */}
                </div>
            </div>
            <div className={styles.SideCard__img}>
                <img src={logo} alt="product-img"></img>
            </div>
        </div>
    )
}

export default SideCard


 
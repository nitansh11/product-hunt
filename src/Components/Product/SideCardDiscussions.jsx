import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Product.module.css'

function SideCardDiscussions(props) {
    const { title , author , body , image , id } = props
    const history = useHistory()
    
    const modalRedirectHandler = () => {
        history.push(`/discussions`)
    }

    return (
        <div onClick={()=>modalRedirectHandler()} className={styles.SideCard}>
            <div className={styles.SideCard__content}>
                <h2>{title}</h2>
                <p>{body}</p>  
                <b>{author}</b> 
            </div>
            <div className={styles.SideCard__img}>
                <img src={image} alt="product-img"></img>
            </div>
        </div>
    )
}

export default SideCardDiscussions


 
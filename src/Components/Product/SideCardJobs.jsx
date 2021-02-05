import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Product.module.css'

function SideCardJobs(props) {
    const { title , role , pics , location , avatar , id } = props
    const history = useHistory()
    
    const modalRedirectHandler = (id) => {
        history.push(`/jobs`)
    }

    return (
        <div onClick={()=>modalRedirectHandler()} className={styles.SideCard}>
            <div className={styles.SideCard__content}>
                <h2>{title}</h2>
                <p>{role} {pics}</p> 
                <p>{location}</p> 
            </div>
            <div className={styles.SideCard__img}>
                <img src={avatar} alt="product-img"></img>
            </div>
        </div>
    )
}

export default SideCardJobs


 
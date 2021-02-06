import React from 'react'
import styles from './PostProduct.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { postingNewProduct } from '../../Redux/products/actions'
import { useHistory } from 'react-router-dom'
 

const initState = {
    status : "TODAY",
    logo : "",
    name : "",
    tagline : "",
    categories : "Tech",
    upvotes : 0,
    comments : 0,
    description : "",
    developer : "",
    video : "",
    productDiscussion : [],
    plan : "ALPHA"
}

function PostProduct() {
    const [ formData , setFormData ] = React.useState(initState)
    const currentUser = useSelector ( state => state.authReducer.currentUser)
    const dispatch = useDispatch()
    const history = useHistory()
    
    // 
    React.useEffect(()=>{
        setFormData({...formData , developer : currentUser.name})
    },[])
   
 
    const onChangeHandler = (e) => {       
        let {name , value } = e.target
        setFormData({...formData , [name] : value }) 
     
    } 

    const onSubmitHandler = (e) => {
        e.preventDefault() 
        dispatch(postingNewProduct(formData))
        .then(res => history.push("/"))
    } 

  

    const { name , logo , tagline , categories , description , video  } = formData

    return (
        <div className={styles.PostProduct}>
            <div className={styles.PostProduct__head}>
                <div>
                    <p>Post a product</p>
                    <h1>Post your product on Product Hunt, increase your user base</h1>
                    <hr></hr>
                    <span><i className="fas fa-fire"></i> Boost your product reach, Starting from $100 for 30 days</span>
                </div> 
            </div>
            <div className={styles.PostProduct__form}>
                <form onSubmit={onSubmitHandler}>
                        <div>
                            <label>Name</label>
                            <input required value={name} name="name" onChange={onChangeHandler} type="text"  ></input>
                        </div>
                        <div>
                            <label>Tagline</label>
                            <input required value={tagline} name="tagline" onChange={onChangeHandler} type="text"></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <input required value={description} name="description"  onChange={onChangeHandler}   ></input>
                        </div>
                        
                        <div>
                            <label>Category</label>
                            <select required value={categories} name="categories"  onChange={onChangeHandler} >
                                <option value ="Tech">Tech</option>
                                <option value ="Productivity">Productivity</option>
                                <option value ="Marketing">Marketing</option>
                                <option value ="Education">Education</option>
                                <option value ="Entertainment">Entertainment</option>
                                <option value ="Gaming">Finance</option>
                                <option value ="Development">Development</option>
                                <option value ="Photography">Photography</option>
                                <option value ="Dating">Dating</option>
                                <option value ="Design">Design</option>
                            </select>
                        </div>
                        <div>
                            <label>Product Image</label>
                            <input  required value={logo}  name="logo" onChange={onChangeHandler} type="url"></input>
                        </div>

                        <div>
                            <label>Product Video</label>
                            <input required value={video}  name="video" onChange={onChangeHandler} type="url"></input>
                        </div>

                        <div>
                            <button type="submit">Post Product</button>
                        </div>
                    </form>
                </div> 
        </div>
    )
}

export default PostProduct

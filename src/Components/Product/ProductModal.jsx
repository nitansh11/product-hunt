import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getProducts, getSoloProduct } from '../../Redux/products/actions'
import styles from './ProductModal.module.css'
import { useDispatch , useSelector } from 'react-redux'
import SideCard from './SideCard'


function ProductModal() {
    let { id } = useParams()
    const dispatch = useDispatch()
    const soloData = useSelector(state => state.productsReducer.soloData)
    const productData = useSelector ( state => state.productsReducer.productData)
    const history = useHistory()
    const [ showNav , setShowNav ] = React.useState(false)


    const handleShowNav = () => {
        if (window.pageYOffset >= 350){
        setShowNav(true)
        } else{
        setShowNav(false)
        }
    };
    
    window.addEventListener('scroll', handleShowNav)


    const modalToggleHandler = () =>{
        history.push("/")
    }

    React.useEffect(()=>{
        getSoloDataHandler()
        getAllProducts()
    },[])

    const getSoloDataHandler = () => {
        const action = getSoloProduct(id)
        dispatch(action)
    }

    const getAllProducts = () => {
        const action = getProducts()
        dispatch(action)   
    }

    

    const { logo , name , tagline , categories , upvotes , comments , description , developer , video   } = soloData
    return (
        <div className={styles.ProductModal}>
            <div className={styles.ProductModal__main}>
              <div className={styles.ProductModal__main__head}>
                <div className={styles.ProductModal__main__head__info}>
                    <div>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <p>{tagline}</p>
                        <div className={styles.ProductModal__main__head__info__categories}>
                            {categories?.split(" ").map(item => (
                                <div><button>{item}</button></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.ProductModal__main__head__rank}>
                    {/* <h1>Rank</h1> */}
                </div>
              </div>
              <div className={styles.ProductModal__main__content}>
                <div className={styles.ProductModal__main__content__demo}>
                    <div className={styles.ProductModal__main__content__demo__video}>
                        <div>
                            <iframe type="text/html" title = {id} width="673" height="380" src={video} allowFullScreen></iframe>
                        </div>
                        <div className={styles.ProductModal__main__content__demo__video__description} >
                            <p>{description}</p>
                        </div>
                        <div className={styles.ProductModal__main__content__demo__video__footer}>
                            <div>
                                <div className={styles.Twitter}>
                                    <button > <i className="fab fa-twitter"></i> Tweet</button>
                                </div>
                                <div className={styles.Facebook}>
                                    <button> <i className="fab fa-facebook-f"></i> Share</button>
                                </div>
                                <div>
                                    <button> <i className="fas fa-code"></i> Embed</button>
                                </div>
                                <div>
                                    <button> <i className="far fa-plus-square"></i> Collect</button>
                                </div>
                            </div>
                            <div>
                                <button>Featured 11 hour ago</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ProductModal__main__content__demo__discussion}>
                        <h1>Discussion</h1>
                    </div>
                </div>
                <div className={styles.ProductModal__main__content__side}>
                    <div className={styles.ProductModal__main__content__side__head}>
                        <div>
                            <button className={styles.button__light}>
                                GET IT
                            </button>
                            <button className={styles.button__dark}>
                                <i className="fas fa-caret-up"></i> UPVOTE {upvotes}
                            </button>
                        </div>
                        <div className={styles.ProductModal__main__content__side__head__upvoters}>
                            {
                              new Array(14).fill(0).map((_,index)=>(
                                <div key={index+1}>
                                    <img src={`https://i.pravatar.cc/150?img=${index+1}`} alt="voters"></img>
                                </div>
                              ))   
                            }     
                        </div>
                    </div>
                    <div className={styles.ProductModal__main__content__side__contributors}>
                        <div>
                            <b>Developer</b>
                        </div>
                        <div>
                            <div>
                                <img src="https://i.pravatar.cc/150?img" alt="voters"></img>    
                            </div>
                            <div>
                                <p>{developer}</p>
                                <span>@{developer}</span> 
                            </div>
                        </div>  
                    </div>
                    <div className={styles.ProductModal__main__content__side__related}>
                        <div>
                            <b>Related Products</b>
                        </div>
                        <div className={styles.Product__sideModal__main__content__side__cards}>
                            {productData?.filter((_,index) => index < 4).map( item => (
                                <SideCard key={item.id} {...item}></SideCard>
                            ))}
                         </div> 
                    </div>
                </div>
              </div>
            </div>
            <div onClick={modalToggleHandler} className={styles.ProductModal__close}>
                <i class="fas fa-times-circle"></i>
            </div>
            { showNav && <div className={styles.ScrollNav__parent}>
                <div className = {styles.ScrollNav}>
                <div className={styles.ScrollNav__right}>
                        <div>
                            <img src={logo} alt="logo"></img>
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <p>{tagline}</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.ScrollNav__left}>
                            <div>
                                <button className={styles.button__light}>
                                    GET IT
                                </button>
                            </div>
                            <div>
                                <button className={styles.button__dark}>
                                    <i className="fas fa-caret-up"></i> UPVOTE {upvotes}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ProductModal

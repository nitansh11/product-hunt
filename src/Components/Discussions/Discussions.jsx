import React from 'react'
import Modal from 'react-modal'
import styles from './discussions.module.css'
import axios from "axios"


const Discussions = () => {
    const [modalOpen,setModalOpen] = React.useState(false)
    const [popupData,setPopupData] = React.useState('')
    const [list,setList] = React.useState([])
    const [commentsData,setCommentsdata] = React.useState(false)

    const handlePopup=(id)=>{
        setModalOpen(true)
        const temp = list.filter(item=>item.id===id)[0];
        setPopupData(temp)  
        setCommentsdata(true)
    }

    React.useEffect(()=>{
        axios.get("https://janak-routing-project.herokuapp.com/discussions")
        .then((res)=>{
            setList(res.data)
        })
    },[])

    return (
        <div className={styles.discussionsBackground}>
            <div className={styles.discussionsPage}>
                <div className={styles.discussionsPage_buttonsDIv}>
                    <div className={styles.discussionsPage_buttonsDIv_1}>
                        <button>POPULAR</button>
                        <button>NEW</button>
                    </div>
                    {/* <div className={styles.discussionsPage_buttonsDIv_2}>
                        <button>NOW</button>
                        <button>WEEK</button>
                        <button>MONTH</button>
                        <button>YEAR</button>
                        <button>ALL</button>
                    </div> */}
                </div>
                <div className={styles.discussionsParent}>
                    <div className={styles.discussionsList}>
                        {list?.map((item)=>(
                            <div className={styles.indivItem} key={item.id}>
                                <img src={item.image} alt=""/>
                                <div className={styles.itemNumber}>
                                    <i className="fas fa-caret-up"></i>
                                    <p className={styles.itemNum}>{item.upvotes}</p>
                                </div>
                                <div className={styles.itemTitle} onClick={()=>handlePopup(item.id)}>
                                    <h3>{item.title}</h3>
                                    <h5>by {item.author} - {item.comments.length} comments</h5>
                                </div>
                                <div>
                                    <Modal isOpen={modalOpen} 
                                        style={{overlay:{WebkitTapHighlightColor:"transparent",backgroundColor:"hsla(456, 3%, 50%, 0.15)"},
                                        content:{width:"70%",margin:"auto",backgroundColor:"rgb(249,249,249)"}}}>
                                        <button onClick={()=>setModalOpen(false)} className={styles.popupCloseButton}><i class="fas fa-times"></i></button>
                                        <p style={{color:"gray",fontWeight:"100"}}>Discussions - {popupData.title}</p>
                                        <div className={styles.popupTitleDiv}>                            
                                            <h1>{popupData.title}</h1>
                                            <h4>{popupData.body}</h4>
                                            <p>posted by {popupData.author}</p>
                                            <div className={styles.popupUpvotes}>
                                                <i className="fas fa-caret-up"></i>
                                                <p>{popupData.upvotes}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p style={{marginTop:'15px',fontSize:'14px'}}>COMMENTS</p>
                                            <div className={styles.commentsDiv}>
                                                {commentsData && popupData.comments?.map((item)=>(
                                                    <div className={styles.indivComment}>
                                                        <h4>{item.author}</h4>
                                                        <p>{item.comment}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.discussionsRightBar}>
                        <div className={styles.discussionsRightBar_1}>
                            <button>CREATE NEW DISCUSSION</button>
                            <p>
                                Before joining or starting a discussion remember to always be civil. 
                                Treat others with respect. Do not use the discussions board for 
                                direct sales or self-promotion. 
                                You are free to share your products and product ideas for feedback. 🙌
                            </p>
                        </div>
                        <h4 style={{marginTop:'10px',marginBottom:'10px'}}>Filters</h4>
                        <div className={styles.discussionsRightBar_2}>
                            <form>
                                <input type="checkbox" name="amas"/>
                                <label for="amas">AMAs</label>
                                <br/>
                                <input type="checkbox" name="amas"/>
                                <label for="amas">Request for Feedback</label>
                                <br/>
                                <input type="checkbox" name="amas"/>
                                <label for="amas">Help</label>
                            </form>
                        </div>
                        <div className={styles.discussionsRightBar_3}>
                            <h3>MOST HELPFUL THIS WEEK</h3>
                            <img src='https://ph-avatars.imgix.net/2062078/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop' alt=''/>
                        </div>
                        <div className={styles.discussionsRightBar_4}>
                            <p>Blog</p>
                            <p>Newsletter</p>
                            <p>Apps</p>
                            <p>About</p>
                            <p>FAQ</p>
                            <p>Terms</p>
                            <p>Privacy polocy and Cookies</p>
                            <p>Twitter</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Advertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Discussions}

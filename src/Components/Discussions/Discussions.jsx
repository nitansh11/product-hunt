import React from 'react'
//import { DiscussionsRoutes } from './Routes/Routes'
import styles from './discussions.module.css'

let data =[
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"02",
        title:"Can you convince me that without Excel you won't have data?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/3168868/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"32",
        title:"What are you doing to make your business survive or thrive during the pandemic?",
        caption:"by Mayank Singh Chauhan • 0 comments • 24h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"04",
        title:"Audio-first community managers",
        caption:"by Ankit Dhawan • 10 comments • 1d ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"06",
        title:"Where do you find interesting live streaming to watch?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"02",
        title:"Can you convince me that without Excel you won't have data?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"12",
        title:"Audio-first community managers",
        caption:"by Mayank Singh Chauhan • 0 comments • 24h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"23",
        title:"What are you doing to make your business survive or thrive during the pandemic?",
        caption:"by Ankit Dhawan • 10 comments • 1d ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"12",
        title:"Can you convince me that without Excel you won't have data?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"02",
        title:"Where do you find interesting live streaming to watch?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/3168868/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"32",
        title:"Audio-first community managers",
        caption:"by Mayank Singh Chauhan • 0 comments • 24h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"04",
        title:"Can you convince me that without Excel you won't have data?",
        caption:"by Ankit Dhawan • 10 comments • 1d ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"06",
        title:"What are you doing to make your business survive or thrive during the pandemic?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"02",
        title:"Where do you find interesting live streaming to watch?",
        caption:"by Mayank Singh Chauhan • 0 comments • 24h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"12",
        title:"Audio-first community managers",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"23",
        title:"Can you convince me that without Excel you won't have data?",
        caption:"by Ankit Dhawan • 10 comments • 1d ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"12",
        title:"Where do you find interesting live streaming to watch?",
        caption:"bby Mayank Singh Chauhan • 0 comments • 24h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"02",
        title:"Can you convince me that without Excel you won't have data?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/3168868/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"32",
        title:"What are you doing to make your business survive or thrive during the pandemic?",
        caption:"by Mayank Singh Chauhan • 0 comments • 24h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"04",
        title:"Audio-first community managers",
        caption:"by Ankit Dhawan • 10 comments • 1d ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"06",
        title:"Where do you find interesting live streaming to watch?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"02",
        title:"Can you convince me that without Excel you won't have data?",
        caption:"by Lior Barak • 0 comments • 13h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2239099/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"12",
        title:"Audio-first community managers",
        caption:"by Mayank Singh Chauhan • 0 comments • 24h ago"
    },
    {
        img:"https://ph-avatars.imgix.net/2789663/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=20&h=20&fit=crop",
        num:"23",
        title:"What are you doing to make your business survive or thrive during the pandemic?",
        caption:"by Ankit Dhawan • 10 comments • 1d ago"
    }
]

const Discussions = () => {
    return (
        <div className={styles.discussionsBackground}>
            <div className={styles.discussionsPage}>
                {/* <div>
                    <DiscussionsRoutes/>
                </div> */}
                <div className={styles.discussionsPage_buttonsDIv}>
                    <div className={styles.discussionsPage_buttonsDIv_1}>
                        <button>POPULAR</button>
                        <button>NEW</button>
                    </div>
                    <div className={styles.discussionsPage_buttonsDIv_2}>
                        <button>NOW</button>
                        <button>WEEK</button>
                        <button>MONTH</button>
                        <button>YEAR</button>
                        <button>ALL</button>
                    </div>
                </div>
                <div className={styles.discussionsParent}>
                    <div className={styles.discussionsList}>
                        {data?.map((item)=>(
                            <div className={styles.indivItem}>
                                <img src={item.img} alt=""/>
                                <div className={styles.itemNumber}>
                                    <p className={styles.itemNum}>{item.num}</p>
                                </div>
                                <div className={styles.itemTitle}>
                                    <h3>{item.title}</h3>
                                    <h5>{item.caption}</h5>
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

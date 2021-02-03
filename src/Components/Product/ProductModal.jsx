import React from 'react'
import styles from './ProductModal.module.css'

function ProductModal() {

    return (
        <div className={styles.ProductModal}>
            <div className={styles.ProductModal__main}>
              <div className={styles.ProductModal__main__head}>
                <div className={styles.ProductModal__main__head__info}>
                    <div>
                        <img src="" alt="logo"></img>
                    </div>
                    <div>
                        <h1>LOGO</h1>
                        <p>some tag line</p>
                        <b>Categories</b>
                    </div>
                </div>
                <div className={styles.ProductModal__main__head__rank}>
                    <h1>Rank</h1>
                </div>
              </div>
              <div className={styles.ProductModal__main__content}>
                <div className={styles.ProductModal__main__content__demo}>
                    <div className={styles.ProductModal__main__content__demo__video}>
                        <div>
                            <iframe width="673" height="380" src="https://www.youtube.com/embed/ODMnfly8KqA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum autem maiores facilis rem, illo adipisci quibusdam magnam, cumque incidunt nihil excepturi aspernatur impedit assumenda deleniti, commodi dignissimos ipsum tempora similique.</p>
                        </div>
                        <div>
                            <div>
                                <button>Tweet</button>
                                <button>Facebook</button>
                                <button>Embed</button>
                                <button>Collect</button>
                            </div>
                            <div>
                                <button>Featued 11 hour ago</button>
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
                            <button>
                                GET IT
                            </button>
                            <button>
                                UPVOTE
                            </button>
                        </div>
                        <div>
                            <h1>GRID VIEW AVATARS</h1>
                        </div>
                    </div>
                    <div className={styles.ProductModal__main__content__side__contributors}>
                        <h1>Contributor</h1>
                    </div>
                    <div className={styles.ProductModal__main__content__side__related}>

                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ProductModal

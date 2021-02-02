import React from "react"
import Styles from "./Jobs.module.css"


const Jobs=()=>{
return(
    <>
    <div className={Styles.Jobs_outerbox}>
        <div className={Styles.Jobs_firstbox}>
            <h1>JOBS</h1>
        </div>
        <div className={Styles.Jobs_secondbox} id={Styles.Jobs_secondbox}>
            <h1>FILTERS</h1>
        </div>
    </div>
    </>
)
}

export {Jobs}
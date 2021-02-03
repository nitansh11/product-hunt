import React from "react";
import Styles from "./Jobs.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getjobs,getremote } from "../../Redux/jobs/action";
const Jobs = () => {
  const { jobs } = useSelector((state) => state.jobsreducer, shallowEqual);
  const isLoading = useSelector((state) => state.jobsreducer);
  const isError = useSelector((state) => state.jobsreducer);
  const [rem,setRem]=React.useState(false)
  const [eng,setEng]=React.useState(false)
  const [design,setDesign]=React.useState(false)
  const dispatch = useDispatch();
  
 console.log(rem,eng,design)
  React.useEffect(() => {
    dispatch(getjobs());
   
  }, [dispatch]);

const handleremote=()=>{
    setRem(prev=>!prev)
     
     dispatch(getremote({rem,eng,design}))
}
console.log(rem,eng,design)
const handleeng = ()=>{
    // setEng(prev=>!prev)
    //  dispatch(getremote({rem,eng,design}))
}

const handledesign = ()=>{
    // setDesign(prev=>!prev)
    //  dispatch(getremote({rem,eng,design}))
}
  console.log(jobs);
  return (
    <>
      <div className={Styles.Jobs_outerbox}>
        <div className={Styles.Jobs_first_outerbox}>
          {jobs?.map((item) => {
            return item!==null && (
              <>
                <div className={Styles.Jobs_firstbox}>
                  <div classname={Styles.Jobs_firstbox1}>
                    <img src={item.avatar} alt="img" />
                  </div>
                  <div
                    classname={Styles.Jobs_firstbox2}
                    style={{ marginLeft: "20px", width: "45%" }}
                  >
                    <h2 style={{ marginBottom: "10px" }}>{item.title}</h2>

                    <h4 style={{ marginBottom: "10px" }}>{item.role}</h4>

                    <p>{item.location}</p>
                  </div>
                  <div style={{ width: "40%" }}>
                    <div style={{ textAlign: "right" }}>{item.pics}</div>
                    <div
                      style={{
                        marginLeft: "40%",
                        marginTop: "30%",
                        display: "flex",
                      }}
                    >
                      <button id={Styles.Jobs_buttondesign}>SHARE</button>
                      <button id={Styles.Jobs_buttondesign}>APPLY</button>
                    </div>
                  </div>
                </div>
                <br />
              </>
            );
          })}
        </div>

        <div className={Styles.Jobs_secondbox} id={Styles.Jobs_secondbox}>
          <div className={Styles}>
            <div className={Styles.Jobs_catbox}>
              <div className={Styles.Jobs_catbox1}>
                <img
                  src="https://ph-static.imgix.net/kitty_ph.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=max&dpr=2"
                  alt="cat img"
                />
              </div>
              <div className={Styles.Jobs_catbox2}>
                <h4>Are you hiring?</h4>

                <h5>Advertise from $299</h5>

                <button className={Styles.jobbutton}>POST A JOB</button>
              </div>
            </div>
            <h3 className={Styles.Jobs_filterbox}>Filters</h3>
            <div className={Styles.Jobs_checkbox}>
              <label>
                <input className={Styles.Jobs_input} type="checkbox" onChange={handleeng}/>
                ⚒️ Engineering
              </label>
              <br />
              <label>
                <input className={Styles.Jobs_input} type="checkbox" onChange={handledesign} />
                🎨 Design
              </label>
              <br />
              <label>
                <input className={Styles.Jobs_input} type="checkbox" />
                📢 Marketing
              </label>
              <br />
              <label>
                <input className={Styles.Jobs_input} type="checkbox" />
                📈 Sales
              </label>
              <br />
              <label>
                <input className={Styles.Jobs_input} type="checkbox" />
                💖 Customer Support
              </label>
              <br />
              <label>
                <input className={Styles.Jobs_input} type="checkbox" />
                💎 Product
              </label>
              <br />
            </div>
            <div className={Styles.Jobs_location}>
              <h4
                className={Styles.Jobs_filterbox}
                style={{ marginLeft: "4%" }}
              >
                Location
              </h4>
              <select
                className={Styles.Jobs_select}
                placeholder="SELECT A LOCATION"
              >
                <option>Copenhagen</option>
                <option>Remote</option>
                <option>San Francisco</option>
                <option>Boulder,CO,USA</option>
                <option>Oakland</option>
              </select>
              <div className={Styles.Jobs_checkbox}>
                <label>
                  <input className={Styles.Jobs_input} type="checkbox" onChange={handleremote}/>
                  🌎 Remote jobs only
                </label>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Jobs };


import React from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import Styles from "./singlementor.module.css";
const Singlementor = () => {
  const [data, setData] = React.useState(null);
  const { appId } = useParams();
  const history = useHistory();
  React.useEffect(() => {
    getdetails();
  }, []);

  const getdetails = async () => {
    try {
      const res = await axios.get(
        `https://json-server-mocker-masai-gopi.herokuapp.com/posts/${appId}`
      );
     
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handlegoback = () => {
    history.push(`/mentors/${appId}/calendar`);
  };
  return (
    <>
      <div>
        {data !== null && (
          <>
            <div className={Styles.datadiv} key={data.id}>
              <div>
                {data.avatar === "" && (
                  <div className={Styles.img}>
                    <img src={data.avatar} alt="img" />
                  </div>
                )}
                <div>
                  {data.video_url !== "" ? (
                    <div >
                      <video
                        style={{
                          width: "300px",
                          height: "300px",
                          borderRadius: "400px",
                          padding: "5px",
                          border: "5px solid  #ffdf70",
                          outline: "none",
                          marginTop:"50px"
                        }}
                        size="160px"
                        src={data.video_url}
                        width="600"
                        height="300"
                        controls="controls"
                         autoplay="true"
                         loop="loop"
                         muted="muted"
                      />
                    </div>
                  ) : (
                    <div className={Styles.img}>
                      <img
                        src={data.avatar}
                        style={{
                          borderRadius: "250px",
                          height: "250px",
                          width: "250px",
                          marginTop:"30%"
                        }}
                        alt="img"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={Styles.datadiv_2}>
                <div className={Styles.title}>{data.title}</div>
                <div className={Styles.position}>{data.position}</div>
                {data.para1 !== "" && (
                  <p className={Styles.para}>{data.para1}</p>
                )}
                {data.para2 !== "" && (
                  <p className={Styles.para}>{data.para2}</p>
                )}
                {data.para3 !== "" && (
                  <p className={Styles.para}>{data.para3}</p>
                )}
                <p className={Styles.para} style={{fontWeight:"700"}}>How can I help?</p>
                <br/>
                <button onClick={handlegoback} className={Styles.book}>
                  <Link style={{color: "white",textDecoration:"none"}} to="/mentors">BOOK NOW</Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export { Singlementor };

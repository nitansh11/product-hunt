import React from "react";
import Styles from "./Mentors.module.css";
import { useHistory, useParams, Redirect } from "react-router-dom";
import axios from "axios";

const Mentors = () => {
  const [data, setData] = React.useState(null);
  const history = useHistory();
  const { appId } = useParams();
  React.useEffect(() => {
    getlist();
  }, [data]);
  const getlist = async () => {
    try {
      const res = await axios.get("https://json-server-mocker-masai-gopi.herokuapp.com/posts");

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const bookacall = (id)=>{
    history.push(`/mentors/${id}`)
  }

  const handlementordetails=()=>{
    history.push(`/mentors/mentorsdetails`)
  }
  return (
    <div className={Styles.mentors_outerbox}>
      <h1 className={Styles.mentors_h1}>Product Hunt Mentors</h1>
      <p className={Styles.mentors_p}>
        Product Hunt Mentors allows you to book 1 to 1 meetings with industry
        experts on a range of topics including product building, social media,
        PR, design, engineering and more.
      </p>

      <p  className={Styles.mentors_p}>
        How it works: You can read more about each mentor in their short bios,
        then click “Book a Call” to select a time that suits you from their
        online calendars. Each mentor sets their own fee in accordance with
        their experiences. (Full disclaimer: Product Hunt takes a percentage).
      </p>

      <p  className={Styles.mentors_p}>
        If you’d like to become a mentor yourself, please apply here. Or if
        you’d like to book a session with an expert mentor, you can scroll our
        list below. More mentors will we added over time. If you have any
        questions, please check out our FAQ.
      </p>
      <div>
        {data!==null && data.map(({ id, avatar, title, position, para1, para2, para3 }) => (
          <>
            <div className={Styles.datadiv} key={id}>
              <div>
                <div className={Styles.img}>
                  <img src={avatar} alt="img" />
                </div>
              </div>
              <div className={Styles.datadiv_2}>
                <div className={Styles.title}>{title}</div>
                <div className={Styles.position}>{position}</div>
                {para1 !== "" && <p className={Styles.para}>{para1}</p>}
                {para2 !== "" && <p className={Styles.para}>{para2}</p>}
                {para3 !== "" && <p className={Styles.para}>{para3}</p>}
                <button className={Styles.button} onClick={() => bookacall(id)}>BOOK A CALL</button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={Styles.startbuttondiv}>
        <button className={Styles.startbutton} onClick={handlementordetails}>
          BOOK A CALL AND GET YOUR APPOINTMENT DETAILS HERE
        </button>
      </div>
    </div>
  );
};

export default Mentors;

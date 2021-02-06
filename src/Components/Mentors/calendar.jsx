/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Calendar from "react-calendar";
// import TimePicker from 'react-time-picker';
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./calendar.module.css";

export function CalendarPage() {
  const [data, setData] = React.useState(null);
  const { appId } = useParams();
  const history = useHistory();
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  currentUser !== null && console.log(currentUser.email);
  React.useEffect(() => {
    getdetails();
  }, []);
  const book = () => {
    postdetails();
    
    history.push("/mentors/mentorsdetails");
  };
  const postdetails = () => {
    axios.post(`https://json-server-mocker-masai-gopi.herokuapp.com/details`, {
      email: currentUser.email,
      mentor: data.title,
      time: displaytime,
      date: moment(dateState).format("MMMM Do YYYY"),
      image: data.avatar,
    });
  };

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
  const [dateState, setDateState] = React.useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  const [show, setShow] = React.useState(false);
  const [showd, setShowd] = React.useState(false);
  const [con1, setCon1] = React.useState(false);
  const [con2, setCon2] = React.useState(false);
  const [con3, setCon3] = React.useState(false);
  const [con4, setCon4] = React.useState(false);
  const [con5, setCon5] = React.useState(false);
  const [con6, setCon6] = React.useState(false);
  const [con7, setCon7] = React.useState(false);
  const [con8, setCon8] = React.useState(false);
  const [con9, setCon9] = React.useState(false);
  const [con10, setCon10] = React.useState(false);
  const [displaytime, setDisplaytime] = React.useState("");
  //   console.log(value1,show)
  const handledisplay = (dateState) => {
    setShow(true);
  };
  const handleconfirm1 = (e) => {
    setDisplaytime(e.target.value);
    setCon1((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon4(false);
    setCon5(false);
    setCon6(false);
    setCon7(false);
    setCon8(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm2 = (e) => {
    setDisplaytime(e.target.value);
    setCon2((prev) => !prev);
    setCon1(false);
    setCon3(false);
    setCon4(false);
    setCon5(false);
    setCon6(false);
    setCon7(false);
    setCon8(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm3 = (e) => {
    setDisplaytime(e.target.value);
    setCon3((prev) => !prev);
    setCon2(false);
    setCon1(false);
    setCon4(false);
    setCon5(false);
    setCon6(false);
    setCon7(false);
    setCon8(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm4 = (e) => {
    setDisplaytime(e.target.value);
    setCon4((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon1(false);
    setCon5(false);
    setCon6(false);
    setCon7(false);
    setCon8(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm5 = (e) => {
    setDisplaytime(e.target.value);
    setCon5((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon4(false);
    setCon1(false);
    setCon6(false);
    setCon7(false);
    setCon8(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm6 = (e) => {
    setDisplaytime(e.target.value);
    setCon6((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon4(false);
    setCon5(false);
    setCon1(false);
    setCon7(false);
    setCon8(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm7 = (e) => {
    setDisplaytime(e.target.value);
    setCon7((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon4(false);
    setCon5(false);
    setCon6(false);
    setCon1(false);
    setCon8(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm8 = (e) => {
    setDisplaytime(e.target.value);
    setCon8((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon4(false);
    setCon5(false);
    setCon6(false);
    setCon7(false);
    setCon1(false);
    setCon9(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm9 = (e) => {
    setDisplaytime(e.target.value);
    setCon9((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon4(false);
    setCon5(false);
    setCon6(false);
    setCon7(false);
    setCon8(false);
    setCon1(false);
    setCon10(false);
    setShowd(false);
  };
  const handleconfirm10 = (e) => {
    setDisplaytime(e.target.value);
    setCon10((prev) => !prev);
    setCon2(false);
    setCon3(false);
    setCon4(false);
    setCon5(false);
    setCon6(false);
    setCon7(false);
    setCon8(false);
    setCon9(false);
    setCon1(false);
    setShowd(false);
  };
  const handleshowd = () => {
    setShowd(true);
  };
  console.log(displaytime);
  console.log(dateState);
  return (
    <div
      className={styles.Calendar}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        margin: "auto",
      }}
    >
      {showd && (
        <p>
          <h1 style={{ textAlign: "center" }}>
            YOU HAVE SELECTED AN APPOINTMENT ON{" "}
            <b>{moment(dateState).format("MMMM Do YYYY")}</b> AT{" "}
            <b>{displaytime}</b>
          </h1>
        </p>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        {data !== null && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              marginRight: "30px",
              paddingRight: "30px",
              borderRight: "1px solid darkgray",
            }}
          >
            <div>
              <div>
                <img
                  src={data.avatar}
                  alt="img"
                  style={{
                    width: "90px",
                    height: "90px",
                    padding: "3px",
                    borderRadius: "90px",
                    border: "4px solid darkgray",
                  }}
                />
              </div>
              <br />
              <h1 style={{ fontWeight: "600" }}>{data.title}</h1>
              <br />
              <h3>{data.position}</h3>
              <br />
              <hr />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Service</p>
              <h2>
                {data.button1_title}
                <strong>{data.button1_titletime}</strong>
              </h2>
              <h4>{data.button1_text}</h4>
              <br />
            </div>
            <div>
              <h6>Rate</h6>
              <h5>₹NaN</h5>
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "fit-content",
          }}
        >
          <div onClick={() => handledisplay(dateState)}>
            <h1>Select a Date & Time</h1>
            <Calendar value={dateState} onChange={changeDate} />
          </div>
          <div>
            {!show && (
              <div style={{ display: "none" }}>
                {/* <TimePicker
        onChange={onChange1}
        value={value1}
        
      />  */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "30px",
                  }}
                  id="button_div"
                >
                  <button>11.00 AM</button>
                  <button>11.30 AM</button>
                  <button>12.00 PM</button>
                  <button>12.30 PM</button>
                  <button>01.00 PM</button>
                  <button>01.30 PM</button>
                  <button>03.00 PM</button>
                  <button>03.30 PM</button>
                  <button>04.00 PM</button>
                  <button>04.30 PM</button>
                </div>
              </div>
            )}

            {show && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "200px",
                  }}
                >
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    id="button_div"
                  >
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm1}
                      value="11:00 AM"
                    >
                      11:00 AM
                    </button>
                    {!con1 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con1 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm2}
                      value="11:30 AM"
                    >
                      11:30 AM
                    </button>
                    {!con2 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con2 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm3}
                      value="12:00 PM"
                    >
                      12:00 PM
                    </button>
                    {!con3 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con3 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm4}
                      value="12:30 PM"
                    >
                      12:30 PM
                    </button>
                    {!con4 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con4 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm5}
                      value="01:00 PM"
                    >
                      01:00 PM
                    </button>
                    {!con5 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con5 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm6}
                      value="01:30 PM"
                    >
                      01:30 PM
                    </button>
                    {!con6 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con6 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm7}
                      value="03:00 PM"
                    >
                      03:00 PM
                    </button>
                    {!con7 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con7 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm8}
                      value="03:30 PM"
                    >
                      03:30 PM
                    </button>
                    {!con8 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con8 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm9}
                      value="04:00 PM"
                    >
                      04:00 PM
                    </button>
                    {!con9 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con9 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{ width: "100%" }}
                      onClick={handleconfirm10}
                      value="04:30 PM"
                    >
                      04:30 PM
                    </button>
                    {!con10 && (
                      <button style={{ display: "none" }}>confirm</button>
                    )}
                    {con10 && (
                      <button style={{ width: "100%" }} onClick={handleshowd}>
                        confirm
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showd && (
        <button
          style={{ width: "20%", margin: "auto", marginBottom: "30px" }}
          onClick={book}
        >
          BOOK AN APPOINTMENT
        </button>
      )}
    </div>
  );
}

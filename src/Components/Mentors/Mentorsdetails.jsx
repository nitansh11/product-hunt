import React from "react";
import Styles from "./Mentors.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Mentorsdetails.module.css";
export const Mentorsdetails = () => {
  const [details, setDetails] = React.useState(null);
  const history = useHistory();
  React.useEffect(() => {
    getlist();
  }, []);
  const getlist = async () => {
    try {
      const res = await axios.get(
        "https://json-server-mocker-masai-gopi.herokuapp.com/details"
      );

      setDetails(res.data);
      details !== null && console.log(details);
    } catch (err) {
      console.log(err);
    }
  };
  const goback = (id) => {
    history.push(`/mentors`);
  };
  return (
    <div onClick={getlist}>
      <h1 style={{ textAlign: "center" }}>
        <b>YOUR MENTORS APPOINTMENT DETAILS</b>
      </h1>

      {details !== null &&
        details
          .sort((a, b) => {
            return a.date < b.date ? -1 : 1;
          })
          .sort((a, b) => {
            return a.date < b.date && a.time < b.time ? -1 : 1;
          })
          .sort((a, b) => {
            return a.date === b.date && a.time < b.time ? -1 : 1;
          })
          .map((item) => {
            return (
              <div
                style={{ width: "60%", margin: "auto", height: "fit-content" }}
              >
                <div
                  style={{
                    width: "400px",
                    margin: "20px",
                    float: "left",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #dd4f28",
                    padding: "20px",
                    backgroundColor: "#cc4d29",
                    boxShadow: "10px 10px 10px white",
                    borderRadius: "10px",
                  }}
                >
                  <div style={{ margin: "auto" }}>
                    <img
                      style={{ borderRadius: "150px" }}
                      src={item.image}
                      alt="img"
                    />
                  </div>
                  <h2 style={{ textAlign: "center" }}>
                    MENTOR:<b>{item.mentor}</b>
                  </h2>
                  <h2 style={{ textAlign: "center" }}>
                    DATE:<b>{item.date}</b>
                  </h2>
                  <h2 style={{ textAlign: "center" }}>
                    TIME:<b>{item.time}</b>
                  </h2>
                </div>
              </div>
            );
          })}
    </div>
  );
};

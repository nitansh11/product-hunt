import React from "react";
import Styles from "./Mentors.module.css";
import { useHistory} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux"
import "./Mentorsdetails.module.css"
export const Mentorsdetails = () => {
  const [details, setDetails] = React.useState(null);
  const history = useHistory();
  // const currentUser = useSelector((state) => state.authReducer.currentUser);
  // currentUser!==null && console.log(currentUser.email)
  React.useEffect(() => {
    getlist();
  }, []);
  const getlist = async () => {
    try {
      const res = await axios.get("https://json-server-mocker-masai-gopi.herokuapp.com/details");

      setDetails(res.data);
      details!==null && console.log(details)
    } catch (err) {
      console.log(err);
    }
  };
  const goback = (id)=>{
    history.push(`/mentors`)
  }
  return (
    <div  onClick={getlist}>
      <h3 style={{textAlign:"center"}}><b>YOUR MENTORS APPOINTMENT DETAILS</b></h3>
      <table>
  <tr>
    <th>MENTOR</th>
    <th>DATE</th>
    <th>TIME</th>
  </tr>
  {details!== null && details.sort((a,b)=>{
   return a.date <b.date ?-1 : 1
  }).sort((a,b)=>{
    return a.date===b.date && a.time < b.time ? -1 : 1
  }).map(item=>{
    return <tr>
    <td>{item.mentor}</td>
    <td>{item.date}</td>
    <td>{item.time}</td>
  </tr>
  })
}
  
</table>
      
    </div>
  );
};



/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export function CalendarPage() {
    const [dateState, setDateState] = React.useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    }
//   const [value, onChange] = React.useState(new Date());
//   const [value1, onChange1] = React.useState('10:00');
  const [show,setShow]=React.useState(false)
  const [showd,setShowd]=React.useState(false)
  const [con1,setCon1]=React.useState(false)
  const [con2,setCon2]=React.useState(false)
  const [con3,setCon3]=React.useState(false)
  const [con4,setCon4]=React.useState(false)
  const [con5,setCon5]=React.useState(false)
  const [con6,setCon6]=React.useState(false)
  const [con7,setCon7]=React.useState(false)
  const [con8,setCon8]=React.useState(false)
  const [con9,setCon9]=React.useState(false)
  const [con10,setCon10]=React.useState(false)
  const [displaytime,setDisplaytime]=React.useState("")
//   console.log(value1,show)
  const handledisplay=(dateState)=>{
    setShow(true)
    
  }
  const handleconfirm1=(e)=>{
    setDisplaytime(e.target.value)
      setCon1(prev=>!prev)
      setCon2(false)
      setCon3(false)
      setCon4(false)
      setCon5(false)
      setCon6(false)
      setCon7(false)
      setCon8(false)
      setCon9(false)
      setCon10(false)
      setShowd(false)
     
  }
  const handleconfirm2=(e)=>{
    setDisplaytime(e.target.value)
    setCon2(prev=>!prev)
    setCon1(false)
    setCon3(false)
    setCon4(false)
    setCon5(false)
    setCon6(false)
    setCon7(false)
    setCon8(false)
    setCon9(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm3=(e)=>{
    setDisplaytime(e.target.value)
    setCon3(prev=>!prev)
    setCon2(false)
    setCon1(false)
    setCon4(false)
    setCon5(false)
    setCon6(false)
    setCon7(false)
    setCon8(false)
    setCon9(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm4=(e)=>{
    setDisplaytime(e.target.value)
    setCon4(prev=>!prev)
    setCon2(false)
    setCon3(false)
    setCon1(false)
    setCon5(false)
    setCon6(false)
    setCon7(false)
    setCon8(false)
    setCon9(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm5=(e)=>{
    setDisplaytime(e.target.value)
    setCon5(prev=>!prev)
    setCon2(false)
    setCon3(false)
    setCon4(false)
    setCon1(false)
    setCon6(false)
    setCon7(false)
    setCon8(false)
    setCon9(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm6=(e)=>{
    setDisplaytime(e.target.value)
    setCon6(prev=>!prev)
    setCon2(false)
    setCon3(false)
    setCon4(false)
    setCon5(false)
    setCon1(false)
    setCon7(false)
    setCon8(false)
    setCon9(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm7=(e)=>{
    setDisplaytime(e.target.value)
    setCon7(prev=>!prev)
    setCon2(false)
    setCon3(false)
    setCon4(false)
    setCon5(false)
    setCon6(false)
    setCon1(false)
    setCon8(false)
    setCon9(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm8=(e)=>{
    setDisplaytime(e.target.value)
    setCon8(prev=>!prev)
    setCon2(false)
    setCon3(false)
    setCon4(false)
    setCon5(false)
    setCon6(false)
    setCon7(false)
    setCon1(false)
    setCon9(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm9=(e)=>{
    setDisplaytime(e.target.value)
    setCon9(prev=>!prev)
    setCon2(false)
    setCon3(false)
    setCon4(false)
    setCon5(false)
    setCon6(false)
    setCon7(false)
    setCon8(false)
    setCon1(false)
    setCon10(false)
    setShowd(false)
}
const handleconfirm10=(e)=>{
    setDisplaytime(e.target.value)
    setCon10(prev=>!prev)
    setCon2(false)
    setCon3(false)
    setCon4(false)
    setCon5(false)
    setCon6(false)
    setCon7(false)
    setCon8(false)
    setCon9(false)
    setCon1(false)
    setShowd(false)
}
const handleshowd=()=>{
    setShowd(true)
}
console.log(displaytime)
  console.log(dateState)
  return (

    <div style={{display:"flex",flexDirection:"row"}}>
        <div>
          <h1>hbmjbjmbhk</h1>
        </div>
        <div style={{display:"flex",flexDirection:"row",width:"fit-content",border:"3px solid black"}}>
    <div onClick={()=>handledisplay(dateState)}>
   
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
      </div>
      <div>
    <p><b style={{paddingRight:"10px"}}>{moment(dateState).format('MMMM Do YYYY')}</b><b>{showd && displaytime}</b></p>
     {!show && <div style={{display:"none" }}> 
      {/* <TimePicker
        onChange={onChange1}
        value={value1}
        
      />  */}
      <div style={{display:"flex",flexDirection:"column"}}>
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
} 

{show && <div > 
    <div style={{display:"flex",flexDirection:"column",width:"200px"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm1}value="11:00 PM">11:00 PM</button>
            {!con1 &&<button style={{display:"none" }}>confirm</button>}
            {con1 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
      
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm2} value="11:30 PM">11:30 PM</button>
            {!con2 &&<button style={{display:"none" }}>confirm</button>}
            {con2 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm3} value="12:00 PM">12:00 PM</button>
            {!con3 &&<button style={{display:"none" }}>confirm</button>}
            {con3 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm4} value="12:30 PM">12:30 PM</button>
            {!con4 &&<button style={{display:"none" }}>confirm</button>}
            {con4 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm5} value="01:00 PM">01:00 PM</button>
            {!con5 &&<button style={{display:"none" }}>confirm</button>}
            {con5 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}}  onClick={handleconfirm6} value="01:30 PM">01:30 PM</button>
            {!con6 &&<button style={{display:"none" }}>confirm</button>}
            {con6 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm7} value="03:00 PM">03:00 PM</button>
            {!con7 &&<button style={{display:"none" }}>confirm</button>}
            {con7 &&<button style={{width:"100%"}} onClick={handleshowd} >confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm8} value="03:30 PM">03:30 PM</button>
            {!con8 &&<button style={{display:"none" }}>confirm</button>}
            {con8 &&<button style={{width:"100%"}}  onClick={handleshowd}>confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}}  onClick={handleconfirm9} value="04:00 PM">04:00 PM</button>
            {!con9 &&<button style={{display:"none" }}>confirm</button>}
            {con9 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{width:"100%"}} onClick={handleconfirm10} value="04:30 PM">04:30 PM</button>
            {!con10 &&<button style={{display:"none" }}>confirm</button>}
            {con10 &&<button style={{width:"100%"}} onClick={handleshowd}>confirm</button>}
            </div>
      </div>
       </div>
} 
</div>
    </div>
    </div>
  );
}
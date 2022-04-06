import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/RecordList.css';
 
const Record = (props) => (
   <div className="items">
      

<div>Name: {props.record.ename}</div>
<div>Designation: {props.record.designation}</div>
<div>Contact: {props.record.contact}</div>
<div>Skills: {props.record.skills}</div>
<div>Date of Birth: {props.record.dob}</div><br/>

</div>
);





export default function RecordList() {
    const [records, setRecords] = useState([]);
 //fetch data
    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/record/`);
      
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
          const records = await response.json();
          setRecords(records);
        }
      
        getRecords();
      
        return;
},[records.length]);
  
 
   
// map data
  function recordList() {
    return records.map((record,index) => {
      return (
        <div>
          <div id="count">Employee# {index+1}</div>
          <Record record={record} key={record._id} />
          </div>
        
        );
    });
  }

  

   return(
      <div >
          <h2>Employee Record</h2>
          <button className='btn1'><NavLink className="link" to="/">Add Data </NavLink></button> 
          <button className='btn1'>Download Data </button>
           <div className="list">{recordList()}</div>
      </div>

   );
}
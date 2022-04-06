import React, { useState } from "react";
import  '../styles/create.css';
import { NavLink } from "react-router-dom";



export default function Create() {
 const [form, setForm] = useState({
   ename: "",
   designation: "",
   contact: "",
   skills:"",
   dob:"",
   });
  
 
 //udpate state
 
 function updateForm(value){
   
   return setForm((prev) => {
     return {...prev,...value};
   });

 }

 
 //handle form submission
 async function onSubmit(e) {
  e.preventDefault();


  // add a new record to the database.
  const newPerson = { ...form };
  
 await fetch("http://localhost:5000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  }).then(()=>{
    alert("Data Inserted");
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ ename: "", designation: "", contact: "" ,skills:"",dob:""});
  
}

 //Form display
  return(
    <><h1>Employee Data</h1>

    <div className="container">
      
      <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="ename">Name </label>
         <input
           required
           type="text"
           className="form-control"
           id="name"
           value={form.ename}
           onChange={(e) => updateForm({ ename: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="designation">Designation </label>
         <input
           required
           type="text"
           className="form-control"
           id="designation"
           value={form.designation}
           onChange={(e) => updateForm({ designation: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="contact">Contact</label>
         <input
           type="tel"
           className="form-control"
           id="contact"
           placeholder="Phone Number" 
           required
           value={form.contact}
           onChange={(e) => updateForm({ contact: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="skills">Skills</label>
         <input
           type="text"
           className="form-control"
           id="skills"
           value={form.skills}
           onChange={(e) => updateForm({ skills: e.target.value })}
         />
         <button>+</button>
       </div>

       <div className="form-group">
         <label htmlFor="dob">Date of Birth</label>
         <input
           type="date"
           className="form-control"
           id="dob"
           value={form.dob}
           onChange={(e) => updateForm({ dob: e.target.value })}
         />
       </div>

       <div className="form-group">
         <input
           type="submit"
           value="Add Data"
           className="btn"
         />
       
         
         
       </div>
       </form>
       <button className='btn'><NavLink className="link" to="/record">View Data </NavLink></button> 
       </div>
</>      
    
    
  );
}
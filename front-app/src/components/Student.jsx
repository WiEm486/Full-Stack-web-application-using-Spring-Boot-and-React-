import { Button, Container, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const Student = () => {
    const [name, setName]=useState("");
    const [address, setAddress]=useState("");
    const [students,setStudents]=useState([])
     const handleSubmit=()=>{
        const student={name,address};
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{console.log("Student added successfuly")})
     
     }

     const getAllStudents = () => {
        fetch("http://localhost:8080/student/getAll")
          .then(res => res.json())
          .then((result) => setStudents(result))
          .catch((error) => {
            console.error("Error fetching students:", error);
            // Handle the error here, e.g., display an error message to the user
          });
      };
      
   useEffect(()=>{
   getAllStudents()

   },[students])
  return (
    <div>
   <Container style={{marginTop:"2vw", gap:"1vh", display:"flex", flexDirection:"column",justifyContent:"center" , width:"50vw",  boxShadow:" 1px 1px 1px #888888",height:"40vh"}}>

   <h1>Add Student</h1>
   <TextField id="outlined-basic" label="Student Name" variant="outlined" value={name} fullWidth onChange={(e)=>{ setName(e.target.value)}}/>
   <TextField id="outlined-basic" label="Student Address" variant="outlined" value={address} onChange={(e)=>{setAddress(e.target.value)}}  fullWidth/>
   <Button variant="contained" onClick={handleSubmit}>Add</Button>

   </Container>
   <h1>List Of Students </h1>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2vh"}}>
    {students.map((item,index)=>{
   return <div  style={{fontSize:"1em" , width:"20vw" , height:"5vw",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center", boxShadow:" 1px 1px 1px #888888"}} key={index}>{item.name}</div>
   })}
    </div>
 
    </div>
  )
}

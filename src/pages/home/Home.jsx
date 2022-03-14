import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import React, { useEffect, useState } from 'react';


export default function Home() {

 const [user,setUser] = useState([]);
 const[name,setName]=useState('')
 const[students,setStudents]=useState([])

 useEffect(()=>{
  fetch("http://localhost:8080/helpdesk/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])

  return (
    <div className="home">      
      <div className="main__title">
          <img src="http://avatars.design/wp-content/uploads/2016/09/28_GIF.gif" alt="hello" />
          <div className="main__greeting">
            <h1>Welcome to FISH LANDIA..</h1>
          </div>
        </div>
      <FeaturedInfo /> 
      <div className="problems">
        <h4>PROBLEMS</h4>
        {students.map(student=>(
            <p style={{margin:"10px",padding:"1px", textAlign:"left"}} key={student.id}>
             Sl.No: {student.id} &nbsp;
             Name: {student.name} &nbsp;&nbsp;
             Problem: {student.problem} &nbsp;
             
            </p>
          ))
          }
      </div>

    </div>
  );
}
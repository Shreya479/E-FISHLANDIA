import React, {useEffect,useState} from 'react';

const Helpdesk = () =>{
 
    
    const[name,setName]=useState('')
    const[problem,setProblem]=useState('')
    const[stock,setstock]=useState('')
    const[students,setStudents]=useState([])

   const handleClick=(e)=>{
    e.preventDefault()
    const student={name,problem,stock}
    console.log(student)
    
    fetch("http://localhost:8080/review/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student) //jsobject to json string

  }).then(()=>{
    console.log("New Problem added")
  })
}

useEffect(()=>{

},[])

  return (
    <div><h2>Helpdesk</h2>
    
    <div class="grid-container">
    <div class="grid-item">
    <div className='add_wishlist'>
    <u style={{color:"blacke"}}>Enter your Problem</u>
  
  <form  noValidate autoComplete="off">
  
  <input type="text" id="outlined-basic" placeholder="Enter name" label="Student Name" variant="outlined" fullWidth 
  value={name} 
  onChange={(e)=>setName(e.target.value)}
  /><br/>
  
  <input type="text" id="outlined-basic" placeholder="Enter Problem" label="Student Adress" variant="outlined" fullWidth
  value={problem}
  onChange={(e)=>setProblem(e.target.value)}/><br/>
  <input type="button" id="wishlist_btn" value="Add" variant="contained" color="secondary" onClick={handleClick}/>
  </form>
  </div>


    </div>
    <div class="grid-container2">
     <div class="grid-item">
     Payments and Billing
     </div>
    <div class="grid-item">Signin Help</div>  
    <div class="grid-item">General</div>

  </div>
  </div>

</div>
  );
}


export default Helpdesk;
import React, {useEffect,useState} from 'react';

const Helpdesk = () => {
    const[name,setName]=useState('')
    const[userid,setUserid]=useState('')
    const[email,setEmail]=useState('')
    const[problem,setProblem]=useState('')

  

   const handleClick=(e)=>{
    e.preventDefault()
    const student={name,userid,email,problem,}
    console.log(student)
    
    fetch("http://localhost:8080/helpdesk/addHelpdesk",{
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
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Question ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/assets/image/messages.png" alt="" height='300' width='300' />
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" value={name}
               onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">Email</label>
              <input type="text" className="form-control"  placeholder="example@gmail.com" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">UserId</label>
              <input type="text" className="form-control"  placeholder="UserId" 
              value={userid}
              onChange={(e)=>setUserid(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={problem}
              onChange={(e)=>setProblem(e.target.value)}></textarea>
            </div>
            <button type="submit" className='btn btn-outline-primary' onClick={handleClick}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Helpdesk
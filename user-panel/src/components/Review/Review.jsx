import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'
import { useDispatch } from 'react-redux'
import {FaStar} from "react-icons/fa"; //npm install react-icons



const Review = () => {
  
    const[name,setName]=useState('')
    const[review,setReview]=useState('')
    const [rating, setRating] = useState(null)
    const [hover,setHover] = useState(null)
    const[students,setStudents]=useState([])

    const prodid = useParams()
    const proDetail = Data.filter(x => x.id == prodid.id)
    const product = proDetail[0]
    console.log(product)

   /* const shoot = () => {
        alert("Thank you for your Review!!");
      }*/

   // const dispatch = useDispatch()
    
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,review,rating}
        console.log(student)
        fetch("http://localhost:8080/review/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student) //jsobject to json string
    
      }).then(()=>{
        console.log("New Review added")
      })
    }
    
    useEffect(()=>{
      fetch("http://localhost:8080/review/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setStudents(result);
      }
    )
    },[])

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt="" height={400} />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <h6 className='display-5 fw-bold'>{product.title}  ${product.price}</h6>
                        <hr />
                        <div  className="review_grid">
                        
                        <h3> Give Review</h3>
                        <input type ="text" id="review_name" placeholder='Write Name'  onChange={(e)=>setName(e.target.value)} /><br/>
                        <input type ="text" id="review_input" placeholder='Write Review'  onChange={(e)=>setReview(e.target.value)} /><br/>

                        <div className='review_star'>
                        {[...Array(5)].map((star,i)=>{
                            const ratingValue =i+1;
                            return(
                                <label>
                                <input type="radio" name="rating"
                                value={ratingValue}
                                onClick={() =>setRating(ratingValue)}
                                // onChange={(e)=>setRating(e.target.value)}
                                 />
                                  <FaStar className="star"
                                  color={ratingValue <=(hover || rating) ? "#ffc107" : "#e4e5e9"}
                                  size={25} 
                                  onMouseEnter={() =>setHover(ratingValue)}
                                  onMouseLeave={() =>setHover(null)}
                                 />
                                </label>
                            );
                        })}
                        <br/>The rating is {rating}
                      </div>
                      <input type="button" id="review_btn" value="Submit" onClick={handleClick}/> <br/><br/></div>

                    </div>
                </div>
            </div>
            <h4>Review</h4>
            <div className='display_review'>
            
            
            {students.map(student=>(
                <p style={{margin:"10px",padding:"1px", textAlign:"left"}} key={student.id}>
                
                 Sl.No: {student.id} &nbsp;
                 Name: {student.name} &nbsp;
                 Review: {student.review} &nbsp;
                 Rating: {student.rating} 
                 
                </p>
              ))
              }
            </div>
        </div>
    )
}

export default Review
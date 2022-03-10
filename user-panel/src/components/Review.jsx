import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../redux/action/index'
import {FaStar} from "react-icons/fa";



const Review = () => {
    const[name,setName]=useState('')
    const[review,setReview]=useState('')
    const [rating, setRating] = useState(null)
    const [hover,setHover] = useState(null)
    const prodid = useParams()
    const proDetail = Data.filter(x => x.id == prodid.id)
    const product = proDetail[0]
    console.log(product)

    const shoot = () => {
        alert("Thank you for your Review!!");
      }

    const dispatch = useDispatch()


    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt="" height={330} />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <h6 className='display-5 fw-bold'>{product.title}</h6>
                        <hr />
                        <h6 className='my-3'>$ {product.price}</h6>
                        
                        <div  className="review-grid">
                        <h3> Give Review</h3>
                        <input type ="text" id="review_name" placeholder='write name'  onChange={(e)=>setName(e.target.value)} /><br/>
                        <input type ="text" id="review_input" placeholder='write review'  onChange={(e)=>setReview(e.target.value)} /><br/></div>

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
                      <input type="button" id="review_btn" value="submit" /*onClick={handleClick}*/onClick={shoot}/> <br/><br/>

                    </div>
                </div>
            </div>
            <div className='display_review'>
            <table >
            <tr>
              <th>NAME</th>
              <th>RATING</th>
              <th>REVIEW</th>
              <th></th>
            </tr>
            <tr>
              <td>Emil</td>
              <td>4</td>
              <td>Tasty</td>
            </tr>
            <tr>
              <td>HEHE</td>
              <td>5</td>
              <td>Too Good!</td>
            </tr>
            <tr>
            <td>HARRY</td>
            <td>5</td>
            <td>Too Good!</td>
          </tr>
          <tr>
          <td>RUPERT</td>
          <td>5</td>
          <td>Too Good!</td>
        </tr>
        <tr>
        <td>HARMOINE</td>
        <td>3</td>
        <td>Too Good!</td>
      </tr>
      <tr>
      <td>CHANDLER</td>
      <td>5</td>
      <td>Too Good!</td>
    </tr>
    <tr>
    <td>JOEY</td>
    <td>4</td>
    <td>Too Good!</td>
  </tr> 
  <tr>
  <td>JON SNOW</td>
  <td>5</td>
  <td>Too Good!</td>
</tr> 
<tr>
<td>SHERLOCK</td>
<td>4</td>
<td>Too Good!</td>
</tr>
          </table></div>
        </div>
    )
}

export default Review
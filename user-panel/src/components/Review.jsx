import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'
import {FaStar} from "react-icons/fa"; //npm install react-icons
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";


const Review = () => {
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
   
    {
      field: 'name',headerName: 'Full Name', width: 150, editable: true,
    },
    {
      field: 'review',headerName: 'Review',width: 180,editable: true,sortable:false
    },
    
    {
      field: 'rating',
      headerName: 'Rating',
      description: '',
      sortable: true,
      width: 160,
      
    },
    {
      field: "action", headerName: "Action",width: 150,
    renderCell: (params) => {
    return (
          <p>
            <DeleteOutline
              onClick={() => handleDelete(params.id)}
            /> &nbsp;
            
           
          </p>
        );
      },
    }
  ];

    const[name,setName]=useState('')
    const[review,setReview]=useState('')
    const [rating, setRating] = useState(null)
    const [hover,setHover] = useState(null)
    const[data,setData]=useState([])

    const prodid = useParams()
    const proDetail = Data.filter(x => x.id == prodid.id)
    const product = proDetail[0]
    console.log(product)


    
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,review,rating}
        console.log(student)
        fetch("http://localhost:8080/review/addReview",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student) //jsobject to json string

      }).then(()=>{
        console.log("New Review added")
        getReviews()
      })
    }

    const[tableData,setTableData]= useState([])
  useEffect(() => {
    getReviews()
}, [])
  console.log(tableData)

function getReviews(){
  fetch("http://localhost:8080/review/Reviews")
      .then((data) => data.json())
      .then((data) => setTableData(data))
}

const handleDelete = (id) => {
fetch(`http://localhost:8080/review/delete/${id}`,
{
  method:'DELETE'
}).then((result)=>{
  result.json().then((resp)=>{
    console.warn(resp)
    getReviews()
  })
})
};

  /*const handleUpdate = (id) => {
    setData(data.filter((item) => item.id !== id));
  };*/
  
    
    

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
                      <input type="button" id="review_btn" value="Add" onClick={handleClick}/> <br/><br/></div>

                    </div>
                </div>
            </div>
            <h4>Review</h4>
            <div className="problems_display">
      <div style={{ height: 300, width: 900, margin:'1px 400px' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
      />
    </div>
      </div>
        </div>
    )
}

export default Review
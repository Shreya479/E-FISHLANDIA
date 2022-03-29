import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../redux/action/index'
import { Link } from "react-router-dom";


const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const prodid = useParams()
    const proDetail = Data.filter(x => x.id == prodid.id)
    const product = proDetail[0]
    console.log(product)

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt="" height={450} width={600} />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <h1 className='display-5 fw-bold'>{product.title}</h1>
                        <hr />
                        <h2 className='my-3'>$ {product.price}</h2>
                        
                        <Link to="reviews" style={{paddingTop:"10px",paddingBottom:"10px"}} className="review">Reviews</Link>
                        <p>{product.desc}</p>
                        <div class="btn-group" role="group">
                        <button onClick={() => handleCart(product)} className='btn btn-outline-primary m-4 rounded btn-block'>{cartBtn}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail

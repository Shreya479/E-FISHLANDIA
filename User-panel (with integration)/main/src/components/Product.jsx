import React from 'react'
//import Data from '../Data'
import { Link } from 'react-router-dom'
import { useState,useEffect } from "react";
const Product = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
      fetch("https://8080-acddafabaffddeefcfbeddbecdddbadefcdd.examlyiopb.examly.io/products")
        .then((data) => data.json())
        .then((data) => setData(data))
  
    }, [])

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-5" key={item.id} style={{ width: "18rem" }}>
                <img src={item.image} className="card-img-top" alt={item.productName} height={250} width={80}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="lead">$ {item.price}</p>
                    <Link to={`/product/${item.id}`} className="btn btn-outline-primary">Buy Now</Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>PRODUCTS</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {Data.map(cardItem)}
                </div>
            </div>
        </div>
    )
}
export default Product
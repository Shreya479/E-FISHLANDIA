import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    const state = useSelector((state) => state.addItem)
    return (
        <>
            <Link to='' className="btn btn-outline-primary mx-2">
                <FontAwesomeIcon icon={faShoppingCart} className='me-2' />
                Cart ({state.length})
            </Link>
        </>
    )
}

export default CartBtn
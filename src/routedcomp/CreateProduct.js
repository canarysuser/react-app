import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProduct() {
    return (
        <div>
            <h3>Create Product</h3>
            <Link to="/products/list" className="btn btn-secondary btn-lg">Back to List</Link>
           
        </div>
    )
}

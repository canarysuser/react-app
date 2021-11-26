import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {APIService} from "./ProductAPIService"

export default function ListProducts() {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        if(isLoading){
            let list = await APIService.getAllProducts(); 
            setItems(list);
            setIsLoading(false);
        }
    }, [isLoading])

    if(isLoading) 
        return <div className="display-1">Loading....</div>

    return (
            
        // <div>
        //     <h3></h3>
            
        //     <Link to="/products/update/1" className="btn btn-lg btn-success">Edit Product</Link>
        //     <Link to="/products/details/1" className="btn btn-lg btn-info">Product Details</Link>
        // </div>
         <div className="card shadow m-2">
         <div className="card-header bg-danger p-2 text-center text-white d-flex">
             <div className="flex-grow-1 h3">Product List </div>
             <div>
             <Link to="/products/create" className="btn btn-light btn-lg">Add new Product</Link>
             </div>
         </div>
         <div className="card-body px-5" style={{overflow:"auto", height:"400px"}}>
             <table className="table table-striped">
                 <thead>
                     <tr><th>Product Name</th><th>Unit Price</th><th></th></tr>
                 </thead>
                 <tbody>
                     {
                         items && items.map( (value, index) => (
                             <tr key={index}>
                                 <td>{value.productName}</td>
                                 <td>{value.unitPrice}</td>
                                 <td>
                                     <Link to={`/products/details/${value.productId}`} 
                                            className="btn btn-sm btn-dark">
                                         Select
                                     </Link>
                                     <Link to={`/products/update/${value.productId}`} 
                                        className="btn btn-sm btn-success">
                                            Modify
                                    </Link>
                                 </td>
                             </tr>
                         ))
                     }
                 </tbody>
             </table>
         </div>
     </div>
    )
}

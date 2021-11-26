import React from 'react'
import { getAllProducts, getProductDetails } from '../data/ProductDataService'

export default function ProductList( props ) {
    
    
    const handleClick = (productId) => { 
        //console.log(productId);
        // let item = getProductDetails(productId); 
        // if(item)
        //     console.log(item); 
        // else 
        //     console.error("Nothing found.");

        props.chooseItem(productId);

    }
    return (
        <div className="card shadow m-2">
            <div className="card-header bg-danger p-2 text-center text-white">
                Product List
            </div>
            <div className="card-body" style={{overflow:"auto", height:"400px"}}>

                <table className="table table-striped table-dark m-3">
                    <thead>
                        <tr><th>Product Name</th><th>Unit Price</th><th></th></tr>
                    </thead>
                    <tbody>
                        {
                            props.productList && 
                            props.productList.map( (value, index) => (
                                <tr key={index}>
                                    <td>{value.productName}</td>
                                    <td>{value.unitPrice}</td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary"
                                            onClick={()=>handleClick(value.productId)}>
                                            Select
                                        </button>
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

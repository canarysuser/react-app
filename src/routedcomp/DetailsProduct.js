import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APIService } from './ProductAPIService';
import {useParams} from 'react-router'

export default function DetailsProduct() {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams("id");

    useEffect(async () => {
        if(isLoading){
            var item = await APIService.getProductDetails(id);
            setState(item); 
            setIsLoading(false); 
        }
    }, [isLoading])

    if(isLoading) 
        return <div className="display-1">Loading....</div>

    return (
        // <div>
        //     <h3>Product Details</h3>
        //     <Link to="/products/list" className="btn btn-secondary btn-lg">Back to List</Link>
        // </div>
        <div className="card shadow m-2">
        <div className="card-header bg-info h3 text-center p-2">
            Product Details
        </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="productId">Product Id</label>
                    <input type="text" name="productId" value={state.productId} 
                        onChange={()=>{}} readOnly
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" value={state.productName}
                       onChange={()=>{}} readOnly
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="unitPrice">Unit Price</label>
                    <input type="text" name="unitPrice" value={state.unitPrice}
                       onChange={()=>{}} readOnly
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="unitsInStock">Stock Level</label>
                    <input type="text" name="unitsInStock" value={state.unitsInStock}
                       onChange={()=>{}} readOnly
                        className="form-control"/>
                </div>
                <div className="btn-group mt-3">
                    <Link to={`/products/update/${state.productId}`} 
                        className="btn btn-success">
                            Modify
                    </Link>
                    <Link to="/products/list" 
                        className="btn btn-secondary">
                            Back to List
                    </Link>
                </div>
            </form>
        </div>

        </div>
    )
}

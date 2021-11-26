import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { APIService } from './ProductAPIService';
import {useParams} from 'react-router'

export default function UpdateProduct() {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const[canRedirect, setCanRedirect] = useState(false);
    const {id} = useParams("id");

    useEffect(async () => {
        if(isLoading){
            var item = await APIService.getProductDetails(id);
            setState(item); 
            setIsLoading(false); 
        }
    }, [isLoading])

    const formSubmit= async (e) => { 
        e.preventDefault();
        var response = await APIService.updateProduct(state); 
        setCanRedirect(true);
    }
    const handleChange = (e) => { 
        setState({
            ...state, 
            [e.target.name]: e.target.value
        })
    }

    const clearFields = (e) => { 
        setIsLoading(true);
    }
    if(canRedirect)
        return <Navigate replace to="/products/list"/>

    if(isLoading) 
        return <div className="display-1">Loading....</div>

    return (
        // <div>
        //     <h3>Update Product</h3>
        //     <Link to="/products/list" className="btn btn-secondary btn-lg">Back to List</Link>
        // </div>
        <div className="card shadow m-2">
        <div className="card-header bg-info h3 text-center p-2">
            Update Product
        </div>
        <div className="card-body">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label htmlFor="productId">Product Id</label>
                    <input type="text" name="productId" value={state.productId} 
                        onChange={()=>{}} readOnly
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName" value={state.productName}
                        onChange={handleChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="unitPrice">Unit Price</label>
                    <input type="text" name="unitPrice" value={state.unitPrice}
                        onChange={handleChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="unitsInStock">Stock Level</label>
                    <input type="text" name="unitsInStock" value={state.unitsInStock}
                        onChange={handleChange}
                        className="form-control"/>
                </div>
                <div className="btn-group mt-3">
                    <input type="submit" name="submit" value="Submit" 
                        className="btn btn-primary"/>

                    <input type="reset" name="clear" value="Clear"
                        onClick={clearFields}
                     className="btn btn-secondary"/>

                </div>
            </form>
        </div>
        </div>
    )
}

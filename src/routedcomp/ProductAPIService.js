import { getAllProducts } from "../data/ProductDataService";

const productUrl = "http://localhost:5000/products"; 


export const APIService = { 

    getAllProducts : async () =>{
        var response = await fetch (productUrl);
        var result = await response.json(); 
        return result;
    }, 
    getProductDetails: async (productId) => { 
        var response = await fetch (`${productUrl}/${productId}`);
        var result = await response.json(); 
        return result;
    },
    createProduct: async (productObj) => { 
        var items = getAllProducts(); 
        productObj.productId = items.length + 1
        var requestOptions = { 
            method: 'POST', 
            body : JSON.stringify(productObj),
            headers: { 'Content-Type': 'application/json'}
        }
        var response = await fetch (productUrl, requestOptions);
        var result = response.json(); 
        return result;
    }, 
    updateProduct: async (productObj) => { 
        var requestOptions = { 
            method: 'PUT', 
            body : JSON.stringify(productObj),
            headers: { 'Content-Type': 'application/json'}
        }
        var response = await fetch (`${productUrl}/${productObj.productId}`, requestOptions);
        var result = response.json(); 
        return result;
    }

}
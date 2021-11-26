import React, { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

const defaultSelectedItem = {productId:0, productName:'', unitPrice:0, unitsInStock:0};
export default function ProductHomeFn() {

    const [productState, setProductState] = useState({items:[], selectedItem:defaultSelectedItem});

    const [hasChanges, setHasChanges] = useState(true)

    useEffect(() => {
        if(hasChanges){
            loadProducts(); 
            setHasChanges(false);
        }
        
    }, [productState]);
    //componentDidMount, componentDidUpdate, shouldComponentUpdate, getDerivedStateFromProps,
    //componentWillUnmount, 

    const productUrl = "http://localhost:5000/products"; 
    const loadProducts = () => { 
        fetch(productUrl)
        .then((response) => response.json())
        .then((result)=>{
             setProductState({
                ...productState,
                items: result
            })
            setHasChanges(true);
        }).catch((err)=>{
            console.error(err)
        })
    }


    const chooseItem = async (productId) => { 
        var response = await fetch(`${productUrl}/${productId}`); 
        var result = await response.json(); 
        setProductState({
            ...productState, 
            selectedItem: result
        });
        setHasChanges(true);
    }
    const updateItem = async (productObj) => { 
        console.log('updateItem', productObj)
        var pUrl= productUrl;
        var requestOptions={}; 
        if(productObj.productId==0){
            requestOptions.method = 'POST';
            productObj.productId = productState.items.length + 1;
        } else { 
            requestOptions.method='PUT';
            pUrl += `/${productObj.productId}`;
        }
        requestOptions={
            ...requestOptions, 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(productObj)
        };
       
        var response = await fetch(pUrl, requestOptions)
        var result = await response.json(); 
        setProductState({...productState, selectedItem: result});
        setHasChanges(true);
    }

    const clearItem = () => { 
        setHasChanges(true);
    }

    return (
         <div className="card-group">
                <ProductList productList={productState.items} 
                             chooseItem={chooseItem}/>
                <ProductDetails selectedItem={productState.selectedItem}
                    update={updateItem}
                    clearItem={clearItem}/>
            </div>
    )
}

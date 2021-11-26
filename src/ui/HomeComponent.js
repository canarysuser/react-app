import React, { useState } from 'react'
import { AppHeader, PageComponent } from '../App'

export default function HomeComponent() {

    const [productName, setProductName] = useState('markers'); 
    const [price, setPrice] = useState(100);
    const [headers, setHeaders] = useState({title:'Home page', subtitle:'The application home page'});
    
    return (
        <div className="mt-5">
            <AppHeader title={headers.title}
                subtitle={headers.subtitle}/>
            <PageComponent />
        <div  className="p-5 bg-info">
            <h5>(Home Component)</h5>
            <p>
            Product Details :
            {productName},
            {price}
            </p>
            <button onClick={()=>setPrice(price+100)} className="btn btn-warning btn-lg">
                Increase Price
            </button>
            </div>
        </div>
    )
}

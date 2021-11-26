import React, { Component } from 'react'
import { getAllProducts, getProductDetails, updateProductDetails } from '../data/ProductDataService';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

export class ProductHome extends Component {
    constructor(props) { 
        super(props);

        this.state = { 
            items: [], 
            selectedItem: {}
        }
    }
    render() {
        console.log('ProductHome component rendered.')
        return (
            <div className="card-group">
                <ProductList productList={this.state.items} 
                             chooseItem={this.chooseItem}/>
                <ProductDetails selectedItem={this.state.selectedItem}
                    update={this.updateItem}
                    clearItem={this.clearItem}/>
            </div>
        )
    }
    //Custom Events 
    chooseItem = async (productId) => {
        // var item = getProductDetails(productId); 
        // if(item) { 
        //     this.setState({
        //         ...this.state, 
        //         selectedItem: item
        //     });
        // }
        var response = await fetch(`${this.productUrl}/${productId}`); 
        var result = await response.json(); 
        this.setState({
            ...this.state, 
            selectedItem: result
        });
    }
    updateItem = (productObj) => { 
        //pass this object to the DataService and update the list. 
        updateProductDetails(productObj);
        //once the list is updated, get the updated listof items from the service again
        this.loadProducts();
    }
    loadProducts() { 
        var items = getAllProducts(); 
        //and 
        this.setState({
            ...this.state,
            items: items, 
            selectedItem: { productId:0, productName:'', unitPrice:0, unitsInStock:0}
        });
    }
    clearItem= () => { 
        this.loadProducts();
    }
    productUrl = "http://localhost:5000/products";
    //Mounting stage
    componentDidMount() { 
        //console.log('ProductHome componentDidMount')
        //this.loadProducts(); 
        //JavaScript fetch() API is used to retrieve data from the server. 
        //fetch API is a Promise-based API. 
        //Promise is a guarantee of executing in future. 
        fetch(this.productUrl)
        .then((response) => response.json())
        .then((result)=>{
             this.setState({
                ...this.state,
                items: result
            })
        }).catch((err)=>{
            console.error(err)
        })
    }
    //Updating stage 
    componentDidUpdate() { 
        console.log('ProductHome Component updated: ', this.state);
    }
}

export default ProductHome


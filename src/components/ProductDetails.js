import React, { Component } from 'react'

export class ProductDetails extends Component {
    constructor(props) { 
        super(props);

        // this.state ={
        //     productId: 101, 
        //     productName: 'Sample', 
        //     unitPrice: 100, 
        //     unitsInStock:55
        // }
        this.state = {...props.selectedItem}; //selectedItem: { } 
        //Bind the event to the class "this" pointer 
        this.handleChange = this.handleChange.bind(this); 
        //console.log('constructor', this.state)
    }
    static getDerivedStateFromProps(props, state) { 
        console.log('ProductDetails.getDerivedState ', props, state);
        if(props.selectedItem.productId !== state.productId){
            return { 
                ...props.selectedItem
            }
        } 
        return null;
    }
    //experimental feature for correctly handling the "this" pointer, using the arrow function
    //class field syntax - not required to bind the "this" pointer as it is correctly handled
    formSubmit  = (e) => { 
        e.preventDefault(); 
        //not submitting to any location as of now, we 
        //console.log('form submit called. ', this.state);
        this.props.update(this.state);
    }

    handleChange(e) { 

        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
        //console.log(this.state)
    }

    clearFields = (e)=>{
        //e.preventDefault(); 
         this.props.clearItem();
    }
    render() {
        console.log(JSON.stringify(this.state))
        return (
            <div className="card shadow m-2">
                <div className="card-header bg-info h6 text-center p-2">
                    Product Details
                </div>
                <div className="card-body">
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label htmlFor="productId">Product Id</label>
                            <input type="text" name="productId" value={this.state.productId} 
                                onChange={()=>{}} readOnly
                                className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" name="productName" value={this.state.productName}
                                onChange={this.handleChange}
                                className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="unitPrice">Unit Price</label>
                            <input type="text" name="unitPrice" value={this.state.unitPrice}
                                onChange={this.handleChange}
                                className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="unitsInStock">Stock Level</label>
                            <input type="text" name="unitsInStock" value={this.state.unitsInStock}
                                onChange={this.handleChange}
                                className="form-control"/>
                        </div>
                        <div className="btn-group mt-3">
                            <input type="submit" name="submit" value="Submit" 
                                className="btn btn-primary"/>

                            <input type="reset" name="clear" value="Clear"
                                onClick={this.clearFields}
                             className="btn btn-secondary"/>

                        </div>
                    </form>
                </div>
                
                
            </div>
        )
    }
}

export default ProductDetails

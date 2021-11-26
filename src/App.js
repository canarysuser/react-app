import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import HeaderComponent from './ui/HeaderComponent';
import HomeComponent from './ui/HomeComponent';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductHome from './components/ProductHome';
import ProductHomeFn from './components/ProductHomeFn';
import { Route, Routes } from 'react-router';
import ListProducts from './routedcomp/ListProducts';
import CreateProduct from './routedcomp/CreateProduct';
import UpdateProduct from './routedcomp/UpdateProduct';
import DetailsProduct from './routedcomp/DetailsProduct';

function App() {
  return (
    <div className="container-fluid">

      <HeaderComponent />
     <Routes>
       <Route exact path="/" 
              element={<HomeComponent/>}/>
       <Route exact path="/products" 
              element={<ProductHomeFn/>}/>
        <Route exact path="/products/list" 
              element={<ListProducts/>}/>
        <Route exact path="/products/details/:id" 
              element={<DetailsProduct/>}/>
        <Route exact path="/products/update/:id" 
              element={<UpdateProduct/>}/>
        <Route exact path="/products/create" 
              element={<CreateProduct/>}/>
     </Routes>
    </div>
  );
}
export class PageComponent extends Component {
  constructor() {
    super()
    this.state = {
      productName: 'Item 1',
      price: 500
    }
  }
  
  btnClick = () => { 
      this.state = {...this.state, price: this.state.price + 100};
      //console.log(this.state)
      this.setState({...this.state, price: this.state.price + 100});
  }
  render() {
    return (
      <>
        <p>This section is created using class-level component.</p>
        <PageHeader />
        <p>
          Product Details:
          {this.state.productName},
          {this.state.price}
        
        <button onClick={this.btnClick} >Increase Price</button>
        </p>
      </>
    )
  }
}

// AppHeader component is defined using const keyword. 
export const AppHeader = (props) => (
  <>
    <h1>{props.title}</h1>
    <PageHeader subtitle={props.subtitle} />
  </>
)
export function PageHeader(props) {
  return (
    <h3>{props.subtitle}</h3>
  )
}


export default App;

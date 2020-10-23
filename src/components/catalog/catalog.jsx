import React, { Component } from 'react';
import Product from '../product/product';
import "./catalog.css";
import ProductService from '../../services/productService';

class Catalog extends Component{

    state = {
        products: [],
    }
    
    //For each product in the array of data, return a Product!
    /* 
        - When you render a Component, they need to have a unique key for React to work with. p.id for key
        - Send data to the Product Obj/Component to display 'data={p}'
    */
    render() {
        return (
            <div className="catalog-page">
                <div>
                    {this.state.products.map((p) => <Product data={p} key={p.id}></Product>)} 
                </div>
            </div>
        );
    }
    
    /*Life Cycle functions: Mounting function.. after render, then 
     execute this function */
    componentDidMount() {
        console.log("load data here");


        /*ask a Service for the data
        create service Object...call it's getproducts() function. Then send to state of Product Component! */
        let service = new ProductService();
        const data = service.getProducts();
        this.setState({products: data});
    }
}

export default Catalog;

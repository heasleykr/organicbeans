import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css";

class Product extends Component{
    state = {}

    render() {
        return (
            <React.Fragment>
                <div className="product">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKxo_NrEOlZevgaMclEwJQ70OU6fzPkeds6Q&usqp=CAU" alt=""/>
                    <div id="productMain">
                        <h1>Title</h1>
                    </div>
                    <div id="productPrice">
                        <h5>Total: $999</h5>
                        <h5>Price: $5.99</h5>
                    </div>
                    <div id="addSection">
                        <QuantityPicker id="picker"></QuantityPicker>
                        <button className="btn btn-info">Add</button>
                    </div>
                 </div>
            </React.Fragment>     
        );
    }

}

export default Product;
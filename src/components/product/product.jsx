import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css";
import esper from "./img/esperanza.jpg";

class Product extends Component{
    state = {}

    render() {
        return (
            <React.Fragment>
                <div className="product">
                    <img src={esper} alt="" width="200px" height="200px"/>
                    <div id="productMain">
                        <h1>Esperanza</h1>
                        <h3>Spin Coffee Company</h3>
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
import React, { Component } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import "./product.css";

class Product extends Component{
    state = {
        amount: 1
    }

    render() {
        return (
            <React.Fragment>
                <div className="product">
                    <img src={"/images/products/" + this.props.data.image} id="foodImg" alt="" width="200px" height="200px"></img>
                    <div id="productMain">
                        <h1>{this.props.data.title}</h1>
                        <h3>{this.props.data.category}</h3>
                    </div>
                    <div id="productPrice">
                        <h5>Total: ${this.props.data.price * this.state.amount}</h5>
                        <h5>Price: ${this.props.data.price}</h5>
                    </div>
                    <div id="addSection">
                        <QuantityPicker 
                        minimum={this.props.data.minimum || 1} 
                        onValueChange={ (qnty) => this.handleQuantityChange(qnty)} id="picker"></QuantityPicker>
                        <button className="btn btn-info">Add</button>
                    </div>
                 </div>
            </React.Fragment>     
        );
    }

    //Function when QuantitiPicker notifies us that there's a change....
    handleQuantityChange = (quantity) =>  {
        console.log("Quantity changed ", quantity);
        this.setState({amount: quantity});
    };
}

export default Product;
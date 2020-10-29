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
                    <div id="productIcons">
                        <p id="sale">2% OFF</p>
                        <i id="love" className="fa fa-gratipay" aria-hidden="true"></i>
                    </div>
                    <img src={"/images/products/" + this.props.data.image} id="foodImg" alt="" width="200px" height="200px"></img>
                    <div id="productMain">
                        <h1><b>{this.props.data.title}</b></h1>
                    </div>
                    <div id="productPrice">
                        <h5><b>Price:</b> ${this.props.data.price}</h5>
                        <h5><b>Total:</b> ${this.getTotal()}</h5>
                    </div>
                    <div id="addSection">
                        <QuantityPicker 
                        minimum={this.props.data.minimum || 1} 
                        onValueChange={ (qnty) => this.handleQuantityChange(qnty)} id="picker"></QuantityPicker>
                        {/* <button className="btnAdd"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button> */}
                        <div>
                            <i id="shoppingCart" className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                    </div>
                 </div>
            </React.Fragment>     
        );
    }

    getTotal = () => {
        let total = this.props.data.price * this.state.amount;
        return total.toFixed(2);
    }

    //Function when QuantitiPicker notifies us that there's a change....
    handleQuantityChange = (quantity) =>  {
        console.log("Quantity changed ", quantity);
        this.setState({amount: quantity});
    };
}



export default Product;
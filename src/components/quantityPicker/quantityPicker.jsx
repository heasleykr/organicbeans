import React, { Component } from 'react';
import "./quantityPicker.css";


class QuantityPicker extends Component {

    // Object literal for imformation on Component
    state = {
        quantity: 1,
        minimum: 1
    }

    render() { 
        return (

            <div>
                <button 
                    disabled={this.state.quantity === this.state.minimum}
                    onClick={this.decrease} 
                    className="btn btn-sm btn-info" id="minusBtn"
                >
                    -
                </button>
                <label className="quantity" id="quantity">{this.state.quantity}</label>
                <button onClick={this.increase} id="plusBtn" className="btn btn-sm btn-info">+</button>
            </div>

        );
    }

    //function onClick '+' button
    //NEEDS to be an 'arrow fx' to update vars in 'state'
    //state cannot be modifited directly!
    increase = () => {

        //1) Clone the state
        let val = this.state.quantity;
        //2) Modifiy the clone
        val += 1; 
        //3) Send back to state to update
        this.setState({ quantity: val }); 
    }

    //function onClick '-' button
    //NEEDS to be an 'arrow fx' to update vars in 'state'
    //state cannot be modifited directly!
    decrease = () => {

        //1) Clone the state
        let val = this.state.quantity;
        let min = this.state.minimum;
        //2) Modifiy the clone
        if(val !== min){
            val -= 1; 
            //3) Send back to state to update
            this.setState({ quantity: val }); 
        } 
    }
}
 
export default QuantityPicker;
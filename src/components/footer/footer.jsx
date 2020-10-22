import React, { Component } from 'react';
import "./footer.css";
import logo from "./img/logo.png";


class Footer extends Component {

    render() { 
        return (
        <React.Fragment>
            <div id="footerMain">
                <div id="logoMain">
                    <img src={logo} alt="logo" id="logo" width="180px" height="120px"/>
                    <div id="companyName">
                        <h3>Organic</h3>
                        <h3>Beans</h3>
                    </div>
                </div>
                <div id="message">
                    <h3>Responsible. Roast. Rejuvenate.</h3>
                    <h3>copyright Katelynn Heasley liscense 2020</h3>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
 
export default Footer;
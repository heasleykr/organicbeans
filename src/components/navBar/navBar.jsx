import React, { Component } from "react"; //imrc short
import "./navBar.css";
import logoNav from "./img/logoSm.png";

//cc short
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="navMain">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <img src={logoNav} alt="logoNav" id="logoNav" width="70px" height="50"/>
                <a id="companyHome" className="navbar-brand" href="/#">Organic Beans</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/#">Link</a>
                 </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="/#">Disabled</a>
                </li>
                </ul>
            <form className="form-inline my-2 my-lg-0">
              <input id="searchI" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </React.Fragment> 
    );
  }
}

export default NavBar;

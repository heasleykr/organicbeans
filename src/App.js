import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="container">
        <Catalog></Catalog>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

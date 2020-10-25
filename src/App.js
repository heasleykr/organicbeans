import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="container">
        <div id="quote">
          <h1 id="quoteMain">Shop Organic</h1>
          <h1 id="quoteSub">Eat Organic. Live Organic.</h1>
        </div>
        <div id="catalogDis">
          <Catalog></Catalog>
        </div>

        <hr></hr>
        <Todo></Todo>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

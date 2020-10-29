import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import Todo from "./components/todo/todo";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

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
        <div id="mainTodo">
          <Todo></Todo>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

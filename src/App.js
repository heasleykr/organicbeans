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
        {/*<Catalog></Catalog>*/}

        <hr></hr>
        <Todo></Todo>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

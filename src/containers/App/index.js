import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Components/Home";
import Header from "../Components/header";
import Sidebar from "../Components/Sidebar";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
      </Router>
      <section className="mainContainer">
        <Header />

        <Home />
      </section>
    </div>
  );
}

export default App;

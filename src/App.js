import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./views/Home"
import About from "./views/About"
import Projects from "./views/Projects"
import Contact from "./views/Home"

function App() {
  return (
    <div className="App">
      <h1>Kevin Guo</h1>
      <div className="navbar">
        <button><Link to="/home">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/projects">Projects</Link></button>
        <button><Link to="/contact">Contact</Link></button>

      </div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
    </div>
  );
}

export default App;

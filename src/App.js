import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./views/Home"
import About from "./views/About"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <h1><Header></Header></h1>
      <div className="content">
        <div className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>        
            <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

        </div >
        <div className="viewArea">
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

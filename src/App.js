import React from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./views/Home"
import Skills from "./views/Skills"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
import Socials from "./components/Socials";

function App() {

  const activeLinkStyle = {
    color: "#6699ff",
    fontWeight: "bold"
  }

  return (
    <div className="App">
      
      <div className="viewArea">
        <div className="viewContent">
          <Switch>
            <Route exact path="/">
             <Redirect to="/home" />
            </Route>
            <Route exact path="/profile">
             <Redirect to="/home" />
            </Route>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </div>

      <footer className="footer">
        <div className="footerContent">

          <div className="footerNav">
            <NavLink to="/home" className="linkStyle" activeStyle={activeLinkStyle}>Home</NavLink>
            <NavLink to="/skills" className="linkStyle" activeStyle={activeLinkStyle}>Skills</NavLink>
            <NavLink to="/projects"  className="linkStyle"
            activeStyle={activeLinkStyle}>Projects</NavLink>
            <NavLink to="/contact" className="linkStyle" activeStyle={activeLinkStyle}>Contact</NavLink>
          </div>

          <hr className="solid"></hr>

          <Socials></Socials>
        </div>
      </footer>

    </div>
  );
}

export default App;

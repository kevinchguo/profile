import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./views/Home"
import Skills from "./views/Skills"
import Projects from "./views/Projects"
import Contact from "./views/Contact"
import Socials from "./components/Socials";
import profileImg from "./assets/imgs/profile_img.jpg"

function App() {
  return (
    <div className="App">
      
      <div className="viewArea">
        <Switch>
          <Route exact path="/profile" component={Home}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>

      <div className="footer">

        <img src={profileImg} className="profileImg" alt="profile image"/>

        <div className="footerNav">
          <Link to="/profile">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <hr className="solid"></hr>

        <Socials></Socials>

      </div>

    </div>
  );
}

export default App;

import React from 'react';

import style from "./Home.module.scss";

const Home = () => {
  return ( 
  <>
    <h1 className="description">Welcome to my webpage!</h1>
    <h2 className={style.header2}>Hi, my name is Kevin Guo</h2>
    <div className="description">
        and I like to code and my hobbies are gaming, tennis, and model building. As recent graduate from DevLeague, a 30 week Full stack JavaScript Web Development course, I realized how much the world relies on technologies on the web. With the knowledge I gained from DevLeague, I believe it has equipped me to learn new technologies, build new things, and/or help contribute to existing technologies in the world.
    </div>
  </>
  );
}
 
export default Home;
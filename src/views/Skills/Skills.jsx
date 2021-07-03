import React from 'react';
import style from './Skills.module.scss';

const Skills = () => {

  return ( 
    <>
      <div className={style.skill}>
        <h1 className="header1">Languages:</h1>
        <p className="description">JavaScript, CSS/SCSS, HTML, SQL, Bash</p>
      </div>
      <div className={style.skill}>       
        <h1 className="header1">Frameworks/Libraries:</h1>
        <p className="description">Angular, React, Redux, Next, Node, Material UI, MongoDB, Mongoose, PostgreSQL, Express, Passport, Redis</p>
      </div>
      <div className={style.skill}>
        <h1 className="header1">Other:</h1>
        <p className="description">Git, Docker, AWS (EC2, S3)</p>
      </div>
    </> 
  );
}
 
export default Skills;
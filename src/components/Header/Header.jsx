import React from 'react';
import style from './Header.module.scss'
import linkedinSVG from "../../assets/imgs/linkedin.svg"
import gmailSVG from "../../assets/imgs/gmail.svg"
import githubSVG from "../../assets/imgs/github.svg"
import resumeSVG from "../../assets/imgs/resume.svg"


const Header = () => {
  return ( <>
  <div className={style.header}>
    <div className={style.icons}>
      <span>
        <img src={gmailSVG} alt="gmail logo"/>
        <img src={linkedinSVG} alt="linkedin logo"/>
        <img src={githubSVG} alt="github logo"/>
        <img src={resumeSVG} alt="resume logo"/>
      </span>
      <span>Profile pic</span>
    </div>
  </div></> );
}
 
export default Header;
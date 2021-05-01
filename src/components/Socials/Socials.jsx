import React from 'react';
import style from './Socials.module.scss'
import linkedinSVG from "../../assets/imgs/linkedin.svg"
import twitterSVG from "../../assets/imgs/twitter.svg"
import githubSVG from "../../assets/imgs/github.svg"
import gitlabSVG from "../../assets/imgs/gitlab.svg"
import resumeSVG from "../../assets/imgs/resume.svg"


const Socials = () => {
  return ( 
  <>
    <div className={style.socials}>
      
      <div className={style.socialIcons}>
        <img src={twitterSVG} alt="twitter logo"/>
        <img src={linkedinSVG} alt="linkedin logo"/>
        <img src={githubSVG} alt="github logo"/>
        <img src={gitlabSVG} alt="gitlab logo"/>
        <img src={resumeSVG} alt="resume logo"/>
      </div>
      
    </div>
  </> );
}
 
export default Socials;
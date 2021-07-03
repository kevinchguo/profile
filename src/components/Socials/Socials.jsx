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
        <a href="https://twitter.com/kevinnnface1" target="_blank" rel="noopener noreferrer">
          <img src={twitterSVG} alt="twitter logo" className={style.svgIcon}/>
        </a>
        <a href="https://www.linkedin.com/in/kevinchguo/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinSVG} alt="linkedin logo" className={style.svgIcon}/>
        </a>
        <a href="https://github.com/kevinchguo" target="_blank" rel="noopener noreferrer">
          <img src={githubSVG} alt="github logo" className={style.svgIcon}/>
        </a>
        <a href="https://gitlab.com/kevinchguo" target="_blank" rel="noopener noreferrer">
          <img src={gitlabSVG} alt="gitlab logo" className={style.svgIcon}/>
        </a>
        <a href="https://drive.google.com/file/d/1hd0KIpRNJdAHrmlt2z8vPJDtx-GZCAOT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={resumeSVG} alt="resume logo" className={style.svgIcon}/>
        </a>
      </div>
      
    </div>
  </> );
}
 
export default Socials;
import React from 'react';
import style from './Contact.module.scss'

const Contact = () => {
  return ( 
    <>
    <div className={style.content}>
      <div>You can contact me <a href = "mailto: kevinchguo@gmail.com" target="_blank" rel="noopener noreferrer" className={style.link}>here</a>. I look foward to connecting with you!</div>
    </div>
   </>
   );
}
 
export default Contact;
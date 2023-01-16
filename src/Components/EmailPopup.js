import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import style from '../StyleSheets/EmailPopup.module.css'

export default function EmailPopup ({closePopUps}) {
    const form = useRef();
    const [ name , setName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ message , setMessage ] = useState("");
  
    function sendEmail (e) {
      e.preventDefault();
      if (!name.length) {
        alert("Please make sure to enter your name!");
      } else if (email.slice(-4) !== ".com" && email.length > 3) {
        alert("Please be sure to enter a valid email!");
      } else if (!message.length) {
        alert("Please make sure to enter a message!");
      } else {
        emailjs.sendForm('service_n3vp7iv', 'template_cw2hcgb', form.current, 'KXCMfBQM4NBgQ2tuj')
          .then((result) => {
              alert("Thanks for getting in touch! I'll get back to you straight away.");
              closePopUps();
          }, (error) => {
              alert(error);
          });
      }
    };

    useEffect(() => {
      function handleKeyDown(event) {
        if (event.key === 'Escape') {
          closePopUps();
        }
      }
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return (
      <>
        <div className={style.email_popup_container} >
          <form id={style.form_container} ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input id={style.name_input} spellCheck="false" type="text" name="user_name" placeholder='name' onChange={(e) => setName(e.target.value)} value={name}/>
            <br />
            <label>Email</label>
            <input id={style.email_input} spellCheck="false" type="email" name="user_email" placeholder='e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <br />
            <label>Message</label>
            <textarea id={style.message_input} spellCheck="false" name="message" placeholder='message...' onChange={(e) => setMessage(e.target.value)} value={message}/>
            <br />
            <div className={style.margin_div}>
              <input id={name && email && message ? style.validSend : style.invalidSend} type="submit" value="Send" />
            </div>
          </form>
        </div>
      </>
    );
};
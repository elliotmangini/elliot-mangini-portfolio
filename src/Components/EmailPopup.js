import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import style from '../StyleSheets/EmailPopup.module.css'

export default function EmailPopup ({closePopUps}) {
    const form = useRef();
  
    function sendEmail (e) {
      e.preventDefault();

      // console.log(form.current);

      emailjs.sendForm('service_n3vp7iv', 'template_cw2hcgb', form.current, 'KXCMfBQM4NBgQ2tuj')
        .then((result) => {
            alert("Thanks for getting in touch! I'll get back to you straight away.");
            closePopUps();
        }, (error) => {
            alert(error);
        });
    };
  
    return (
      <>
        <div className={style.email_popup_container}>
          <form id={style.form_container} ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input id={style.name_input} type="text" name="user_name" placeholder='name'/>
            <br />
            <label>Email</label>
            <input id={style.email_input} type="email" name="user_email" placeholder='e-mail'/>
            <br />
            <label>Message</label>
            <textarea id={style.message_input} name="message" placeholder='message...'/>
            <br />
            <div className={style.margin_div}>
              <input id={style.send_button} type="submit" value="Send" />
            </div>
          </form>
        </div>
      </>
    );
};
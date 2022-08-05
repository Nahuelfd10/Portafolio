import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'



const Contact = () => {
  return (
    <section id='contact'>
        <h5>Envíame un mensaje</h5>
        <h2>Contáctame</h2>
    
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nahuelfdev@gmail.com</h5>
            <a href="mailto:nahuelfdev@gmail.com" target="_blank">Enviar mensaje</a>
          </article>
         {/*  <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nahuel FD</h5>
            <a href="https://m.me/nahuel.fernandezdiez" target="_blank" >Send a message</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+549 02262564685</h5>
            <a href="https://api.whatsapp.com/send?phone=542262564685" target="_blank" >Enviar mensaje</a>
          </article>
        </div>
        {/*  END OF CONTACT OPTIONS */}

        {/* <form action="">
          <input type="text" name="name" placeholder='Nombre' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='' required></textarea>
          <button type='submit' className='btn btn-primary' >Enviar mensaje</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact
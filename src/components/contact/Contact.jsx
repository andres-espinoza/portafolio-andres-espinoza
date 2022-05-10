import { useRef } from 'react';
import './Contact.css';
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiWhatsappLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

//https://unicode-table.com/en/sets/emoji/ => Codigo de Emojis

function Contact() {
  const emoji = '%F0%9F%98%84';
  const form = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_ID_SERVICE, process.env.REACT_APP_ID_TEMPLATE, form.current, process.env.REACT_APP_ID_USER)
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h3>Si quieres saber más de mí</h3>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>contacto@andydev.tech</h5>
            <a href="mailto: contacto@andydev.tech">
              Envíame un correo
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+56 987 666 416</h5>
            <a href={`https://api.whatsapp.com/send?phone=56987666416&text=Hola%20Andrés!+${emoji}+te%20contacto%20por...`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Envíame un mensaje
            </a>
          </article>

        </div>

        <form ref={form}
          onSubmit={sendEmail}
        >
          <input type="text" name='name' placeholder='Nombre Completo' required/>
          <input type="email" name='email' placeholder='Correo electrónico' required/>
          <textarea name="message" id=""  rows="7" placeholder='Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'> Enviar correo </button>
        </form>

      </div>
    </section>
  )
}

export default Contact
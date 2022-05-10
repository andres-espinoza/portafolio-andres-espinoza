import React from 'react';
import './About.css';
import ME from '../../assets/me-about.webp';
import { FaAward } from 'react-icons/fa';

function About() {
  return (
    <section id='about'>
      <h3 className='title'>Conóceme</h3>
       <h2>Sobre mí</h2>

       <div className="container about__container">

        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="Foto de mí, sentado en una pequeña escalinata, sonriendo a la cámara" />
          </div>
        </div>

         <div className="about__content">
            <div className="about__cards">

              <article className="about__card">
              <FaAward className='about__icon'/>
                <h3>Ing. Comercial</h3>
                <small>Titulado</small>
              </article>

                <a 
                href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/15053/aprobacion-modulos-cursos-b-learning-fundamentos-desarrollo-web-g16-10738.png" 
                className="certified"
                target='_blank'
                rel='noopener noreferrer'
                >
                  <article className="about__card">
                    <FaAward className='about__icon'/>
                    <h3>Web Developer</h3>
                    <small>Certificado</small>
                  </article>
                </a>

                <a 
                href="https://www.coderhouse.cl/certificados/61b2a5de5905ea00624036cd" 
                className="certified"
                target='_blank'
                rel='noopener noreferrer'
                >
                  <article className="about__card">
                    <FaAward className='about__icon'/>
                    <h3>UX/UI Designer</h3>
                    <small>Certificado</small>
                  </article>
                </a>


            </div>

            <p>
            Me he desarrollado en áreas comerciales relacionadas a la industria TI, la Investigación de Mercado y el Trade Marketing, en donde he realizado planificaciones estratégicas y análisis de datos, con orientación a la mejora de productos
            digitales, posicionamiento de marca y entrega de <i>insights</i>.
            </p>
            <p>
              Actualmente estoy estudiando <span className='key-word'>Desarrollo Fullstack </span> y ampliando mis conocimientos en el <span className='key-word'>análisis de datos</span>.
            </p>

         </div>
       </div>
    </section>
  )
}

export default About
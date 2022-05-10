import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.webp'
import HeaderSocials from './HeaderSocials.jsx';

function Header() {
  return (
    <header id='home'>
      <div className="container header__container">
        <h3>Hola, me llamo</h3>
        <h1>Andrés Espinoza</h1>
        <h3 className="text-light">Estoy en proceso de ser Desarrollador Fullstack</h3>
        <CTA/>
        <HeaderSocials />

        <div className="me">
          <img className="me-photo" src={ME} alt="Foto de mí, con un acercamiento, sonriendo a la cámara" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
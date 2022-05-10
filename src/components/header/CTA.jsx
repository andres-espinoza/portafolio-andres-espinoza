import React from 'react';
import CV from  '../../assets/CV.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download="Andres_Espinoza_Ing_Comercial_Desarrollador" className='btn'>Descarga mi CV</a>
        <a href='#contact' className='btn btn-primary'>Conversemos</a>
    </div>
  )
}

export default CTA
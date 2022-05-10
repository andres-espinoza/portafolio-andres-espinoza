import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'

function Portfolio() {

  const portfolioData = [
    {
      id: 1,
      image:IMG1,
      type: 'development',
      title: 'Cryptoverse',
      description: 'Tendencia de criptomonedas',
      source: 'https://github.com/andres-espinoza/crypto-project',
      demo: 'http://cverseproject.andydev.tech'
    },
    {
      id: 2,
      image:IMG2,
      type: 'design',
      title: 'Beyond APP',
      description: 'Aplicación móvil para entrenar',
      source: 'https://www.figma.com/file/ICFZsGaHnrdtw97v2nxnjM/Andr%C3%A9s-Espinoza---Beyond-App?node-id=0%3A1',
      demo: 'https://www.behance.net/gallery/132213969/Beyond-Mobile-App-UX-UI-Design'
    },

  ]
  return (
    <section id='portfolio'>
      <h3>Mis proyectos recientes</h3>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">

        {portfolioData.map(({id, image, title, description, source, demo, type}) =>
           <article key={id} className="portfolio__item">
           <div className="portfolio__item-img">
             <img src={image} alt={`Este proyecto se llama ${title} y se resume en ${description}`} />
           </div>
           <h4>{title}</h4>

          <p>
            {!!description && description}
          </p>
 
           <div className="portfolio__item-cta">
             <a href={source}
               className="btn"
               target='_blank'
               rel='noopener noreferrer'
               >
                 {type === 'development' ? 'Github Repo' : 'Figma Design'}
             </a>
             <a href={demo}
               className="btn btn-primary"
               target='_blank'
               rel='noopener noreferrer'
               >
                 {type === 'development' ? 'Live Demo' : 'Behance'}
             </a>
           </div>
         </article> 
          )}


       
      </div>
    </section>
  )
}

export default Portfolio
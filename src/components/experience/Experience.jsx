import React from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

function Experience() {
  return (
    <section id='experience'>
      <h3>Stack Tecnológico</h3>
      <h2>Experiencia</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

          <h4>Desarrollo Frontend</h4>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>HTML</h5>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>CSS</h5>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>JavaScript</h5>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>React JS</h5>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>Less / Sass</h5>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>Bootstrap</h5>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">

        <h4>Desarrollo Backend y Analytics</h4>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>Python</h5>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>SQL Server</h5>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>Node JS</h5>
                <small className='text-light'>Principiante</small>
              </div>
            </article>


            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>Express JS</h5>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>MySQL</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h5>MongoDB</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}




          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Experience
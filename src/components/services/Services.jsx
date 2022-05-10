import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi';

function Services() {
  return (
    <section id='services'>
      <h3>What I Offer</h3>
      <h2>Services</h2>

      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h4>UX/UI Design</h4>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Asperiores provident qui quas doloribus nostrum!</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Facere amet error officia quibusdam? Doloribus.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Excepturi autem vero quas. Optio, dignissimos.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ut cum repellat ratione eveniet facilis!</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Quia et quam eveniet? Iure, et!</p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h4>Web Development</h4>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Asperiores provident qui quas doloribus nostrum!</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Facere amet error officia quibusdam? Doloribus.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Excepturi autem vero quas. Optio, dignissimos.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ut cum repellat ratione eveniet facilis!</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Quia et quam eveniet? Iure, et!</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h4>Content Creation</h4>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Asperiores provident qui quas doloribus nostrum!</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Facere amet error officia quibusdam? Doloribus.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Excepturi autem vero quas. Optio, dignissimos.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ut cum repellat ratione eveniet facilis!</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Quia et quam eveniet? Iure, et!</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
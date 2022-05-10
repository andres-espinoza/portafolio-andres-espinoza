import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function Footer() {
  return (
 <footer id='footer'>
    <div className="footer__socials">
    <a
        href="https://www.linkedin.com/in/andres-espinoza-delgado-research-design-code/"
        target='_blank'
        rel='noreferrer'>
            <BsLinkedin />
        </a>
        <a
        href="https://github.com/andres-espinoza"
        target='_blank'
        rel='noreferrer'>
            <FaGithub />
        </a>

    </div>
        <footer className="copyright">
          <small>&copy; Andrés Espinoza Delgado 2022</small>
        </footer>
 </footer>
  )
}

export default Footer
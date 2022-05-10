import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a
        href="https://www.linkedin.com/in/andres-espinoza-delgado-research-data-analysis-code/"
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
  )
}

export default HeaderSocials
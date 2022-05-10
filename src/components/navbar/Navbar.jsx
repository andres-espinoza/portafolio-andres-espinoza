import { useState} from 'react';  
import './Navbar.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageRoundedDots} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

function Navbar() {

const [focus, setFocus] = useState('#home')


  return (
    <nav>
      <a href="#home"
      onClick={() => setFocus('#home')}
      className={focus === "#home" ? "active" : ""}>
        <AiOutlineHome/>
      </a>

      <a href="#about"
      onClick={() => setFocus('#about')}
        className={focus === "#about" ? "active" : ""}>
        <AiOutlineUser/>
      </a>

      <a href="#experience"
        onClick={() => setFocus('#experience')}
        className={focus === "#experience" ? "active" : ""}>
        <BiBook/>
      </a>

      <a href="#portfolio"
        onClick={() => setFocus('#portfolio')}
        className={focus === "#portfolio" ? "active" : ""}>
        <RiServiceLine/>
      </a>

      <a href="#contact"
        onClick={() => setFocus('#contact')}
        className={focus === "#contact" ? "active" : ""}>
        <BiMessageRoundedDots/>
      </a>
    </nav>
  )
}

export default Navbar


import React from 'react';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';




const App = () => {

  return (
    <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App
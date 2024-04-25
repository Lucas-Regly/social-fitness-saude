import React from 'react'
import './Header.css'
import fotoLogo from '/assets/social-logo.jpg'
const Header = () => {
  return (
    <header className='header flex'>
      <div className='logo flex'>
        <img className='logo-img' src={fotoLogo} alt="Social Logo ©" />

        <div className='logo-frase flex'>
          <p>Social</p>
          <span>Fitness</span>
        </div>
      </div>
      <nav className='header-main-nav flex'>
        <a href="">Home</a>
        <a href="">Sobre Nós</a>
        <a href="">Classes</a>
        <a href="">Serviços</a>
        <a href="">Nosso Time</a>
        <a href="">Contato</a>
      </nav>
      <nav className='header-sub-nav'>

      </nav>
    </header>
  )
}

export default Header
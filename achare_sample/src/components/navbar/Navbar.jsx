import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import signin from '../../assets/signup.png';
import './navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">

          <div className="gpt3__navbar-links_login_logo">
            <a href="https://www.google.com"> <img src={signin} /> </a>
          </div>

        </div>

      <div className="gpt3__navbar-links_logo">
        <a href="#Home"> <img align="right" src={logo} /> </a>
      </div>
 
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine  color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-login">
            <a href="https://www.google.com"> <img src={signin} /> </a>
          </div>

        </div>
        )}
      </div>

    </div>
  )
}

export default Navbar
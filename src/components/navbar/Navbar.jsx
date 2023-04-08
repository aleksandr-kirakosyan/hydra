import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.png'
import logo_text from '../../assets/logo-text.png'
import { useState } from 'react';

const Menu = () => (
    <>
      <p><a href='#about'>ABOUT</a></p>
      <p><a href='#services'>SERVICES</a></p>
      <p><a href='#technologies'>TECHNOLOGIES</a></p>
      <p><a href='#howto'>HOW TO</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className='gpt3__navbar'>
          <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt="logo" />
            <img src={logo_text} alt="logo-text" />
          </div>
          <div className='gpt3__navbar-links_container'>
              <Menu />
          </div>
        <div className='gpt3__navbar-sign'>
          <a href='#contact'><button id='cu_btn' type='button'>CONTACT US</button></a>
          <button type='button'>JOIN HYDRA</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu />
              </div>
              <div className='gpt3__navbar-menu_container-links-sign'>
                    <button id='cu_btn' type='button'>CONTACT US</button>
                    <button type='button'>JOIN HYDRA</button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default Navbar
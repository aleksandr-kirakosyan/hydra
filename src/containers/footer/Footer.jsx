import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer' id='footer'>
            <div className='footer__image'>
                <img src={logo} alt="logo" />
            </div>

            <div className='footer__container'>
                <h1>SOCIALIZE WITH HYDRA</h1>
                <div className='footer__container-social'>
                    <a href='https://github.com/aleksandr-kirakosyan'><FaGithub className='soc-link' /></a>
                    <a href="https://www.instagram.com/"><FaInstagram className='soc-link' /></a>
                    <a href="https://www.linkedin.com/in/aleksandrkiraks/"><FaLinkedin className='soc-link' /></a>
                    <a href="https://www.twitter.com/"><FaTwitter className='soc-link' /></a>
                </div>
                <center>
                    <button type='button'>BUILD YOUR WORLD</button>
                </center>
            </div>
    </div>
  )
}

export default Footer
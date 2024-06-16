import React from 'react'
import './MobileNav.css'
import logo from  '../png/Picsart_24-02-14_16-09-11-052.png'
import { Link } from 'react-scroll';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img src={logo} alt="logo" className='logo' />
                <ul>
                <li>
                    <Link to='Hero' spy={true} smooth={true} duration={750} className='menu-item'> Home
                    </Link>
                </li>
                <li>
                    <Link to='About' spy={true} smooth={true} duration={750} className='menu-item'>About
                    </Link>
                </li>
                <li>
                    <Link to='Skills' spy={true} smooth={true} duration={750} className='menu-item'> Skills
                    </Link>
                </li>
                <li>
                    <Link to='ContactMe' spy={true} smooth={true} duration={750} className='menu-item'>Contact Me
                    </Link>
                </li>
                <button 
                    className='contact-btn' 
                    onClick={() => {}}
                >
                    Hire Me
                </button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNav
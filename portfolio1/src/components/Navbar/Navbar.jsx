import {React, useState}  from 'react'
import './Navbar.css';
import logo from './png/Picsart_24-02-14_16-09-11-052.png'
import MobileNav from './MobileNav/MobileNav';
import 'material-symbols';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }; 
  return (
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

    <nav className="nav-wrapper">
        <div className="nav-content">
            <img src={logo} alt="logo" className="logo" />

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
                    onClick={
                        () =>{}
                    }
                >
                    Hire Me
                </button>
            </ul>
            <button 
                className='menu-btn'
                onClick={toggleMenu}
            >
                
                <span 
                    className={"material-symbols-outlined"}
                    style={{ fontSize: "1.8rem" }}
                >
                    {openMenu ? "close" : "menu"}
                </span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
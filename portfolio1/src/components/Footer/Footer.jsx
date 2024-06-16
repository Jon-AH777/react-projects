import React from 'react'
import './Footer.css';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100087330438343">
          <FaFacebook size={32} />
        </a>
        <a href="">
          <FaLinkedin size={32} />
        </a>
        <a href="">
          <FaTwitter size={32} />
        </a>
      </div>
      <div className="footer-info">
        <h1>Made By Sanarung Subba</h1>
      </div>
    </div>
  )
}

export default Footer
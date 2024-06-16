import React from 'react'
import profile from './profile.jpg';
import techicon from './icons8-react-a-javascript-library-for-building-user-interfaces-96.png';
import htmllogo from './icons8-html-96.png';
import csslogo from './icons8-css-96.png';
import jslogo from './icons8-js-96.png';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas Into Seamless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={techicon} alt="techicon" />
                </div>
                <img src={profile} alt="profileimg" className='profileimg' />
            </div>
            <div>
                <div className="tech-icon">
                    <img src={htmllogo} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={csslogo} alt="" />
                </div>
                <div className="tech-icon">
                    <img src={jslogo} alt="" />
                </div>
            </div>   
        </div>
    </section>
  )
}

export default Hero
import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="head-info">
        <div className="head">
          About
          <span className='span'>Me</span> 
        </div>
        <div className='about-info'>    
          Diving into the world of programming without any educational background on IT fields was the first challenge I faced. Self learning from online platforms and frustation from code not working while learning was what I faced while walking down the path of coding. But all these hardwork has lead me to a successfull start as Frontend-Dev(ReactJS). And I'm happy to see the journey I've completed till now. I'm looking forward to use all of my skills/experience in the company where my skills are appreciated.
         
        </div>
        <div className="button-section">
          <button className='about-btn'>
            Download CV
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
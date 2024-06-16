import React from 'react'
import carousel1 from '../img/hero-carousel/1.jpg'
import carousel2 from '../img/hero-carousel/2.jpg'
import carousel3 from '../img/hero-carousel/3.jpg'
const Home = () => {
  return (
    <div className="home" id="home">
        <div className="swiper home-slid">
            <div className="swiper-wrapper">
                <div className="swiper-slide box">
                    <div className="image">
                        <img src={carousel1} alt='image' />
                    </div>
                    <div className="content">
                        <h3>At blah blah</h3>
                        <p>Helping Business Security & Peace of Mind for your Family</p>
                        <a href="#" className='btn'>get Start</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home
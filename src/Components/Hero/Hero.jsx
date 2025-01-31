import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>
                We ensure better education for a better futuer
            </h1>
            <p>
            Education is a powerful tool that shapes individuals and societies. It provides the knowledge and critical thinking abilities to navigate and succeed in life. 
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>

        </div>

    </div>
  )
}

export default Hero
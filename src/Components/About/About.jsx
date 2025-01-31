import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Nurturing tomorrow's Leaders today</h2>
            <p>
            Higher levels of education often lead to better job prospects, higher earning potential, and career advancement. It equips individuals with the skills and qualifications needed to succeed in their chosen fields. 
            </p>
            <p>
            Higher levels of education often lead to better job prospects, higher earning potential, and career advancement. It equips individuals with the skills and qualifications needed to succeed in their chosen fields. 
            </p>
            <p>
            Higher levels of education often lead to better job prospects, higher earning potential, and career advancement. It equips individuals with the skills and qualifications needed to succeed in their chosen fields. 
            </p>

        </div>

    </div>
  )
}

export default About
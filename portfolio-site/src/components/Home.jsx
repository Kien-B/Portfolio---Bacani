import React from 'react'
import './Home.css'
import profile from '../assets/kienpic.png'

export default function Home(){
  return (
    <div className="section-card home-card">
      <div className="home-grid">
        <div className="home-text">
          <h1>Hello, I'm Kien</h1>
          <p className="lead">Aspiring QA & Automation Tester — focused on quality, automation, and continuous improvement.</p>
          <a className="cta" href="#contact">Contact Me</a>
        </div>
        <div className="home-image-card">
          <img src={profile} alt="Profile" className="img-responsive img-hover-zoom profile-img" />
          <div className="caption">Aspiring QA & Automation Tester</div>
        </div>
      </div>
    </div>
  )
}

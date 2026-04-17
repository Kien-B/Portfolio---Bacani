import React from 'react'
import './Footer.css'
import linkedinIcon from '../assets/in.png'

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div>© {new Date().getFullYear()} Kien Bacani</div>
        <div className="socials">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
            <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" />
          </a>
        </div>
      </div>
    </footer>
  )
}

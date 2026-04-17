import React from 'react'
import './Skills.css'
import jsLogo from '../assets/node js logo.png'
import pyLogo from '../assets/python logo.png'
import pwLogo from '../assets/playwright logo.png'
import jiraLogo from '../assets/jira logo.png'
import gitLogo from '../assets/git.png'

export default function Skills(){
  const logos = [
    {src:jsLogo, alt:'JavaScript'},
    {src:pyLogo, alt:'Python'},
    {src:pwLogo, alt:'Playwright'},
    {src:jiraLogo, alt:'Tools'},
    {src:gitLogo, alt:'Git'}
  ]

  return (
    <div className="section-card">
      <h2>Skills</h2>
      <div className="grid grid-2">
        <div>
          <h3>Programming Languages</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3>Testing & Tools</h3>
          <ul>
            <li>Playwright</li>
            <li>Jira</li>
            <li>Google Sheets</li>
            <li>Manual Testing / Test Cases / Bug Reporting / User Acceptance Testing</li>
          </ul>
        </div>
      </div>

      <div className="logo-section">
        <h3>Technologies & Tools</h3>
        <div className="logo-grid">
          {logos.map((l, i) => (
            <div className="logo-wrap" key={i} title={l.alt}>
              <img src={l.src} alt={l.alt} className="tech-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

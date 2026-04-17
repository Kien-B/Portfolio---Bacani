import React, { useState } from 'react'
import './Hobbies.css'
import t1 from '../assets/kyusikien.jpg'
import t2 from '../assets/kyusiteam.jpg'
import t2a from '../assets/blck.jpeg'
import t2b from '../assets/xul.jpg'
import t2c from '../assets/xul2.jpg'
import smallpic from '../assets/kyusi.jpg'

export default function Hobbies(){
  const [shuffleIndex, setShuffleIndex] = useState(0)
  const [shuffling, setShuffling] = useState(false)
  const shuffler = [t2, t2a, t2b, t2c]

  function nextShuffle(){
    if (shuffling) return
    setShuffling(true)
    const next = (shuffleIndex + 1) % shuffler.length
    // swap image at mid-animation for a smooth flip
    setTimeout(()=> setShuffleIndex(next), 200)
    // clear shuffling state after animation ends
    setTimeout(()=> setShuffling(false), 420)
  }

  // Alignment effect removed - caption sits naturally below shuffler image

  return (
    <div className="section-card hobbies-section">
      <h2>Hobbies & Extracurriculars</h2>
      <div className="hobbies-layout">
        <div className="top-desc reveal">
          <img src={smallpic} alt="Small" className="small-pic" />
          <div className="desc-text">
            <p>Member of a non-academic school organization focused on competitive gaming. I participated in team-based tournaments, helped organize practice sessions and scrimmages, and mentored newer teammates. These experiences strengthened my leadership, communication, and strategic thinking, and taught me how to balance practice with academics through effective time management.</p>
            <ul>
              <li>Teamwork and collaboration</li>
              <li>Strategic thinking and decision-making</li>
              <li>Communication skills and discipline</li>
              <li>Continuous improvement through practice and review</li>
            </ul>
          </div>
        </div>

        <div className="photos-row lower-row">
          <article className="hobby-card reveal portrait">
            <div className="portrait-media">
              <img src={t1} alt="Tournament 1" className="img-responsive" />
            </div>
            <div className="portrait-overlay">
              <h4>Honor Of Kings - KE Atomic</h4>
              <small className="muted">IGN: KE Mythiin - 6th man</small>
            </div>
          </article>

          <article className="hobby-card reveal shuffler" onClick={nextShuffle} role="button" tabIndex={0}>
            <div className="shuffler-media">
              <img src={shuffler[shuffleIndex]} alt={`Match ${shuffleIndex+1}`} className={`img-responsive ${shuffling ? 'shuffling' : ''}`} />
            </div>
            
          </article>
        </div>
      </div>
    </div>
  )
}

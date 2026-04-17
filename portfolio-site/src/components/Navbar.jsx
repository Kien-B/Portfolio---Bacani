import React from 'react'
import './Navbar.css'

export default function Navbar({active, setActive}){
  const links = [
    {id:'home', label:'Home'},
    {id:'about', label:'About'},
    {id:'skills', label:'Skills'},
    {id:'hobbies', label:'Hobbies'},
    {id:'contact', label:'Contact'}
  ]

  function onClick(e, id){
    e.preventDefault()
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
    if(setActive) setActive(id)
  }

  return (
    <header>
      <nav className="nav container">
        <div className="brand">Bacani Porfolio</div>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e)=>onClick(e,l.id)}
                className={active===l.id? 'active' : ''}
              >{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

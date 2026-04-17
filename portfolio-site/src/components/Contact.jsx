import React, { useState } from 'react'
import './Contact.css'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate(){
    const e = {}
    if(!form.name.trim()) e.name = 'Name required'
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required'
    if(!form.message.trim()) e.message = 'Message required'
    return e
  }

  function handleSubmit(ev){
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if(Object.keys(e).length===0){
      setSent(true)
      setForm({name:'',email:'',message:''})
      setTimeout(()=>setSent(false),3000)
    }
  }

  return (
    <div className="section-card">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>
        <label>
          Email
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>
        <label>
          Message
          <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
          {errors.message && <small className="error">{errors.message}</small>}
        </label>
        <button type="submit">Send</button>
        {sent && <p className="sent">Message sent (mock)</p>}
      </form>
    </div>
  )
}

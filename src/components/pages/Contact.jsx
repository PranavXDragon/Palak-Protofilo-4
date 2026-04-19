'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ fullname: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 2000)
  }

  const isFormValid = formData.fullname && formData.email && formData.message

  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119103.78190227155!2d78.9629!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ff28ff28ff29%3A0x1!2sNagpur%2C%20India!5e0!3m2!1sen!2sin!4v1647608789441" 
            width="400" 
            height="300" 
            loading="lazy"
            title="Nagpur Location"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isFormValid}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
          {isSubmitted && <p className="submit-message">Message sent successfully!</p>}
        </form>
      </section>
    </article>
  )
}

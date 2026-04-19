'use client'

import { useState } from 'react'

export default function TestimonialsModal({ testimonial, isOpen, onClose }) {
  if (!isOpen || !testimonial) return null

  return (
    <div className={`modal-container ${isOpen ? 'active' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={testimonial.avatar} alt={testimonial.name} width={80} />
          </figure>
          <img src="/assets/icons/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title">{testimonial.name}</h4>
          <time dateTime="2021-06-14">14 June, 2021</time>
          <div>
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

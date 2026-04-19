'use client'

import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Palak Urkude" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Palak Urkude">Palak Urkude</h1>
          <p className="title">Web developer</p>
        </div>
        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:palakurkude200@gmail.com" className="contact-link">palakurkude200@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919834078819" className="contact-link">+91 98340 78819</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2006-09-22">September 22, 2006</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Nagpur, India</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/palak_urkude2?igsh=cmQ2cW55c3Fla2pp" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/palak-urkude-446521350?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

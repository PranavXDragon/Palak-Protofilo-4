import { useState } from 'react'
import TestimonialsModal from '../TestimonialsModal'

const testimonials = [
  {
    id: 1,
    name: 'Raj Kumar',
    avatar: '/assets/images/avatar-1.png',
    text: 'Palak is curious and always eager to learn new things. She actively works on improving her skills and brings creative ideas to her projects. Her dedication to understanding complex concepts is truly impressive.'
  },
  {
    id: 2,
    name: 'Priya Singh',
    avatar: '/assets/images/avatar-2.png',
    text: 'She is hardworking and quick to learn, consistently improving her technical skills through practice and projects. Palak has a great ability to solve problems efficiently and collaboratively.'
  },
  {
    id: 3,
    name: 'Arun Patel',
    avatar: '/assets/images/avatar-3.png',
    text: 'Working with Palak on projects has been excellent. She brings fresh perspectives and creative solutions to challenges. Her passion for data science and web development is clearly evident in her work.'
  },
  {
    id: 4,
    name: 'Anjali Sharma',
    avatar: '/assets/images/avatar-4.png',
    text: 'Palak is a motivated student who demonstrates strong analytical thinking and problem-solving skills. She is detail-oriented and always willing to go the extra mile to deliver quality work.'
  }
]

const services = [
  { id: 1, title: 'Web design', icon: '/assets/icons/icon-design.svg', text: 'The most modern and high-quality design made at a professional level.' },
  { id: 2, title: 'Web development', icon: '/assets/icons/icon-dev.svg', text: 'High-quality development of sites at the professional level.' },
  { id: 3, title: 'Mobile apps', icon: '/assets/icons/icon-app.svg', text: 'Professional development of applications for iOS and Android.' },
  { id: 4, title: 'Photography', icon: '/assets/icons/icon-photo.svg', text: 'I make high-quality photos of any category at a professional level.' }
]

export default function About() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedTestimonial(null)
  }

  return (
    <>
      <article className="about active">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            I&apos;m a passionate B.Tech Data Science student from Suryoday College of Engineering, Nagpur, with a strong interest in technology, problem-solving, and creating meaningful digital experiences. I enjoy turning complex data and ideas into simple, smart, and user-friendly solutions.
          </p>
          <p>
            My focus is on building projects that are not only functional but also clean, intuitive, and impactful. Along with data science, I explore web development and design to create solutions that are both technically strong and visually appealing.
          </p>
          <p>
            I constantly work on improving my skills through real-world projects, learning new tools, and experimenting with ideas. My goal is to grow as a data-driven problem solver and build innovative solutions that make a difference.
          </p>
        </section>

        <section className="highlights">
          <ul className="highlights-list">
            <li className="highlights-item">
              <h4 className="h4">Learning Journey</h4>
              <p className="highlights-subtitle">B.Tech Student</p>
            </li>
            <li className="highlights-item">
              <h4 className="h4">Projects Built</h4>
              <p className="highlights-subtitle">4+ Projects</p>
            </li>
            <li className="highlights-item">
              <h4 className="h4">Growth Mindset</h4>
              <p className="highlights-subtitle">Always Learning</p>
            </li>
          </ul>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What I&apos;m doing</h3>
          <ul className="service-list">
            {services.map(service => (
              <li className="service-item" key={service.id}>
                <div className="service-icon-box">
                  <img src={service.icon} alt={service.title} width={40} />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{service.title}</h4>
                  <p className="service-item-text">{service.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="testimonials">
          <h3 className="h3 testimonials-title">What People Say</h3>
          <ul className="testimonials-list has-scrollbar">
            {testimonials.map(testimonial => (
              <li className="testimonials-item" key={testimonial.id}>
                <div className="content-card" onClick={() => handleTestimonialClick(testimonial)} style={{ cursor: 'pointer' }}>
                  <figure className="testimonials-avatar-box">
                    <img src={testimonial.avatar} alt={testimonial.name} width={60} />
                  </figure>
                  <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                  <div className="testimonials-text">
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <TestimonialsModal 
          testimonial={selectedTestimonial} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </article>
    </>
  )
}

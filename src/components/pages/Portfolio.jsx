'use client'

import { useState } from 'react'

const projects = [
  { id: 1, title: 'Fundo', image: '/assets/images/project-3.jpg', category: 'web design' },
  { id: 2, title: 'Brawlhalla', image: '/assets/images/project-4.png', category: 'applications' },
  { id: 3, title: 'DSM.', image: '/assets/images/project-5.png', category: 'web design' },
  { id: 4, title: 'MetaSpark', image: '/assets/images/project-6.png', category: 'web design' },
  { id: 5, title: 'Summary', image: '/assets/images/project-7.png', category: 'web development' },
  { id: 6, title: 'Task Manager', image: '/assets/images/project-8.jpg', category: 'applications' },
  { id: 7, title: 'Arrival', image: '/assets/images/project-9.png', category: 'web development' }
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'web design', 'applications', 'web development']
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {categories.map(category => (
            <li className="filter-item" key={category}>
              <button 
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select">
            <div className="select-value">
              {selectedCategory === 'all' ? 'Select category' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className="select-list">
            {categories.map(category => (
              <li className="select-item" key={category}>
                <button onClick={() => setSelectedCategory(category)}>
                  {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map(project => (
            <li className="project-item active" key={project.id}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

'use client'

export default function Resume() {
  const education = [
    { title: 'Suryodaya College of Engineering & Technology', years: '2024 — 2028', description: 'B.Tech Data Science - Currently in 2nd year pursuing degree with focus on data analysis, machine learning, and problem-solving through real-world projects.' },
    { title: 'Janta Mahavidyalaya Chandrapur', years: '12th Grade', description: 'Higher secondary education with emphasis on specialized subjects, preparing for college entrance and developing advanced analytical and critical thinking skills.' },
    { title: 'Stella Maris School Rajura', years: '10th Grade', description: 'Secondary education focusing on foundational academics and building core knowledge in mathematics, science, and languages for future studies.' }
  ]

  const skills = [
    { name: 'Web Design', percentage: 85 },
    { name: 'Fullstack Development', percentage: 80 },
    { name: 'Graphic Design', percentage: 75 },
    { name: 'React.js', percentage: 82 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'Python', percentage: 88 },
    { name: 'Data Analysis', percentage: 80 },
    { name: 'UI/UX Design', percentage: 78 },
    { name: 'Branding', percentage: 90 }
  ]

  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((item, idx) => (
            <li className="timeline-item" key={idx}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.years}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, idx) => (
            <li className="skills-item" key={idx}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width: `${skill.percentage}%`}} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

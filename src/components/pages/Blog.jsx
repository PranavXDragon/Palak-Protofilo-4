'use client'

const blogPosts = [
  { id: 1, title: 'Getting Started with React.js in 2026', image: '/assets/images/blog-1.jpg', category: 'Web Development', date: 'Apr 10, 2026', excerpt: 'My journey learning React and building dynamic web applications. Tips and tricks for beginners starting with React ecosystem.' },
  { id: 2, title: 'Data Science Learning Path for Beginners', image: '/assets/images/blog-2.jpg', category: 'Data Science', date: 'Mar 25, 2026', excerpt: 'Exploring essential tools and libraries in data science. A comprehensive guide to Python, Pandas, and machine learning basics.' },
  { id: 3, title: 'Building a Fullstack Web Application', image: '/assets/images/blog-3.jpg', category: 'Web Development', date: 'Mar 5, 2026', excerpt: 'Step-by-step approach to developing both frontend and backend. Creating scalable applications with modern technologies.' },
  { id: 4, title: 'UI/UX Design Principles and Best Practices', image: '/assets/images/blog-4.jpg', category: 'Design', date: 'Feb 15, 2026', excerpt: 'Understanding user experience and creating intuitive interfaces. How design thinking improves web application usability.' }
]

export default function Blog() {
  return (
    <article className="blog active">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map(post => (
            <li className="blog-post-item" key={post.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot" />
                    <time dateTime="2022-02-23">{post.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}


import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/images/blog1.svg',
      title: 'Digital Treatment Planning: The Future of Orthodontics',
      excerpt: 'Discover how digital treatment planning is revolutionizing orthodontic care, offering precision, efficiency, and better patient outcomes.',
      date: 'November 10, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      image: '/images/blog2.svg',
      title: 'Understanding Clear Aligner Therapy: A Complete Guide',
      excerpt: 'Learn everything you need to know about clear aligner therapy, from treatment planning to patient care and long-term results.',
      date: 'November 8, 2025',
      readTime: '7 min read'
    },
    {
      id: 3,
      image: '/images/blog3.svg',
      title: 'Case Study: Complex Malocclusion Treatment Success',
      excerpt: 'A detailed case study showcasing how our digital platform helped achieve outstanding results in a challenging orthodontic case.',
      date: 'November 5, 2025',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title">Explore Our Latest Insights</h2>
          <p className="blog-subtitle">
            Stay updated with the latest trends, techniques, and insights in digital orthodontics.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read-more">Read More →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <button className="blog-button">View All Blogs</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

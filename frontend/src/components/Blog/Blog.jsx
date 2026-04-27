import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Blog.module.css';
import { blogsData } from '../../data';

const Blog = () => {
  const [blogs] = useState(blogsData);

  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <div className={styles.blogGrid}>
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <article key={index} className={styles.blogCard}>
                <div className={styles.blogMeta}>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogContent}>{blog.content}</p>
                <Link to={`/blog/${blog.id}`} className={styles.readMore}>Read Article &rarr;</Link>
              </article>
            ))
          ) : (
            <p>Loading articles...</p>
          )}
        </div>
      </div>
    </section>
  );
};


export default Blog;

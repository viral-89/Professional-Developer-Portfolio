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
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogContent}>{blog.content}</p>
                <a href="#" className={styles.readMore}>Read Article &rarr;</a>
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

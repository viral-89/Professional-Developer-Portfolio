import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../../data';
import styles from './BlogPost.module.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogsData.find(b => b.id === id);

  if (!post) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Article not found</h2>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.blogPostPage}>
      <nav className={styles.backNav}>
        <div className="container">
          <Link to="/" className={styles.backLink}>← Back to Portfolio</Link>
        </div>
      </nav>

      <article className="container">
        <header className={styles.header}>
          <div className={styles.meta}>
            <span>{post.readTime}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        <div className={styles.content}>
          <p>{post.fullContent}</p>
        </div>

        <footer className={styles.footer}>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;

import { Link } from 'react-router-dom'
import { blogPosts } from '../../portfolio'
import './Blog.css'

const Blog = () => (
  <section id='blog' className='section blog'>
    <h2 className='section__title'>Blog</h2>

    <div className='blog__grid'>
      {blogPosts.map((post) => (
        <article key={post.id} className='blog__post'>
          <div className='blog__post-header'>
            <h3 className='blog__post-title'>
              <Link to={`/blog/${post.id}`} className='blog__post-link'>
                {post.title}
              </Link>
            </h3>
            <p className='blog__post-subtitle'>{post.subtitle}</p>
            <div className='blog__post-meta'>
              <span className='blog__post-date'>{post.date}</span>
              <span className='blog__post-read-time'>{post.readTime}</span>
            </div>
          </div>
          
          <p className='blog__post-excerpt'>{post.excerpt}</p>
          
          <div className='blog__post-tags'>
            {post.tags.map((tag) => (
              <span key={tag} className='blog__tag'>
                {tag}
              </span>
            ))}
          </div>
          
          <Link to={`/blog/${post.id}`} className='btn btn--outline blog__read-more'>
            Read More
          </Link>
        </article>
      ))}
    </div>
  </section>
)

export default Blog


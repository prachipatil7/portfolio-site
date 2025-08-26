import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { projectCategories } from '../../portfolio'
import './BlogPost.css'

const BlogPost = () => {
  const { id } = useParams()
  
  // Find the project that has this blog post
  const allProjects = Object.values(projectCategories).flat();
  
  const project = allProjects.find(p => p.blogPost && p.blogPost.id === id)
  const post = project?.blogPost
  
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (post && post.contentFile) {
      fetch(`/portfolio-site/blog-posts/${post.contentFile}`)
        .then(response => response.text())
        .then(text => {
          setContent(text)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error loading blog post content:', error)
          setContent('Error loading blog post content.')
          setLoading(false)
        })
    }
  }, [post])

  if (!post) {
    return <Navigate to="/" replace />
  }

  if (loading) {
    return (
      <article className='blog-post'>
        <div className='blog-post__loading'>
          <p>Loading...</p>
        </div>
      </article>
    )
  }

  // Custom components for ReactMarkdown to use our CSS classes
  const components = {
    h1: ({ children }) => <h1 className="blog-content__main-heading">{children}</h1>,
    h2: ({ children }) => <h2 className="blog-content__heading">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-content__subheading">{children}</h3>,
    p: ({ children }) => <p className="blog-content__paragraph">{children}</p>,
    li: ({ children }) => <li className="blog-content__list-item">{children}</li>,
    img: ({ src, alt }) => <img src={src} alt={alt} className="blog-content__image" />,
    table: ({ children }) => <table className="blog-content__table">{children}</table>,
    th: ({ children }) => <th className="blog-content__table-header">{children}</th>,
    td: ({ children }) => <td className="blog-content__table-cell">{children}</td>,
    blockquote: ({ children }) => <blockquote className="blog-content__blockquote">{children}</blockquote>,
    code: ({ inline, children }) => 
      inline ? 
        <code className="blog-content__code-inline">{children}</code> : 
        <pre className="blog-content__code-block"><code>{children}</code></pre>
  }

  return (
    <article className='blog-post'>
      <div className='blog-post__header'>
        <Link to='/' className='blog-post__back-link'>
          ← Back to Portfolio
        </Link>
        
        <h1 className='blog-post__title'>{post.title}</h1>
        <p className='blog-post__subtitle'>{post.subtitle}</p>
        
        <div className='blog-post__meta'>
          <span className='blog-post__date'>{post.date}</span>
          <span className='blog-post__read-time'>{post.readTime}</span>
        </div>
        
        <div className='blog-post__tags'>
          {post.tags.map((tag) => (
            <span key={tag} className='blog-post__tag'>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className='blog-post__content'>
        <ReactMarkdown 
          components={components} 
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>

      <div className='blog-post__footer'>
        <Link to='/' className='btn btn--outline'>
          ← Back to Portfolio
        </Link>
      </div>
    </article>
  )
}

export default BlogPost


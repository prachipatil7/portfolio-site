import uniqid from 'uniqid'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
import DescriptionIcon from '@material-ui/icons/Description';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import './ProjectContainer.css'

function ProjectContainer({ project }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
  <div className='project' 
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}>
    <div>
      <h3>{project.name}</h3>
      <h5>{project.subtitle}</h5>
      {project.date && (
        <p className='project__date'>{project.date}</p>
      )}
      { isHovering ? 
        <img src={project.backgroundImage} alt={project.name}/> :
        <p className='project__description'>{project.description}</p> 
      }
    </div>
    <div>
      <p><br/><i>{project.callToAction}</i></p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.blogPost && (
        <div className='project__read-more'>
          <Link
            to={`/project-blog/${project.blogPost.id}`}
            className='btn btn--outline'
          >
            Read More
          </Link>
        </div>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      )}

      {project.article && (
        <a
          href={project.article}
          aria-label='live preview'
          className='link link--icon'
          target="_blank"
          rel="noreferrer"
        >
          <DescriptionIcon />
        </a>
      )}

      {project.video && (
        <a
          href={project.video}
          aria-label='live preview'
          className='link link--icon'
          target="_blank"
          rel="noreferrer"
        >
          <YouTubeIcon />
        </a>
      )}

    {project.game && (
        <a
          href={project.game}
          aria-label='live preview'
          className='link link--icon'
          target="_blank"
          rel="noreferrer"
        >
          <VideogameAssetIcon />
        </a>
      )}
    </div>
    
  </div>
)
}

export default ProjectContainer

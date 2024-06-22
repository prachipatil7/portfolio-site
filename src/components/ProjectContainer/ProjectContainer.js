import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
import DescriptionIcon from '@material-ui/icons/Description';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <div>
      <h3>{project.name}</h3>
      <h5>{project.subtitle}</h5>
      <p className='project__description'>{project.description}</p>
      <ul >
        {project?.list?.map((item) => <li>{item}</li>)}
      </ul>
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
    </div>
    
  </div>
)

export default ProjectContainer

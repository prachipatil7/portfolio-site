import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className='about__container'>
        <div className='about__content'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && (
            <h2 className='about__role'>
              A {role}
            </h2>
          )}
          <div className='about__desc'>
            <p>I build and productionize machine learning and agentic systems at the cutting edge of AI.</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '1em', marginBottom: '1em' }}>
              <li style={{ marginBottom: '0.5em' }}>At <strong>John Deere</strong>, I created their first agentic AI framework.</li>
              <li style={{ marginBottom: '0.5em' }}>As <strong>co-founder & CTO of Gumbo</strong>, I led a team building an LLM-powered SaaS product.</li>
              <li style={{ marginBottom: '0.5em' }}>At <strong>CMU</strong>, I&apos;m deepening my expertise in multimodal learning, NLP, and AI productionization.</li>
            </ul>
            <p>I bridge technical excellence and product development, with a belief that great AI products require both rigorous engineering and thoughtful design.</p>
          </div>

          <div className='about__contact center'>
            {resume && (
              <a href={resume} target="_blank" rel="noreferrer">
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
        
        <div className='about__photo'>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/profile_pic_pro.jpeg`} 
            alt={`${name}'s profile`}
            className='about__photo-img'
          />
        </div>
      </div>
    </div>
  )
}

export default About

import uniqid from 'uniqid'
import { projectCategories } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const hasProjects = Object.values(projectCategories).some(category => category.length > 0)
  
  if (!hasProjects) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      {Object.entries(projectCategories).map(([categoryName, categoryProjects]) => {
        if (categoryProjects.length === 0) return null
        
        return (
          <div key={categoryName} className='projects__category'>
            <h3 className='projects__category-title'>{categoryName}</h3>
            <div className='projects__grid'>
              {categoryProjects.map((project) => (
                <ProjectContainer key={uniqid()} project={project} />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Projects

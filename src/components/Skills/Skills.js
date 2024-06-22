import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
        {skills.map((skill) => (
          <div className='skills__container'>
            <h5>{skill.category}</h5>
            <ul className='skills__list'>
            {skill.skills.map((item) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {item}
              </li>
            ))}
            </ul>
          </div>
        ))}
    </section>
  )
}

export default Skills

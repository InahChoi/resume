import { resume } from '../data/resume'
import styles from './ExperienceList.module.css'

export function ExperienceList() {
  return (
    <div className={styles.experience}>
      <h2 className={styles.title}>EXPERIENCE</h2>
      <ul className={styles.list}>
        {resume.experiences.map(({ id, company, role, period, highlights }) => (
          <li key={id} className={styles.item}>
            <div className={styles.header}>
              <h3 className={styles.company}>{company}</h3>
              <span className={styles.period}>{period}</span>
            </div>
            <p className={styles.role}>{role}</p>
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { SectionBlock } from './layout/SectionBlock'
import { resume } from '../data/resume'
import styles from './ProjectGrid.module.css'

export function ProjectGrid() {
  return (
    <SectionBlock title="PROJECT">
      <ul className={styles.grid}>
        {resume.projects.map(({ id, title, period, techStack }) => (
          <li key={id} className={styles.card}>
            <div className={styles.thumbnail} aria-hidden="true" />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.period}>{period}</p>
            <ul className={styles.stack}>
              {techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionBlock>
  )
}

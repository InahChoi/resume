import { SectionBlock } from './layout/SectionBlock'
import { resume } from '../data/resume'
import { formatTotalCareer } from '../utils/career'
import styles from './ExperienceList.module.css'

export function ExperienceList() {
  return (
    <div className={styles.experience}>
      <SectionBlock
        title="EXPERIENCE"
        layout="stack"
        meta={
          <p className={styles.total}>{formatTotalCareer(resume.experiences)}</p>
        }
      >
        <ul className={styles.list}>
          {resume.experiences.map((experience) => (
            <li key={experience.id} className={styles.item}>
              <div className={styles.itemHead}>
                <div className={styles.periodRow}>
                  <span
                    className={
                      experience.end ? styles.periodEnded : styles.period
                    }
                  >
                    {experience.end
                      ? `${experience.start} ~ ${experience.end}`
                      : `${experience.start} ~`}
                  </span>
                </div>

                <div className={styles.companyBlock}>
                  <div className={styles.companyRow}>
                    <span
                      className={
                        experience.end === null
                          ? styles.dot
                          : `${styles.dot} ${styles.dotEnded}`
                      }
                      aria-label={experience.end === null ? '재직 중' : '퇴직'}
                    />
                    <h3 className={styles.company}>{experience.company}</h3>
                  </div>
                  <p className={styles.scopes}>{experience.scopes.join(' ')}</p>
                </div>
              </div>

              <ul className={styles.projects}>
                {experience.projects.map((project) => (
                  <li key={project.title} className={styles.project}>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <ul className={styles.tags}>
                      {project.techStack.map((tech) => (
                        <li key={tech}>
                          <span className={styles.tag}>{tech}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className={styles.highlights}>
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </div>
  )
}

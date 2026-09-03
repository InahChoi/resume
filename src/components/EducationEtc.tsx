import { SectionBlock } from './layout/SectionBlock'
import { resume } from '../data/resume'
import styles from './EducationEtc.module.css'

export function EducationEtc() {
  const { education, contact } = resume

  return (
    <SectionBlock title="EDUCATION">
      <ul className={styles.list}>
        {education.map(({ school, major, period, note }) => (
          <li key={school} className={styles.item}>
            <div className={styles.header}>
              <h3 className={styles.school}>{school}</h3>
              <span className={styles.period}>{period}</span>
            </div>
            <p className={styles.major}>{major}</p>
            {note && <p className={styles.note}>{note}</p>}
          </li>
        ))}
      </ul>

      <div className={styles.contact}>
        <h3 className={styles.contactTitle}>CONTACT</h3>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        {contact.blog && (
          <p>
            <a href={contact.blog} target="_blank" rel="noreferrer">
              Blog
            </a>
          </p>
        )}
      </div>
    </SectionBlock>
  )
}

import { SectionBlock } from './layout/SectionBlock'
import { resume } from '../data/resume'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <SectionBlock title="SKILL" layout="stack">
      <ul className={styles.list}>
        {resume.skills.map(({ title, items }) => (
          <li key={title} className={styles.row}>
            <span className={styles.category}>{title}</span>
            <ul className={styles.tags}>
              {items.map((item) => (
                <li key={item}>
                  <span className={styles.tag}>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionBlock>
  )
}

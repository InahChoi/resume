import { resume } from '../data/resume'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <div className={styles.skills}>
      <h2 className={styles.title}>SKILL</h2>
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
    </div>
  )
}

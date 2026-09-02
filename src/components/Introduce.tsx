import { resume } from '../data/resume'
import styles from './Introduce.module.css'

export function Introduce() {
  const { name, role, links, paragraphs } = resume.introduce

  return (
    <div className={styles.introduce}>
      <div className={styles.profile}>
        <div className={styles.imagePlaceholder} aria-hidden="true" />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
        <ul className={styles.links}>
          {links.map(({ label, url }) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>INTRODUCE</h2>
        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

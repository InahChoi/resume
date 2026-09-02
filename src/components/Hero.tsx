import { resume } from '../data/resume'
import styles from './Hero.module.css'

export function Hero() {
  const { welcome, name, tagline } = resume.hero

  const taglineLines = tagline.split('\n')

  return (
    <div className={styles.hero}>
      <p className={styles.welcome}>{welcome}</p>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.tagline}>
        {taglineLines.map((line, index) => (
          <span key={line}>
            {line}
            {index < taglineLines.length - 1 && <br />}
          </span>
        ))}
      </p>

      <button
        type="button"
        className={styles.scrollHint}
        onClick={() =>
          document.getElementById('introduce')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to Introduce section"
      >
        <span>SCROLL</span>
        <span className={styles.arrow} aria-hidden="true">
          ↓
        </span>
      </button>
    </div>
  )
}

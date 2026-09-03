import { Header } from './layout/Header'
import { resume } from '../data/resume'
import styles from './Hero.module.css'

export function Hero() {
  const { welcome, name, tagline } = resume.hero
  const taglineLines = tagline.split('\n')

  return (
    <div className={styles.heroSection}>
      <Header />

      <div className={styles.hero}>
      <div className={styles.content}>
        <p className={`${styles.welcome} ${styles.fadeItem}`} data-order="1">
          {welcome}
        </p>
        <h1 className={`${styles.name} ${styles.fadeItem}`} data-order="2">
          {name}
        </h1>
        <div className={styles.tagline}>
          {taglineLines.map((line, index) => (
            <span
              key={line}
              className={`${styles.taglineLine} ${styles.fadeItem}`}
              data-order={String(index + 3)}
            >
              {line}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={styles.scrollHint}
        onClick={() =>
          document.getElementById('introduce')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to Introduce section"
      >
        <span>SCROLL</span>
        <svg
          className={styles.chevron}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
    </div>
  )
}

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.logo}>
        INAH.dev
      </a>
    </header>
  )
}

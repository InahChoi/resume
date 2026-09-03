import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <a href="#hero" className={styles.logo}>
          INAH.dev
        </a>
      </div>
    </header>
  )
}

import { NAV_SECTIONS } from '../../data/sections'
import styles from './SideNav.module.css'

interface SideNavProps {
  activeId: string
  onNavigate: (id: string) => void
}

export function SideNav({ activeId, onNavigate }: SideNavProps) {
  return (
    <nav className={styles.nav} aria-label="Section navigation">
      <div className={styles.shell}>
        <ul className={styles.list}>
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={activeId === id ? styles.active : undefined}
                onClick={() => onNavigate(id)}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

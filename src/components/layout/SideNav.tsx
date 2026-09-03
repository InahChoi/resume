import { useEffect, useId, useState } from 'react'
import { NAV_SECTIONS } from '../../data/sections'
import { useTheme, type Theme } from '../../hooks/useTheme'
import styles from './SideNav.module.css'

interface SideNavProps {
  activeId: string
  onNavigate: (id: string) => void
}

function ThemeToggle({
  theme,
  onSelect,
}: {
  theme: Theme
  onSelect: (theme: Theme) => void
}) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className={styles.themeButton}
      onClick={() => onSelect(nextTheme)}
      aria-label={nextTheme === 'dark' ? '다크 모드로 전환' : '라이트 모드로 전환'}
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀️' : '⭐️'}</span>
    </button>
  )
}

function NavList({
  activeId,
  onNavigate,
  className,
}: {
  activeId: string
  onNavigate: (id: string) => void
  className?: string
}) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(' ')}>
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
  )
}

export function SideNav({ activeId, onNavigate }: SideNavProps) {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const handleNavigate = (id: string) => {
    setMenuOpen(false)
    onNavigate(id)
  }

  return (
    <>
      <nav className={styles.desktopNav} aria-label="Section navigation">
        <div className={styles.shell}>
          <div className={styles.panel}>
            <NavList activeId={activeId} onNavigate={onNavigate} />
            <ThemeToggle theme={theme} onSelect={setTheme} />
          </div>
        </div>
      </nav>

      <header className={styles.mobileHeader}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(event) => {
            event.preventDefault()
            setMenuOpen(false)
            onNavigate('hero')
          }}
        >
          INAH.dev
        </a>

        <button
          type="button"
          className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : undefined]
            .filter(Boolean)
            .join(' ')}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : undefined]
          .filter(Boolean)
          .join(' ')}
        id={menuId}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={styles.mobileBackdrop}
          aria-label="메뉴 닫기"
          onClick={() => setMenuOpen(false)}
        />
        <div className={styles.mobilePanel} role="dialog" aria-modal="true" aria-label="메뉴">
          <NavList
            activeId={activeId}
            onNavigate={handleNavigate}
            className={styles.mobileList}
          />
          <ThemeToggle theme={theme} onSelect={setTheme} />
        </div>
      </div>
    </>
  )
}

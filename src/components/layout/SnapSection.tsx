import type { ReactNode } from 'react'
import styles from './SnapSection.module.css'

interface SnapSectionProps {
  id: string
  children: ReactNode
  className?: string
  align?: 'center' | 'start'
}

export function SnapSection({
  id,
  children,
  className,
  align = 'start',
}: SnapSectionProps) {
  return (
    <section
      id={id}
      className={[
        styles.section,
        align === 'center' ? styles.center : styles.start,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  )
}

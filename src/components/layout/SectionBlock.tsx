import type { ReactNode } from 'react'
import styles from './SectionBlock.module.css'

interface SectionBlockProps {
  title: string
  children: ReactNode
  className?: string
  bodyClassName?: string
  layout?: 'split' | 'stack'
  meta?: ReactNode
}

export function SectionBlock({
  title,
  children,
  className,
  bodyClassName,
  layout = 'split',
  meta,
}: SectionBlockProps) {
  return (
    <div
      className={[
        styles.block,
        layout === 'stack' ? styles.stack : undefined,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={[styles.heading, meta ? styles.headingWithMeta : undefined]
          .filter(Boolean)
          .join(' ')}
      >
        {meta ? (
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.meta}>{meta}</div>
          </div>
        ) : (
          <h2 className={styles.title}>{title}</h2>
        )}
        <span className={styles.titleLine} aria-hidden="true" />
      </div>
      <div className={[styles.body, bodyClassName].filter(Boolean).join(' ')}>
        {children}
      </div>
    </div>
  )
}

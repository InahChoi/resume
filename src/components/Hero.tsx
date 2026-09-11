import { useEffect, useRef, useState } from 'react'
import { Header } from './layout/Header'
import { resume } from '../data/resume'
import styles from './Hero.module.css'

function TypewriterEyebrow({
  from,
  to,
  className,
}: {
  from: string
  to: string
  className?: string
}) {
  const phrases = [from, to]
  const [text, setText] = useState(from)
  const textRef = useRef(from)
  const phraseIndexRef = useRef(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setText(from)
      return
    }

    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const schedule = (fn: () => void, delay: number) => {
      timer = setTimeout(fn, delay)
    }

    const holdThenDelete = () => {
      if (cancelled) return
      schedule(deleteStep, 1600)
    }

    const deleteStep = () => {
      if (cancelled) return

      const current = textRef.current
      if (current.length === 0) {
        phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length
        schedule(typeStep, 280)
        return
      }

      const next = current.slice(0, -1)
      textRef.current = next
      setText(next)
      schedule(deleteStep, 48)
    }

    const typeStep = () => {
      if (cancelled) return

      const target = phrases[phraseIndexRef.current]
      const current = textRef.current

      if (current === target) {
        holdThenDelete()
        return
      }

      const next = target.slice(0, current.length + 1)
      textRef.current = next
      setText(next)
      schedule(typeStep, 52)
    }

    schedule(holdThenDelete, 1200)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [from, to])

  return (
    <p
      className={[styles.eyebrow, className].filter(Boolean).join(' ')}
      data-order="1"
      aria-label={`${from}, ${to}`}
    >
      <span className={styles.eyebrowText}>{text}</span>
      <span className={styles.caret} aria-hidden="true">
        |
      </span>
    </p>
  )
}

export function Hero() {
  const { eyebrow, eyebrowHover, name, tagline } = resume.hero

  return (
    <div className={styles.heroSection}>
      <Header />

      <div className={styles.hero}>
        <div className={styles.content}>
          <TypewriterEyebrow
            from={eyebrow}
            to={eyebrowHover}
            className={styles.fadeItem}
          />
          <h1 className={`${styles.name} ${styles.fadeItem}`} data-order="2">
            {name}
          </h1>
          <p className={`${styles.tagline} ${styles.fadeItem}`} data-order="3">
            {tagline}
          </p>
        </div>

        <button
          type="button"
          className={styles.scrollHint}
          onClick={() =>
            document.getElementById('introduce')?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="소개 섹션으로 이동"
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

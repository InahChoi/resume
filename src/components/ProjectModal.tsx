import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../data/resume.types'
import { highlightCode } from '../utils/highlightCode'
import { renderInlineCode } from '../utils/richText'
import styles from './ProjectModal.module.css'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 2L12 12M12 2L2 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5C4.41 1.5 1.5 4.54 1.5 8.24c0 3.01 2.09 5.53 4.91 6.07.36.07.49-.16.49-.35 0-.17-.01-.74-.01-1.34-2.03.37-2.46-.88-2.46-.88-.33-.84-.81-1.06-.81-1.06-.66-.45.05-.44.05-.44.73.05 1.12.76 1.12.76.65 1.12 1.71.8 2.13.61.07-.47.25-.8.46-.98-1.62-.18-3.32-.81-3.32-3.62 0-.8.29-1.45.76-1.96-.08-.19-.33-.94.07-1.96 0 0 .62-.2 2.03.75.59-.16 1.22-.24 1.85-.24.63 0 1.26.08 1.85.24 1.41-.95 2.03-.75 2.03-.75.4 1.02.15 1.77.07 1.96.47.51.76 1.16.76 1.96 0 2.82-1.71 3.44-3.34 3.62.26.22.49.66.49 1.33 0 .96-.01 1.73-.01 1.97 0 .19.13.42.49.35 2.82-.54 4.91-3.06 4.91-6.07C14.5 4.54 11.59 1.5 8 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function NpmIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1 1.5h14v13H1v-13Zm1.5 1.5v10h4.25V5.75h2.5V13H13.5V3H2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function DocsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 2.5h6.2L12.5 5.3V13.5H3.5V2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M9.5 2.5V5.5H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path
        d="M5.5 8H10.5M5.5 10.5H9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LinkIcon({ kind }: { kind: string }) {
  if (kind === 'npm') return <NpmIcon />
  if (kind === 'docs') return <DocsIcon />
  if (kind === 'github') return <GitHubIcon />
  return null
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const detail = project.detail
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!detail) return null

  const thumbSrc = project.imageUrl

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="닫기"
        >
          <CloseIcon />
        </button>

        <div className={styles.layout}>
          <aside className={styles.aside}>
            {thumbSrc ? (
              <img
                className={styles.thumb}
                src={thumbSrc}
                alt=""
                width={220}
                height={220}
              />
            ) : (
              <div className={styles.thumb} aria-hidden="true" />
            )}

            <div className={styles.asideMeta}>
              <p className={styles.namespace}>
                <span>{detail.namespace}</span>
                <span className={styles.slugInline}>{detail.slug}</span>
              </p>
              <p className={styles.techText}>
                {project.techStack.join(' · ')}
              </p>
              {detail.githubUrl ? (
                <a
                  className={styles.asideLink}
                  href={detail.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                  <span>Repository</span>
                </a>
              ) : null}
            </div>
          </aside>

          <div className={styles.main}>
            <header className={styles.header}>
              <p className={styles.eyebrow}>PROJECT</p>
              <h2 id={titleId} className={styles.title}>
                {detail.displayName}
              </h2>
              {project.summary || detail.summary ? (
                <p className={styles.summary}>
                  {project.summary ?? detail.summary}
                </p>
              ) : null}
            </header>

            <div className={styles.body}>
              {detail.body.map((block, index) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={index} className={styles.paragraph}>
                      {renderInlineCode(block.text, styles.inlineCode)}
                    </p>
                  )
                }

                if (block.type === 'heading') {
                  return (
                    <h3 key={index} className={styles.heading}>
                      {block.text}
                    </h3>
                  )
                }

                if (block.type === 'code') {
                  return (
                    <figure key={index} className={styles.codeFigure}>
                      <pre className={styles.code}>
                        <code>
                          {highlightCode(block.code, {
                            keyword: styles.tokenKeyword,
                            string: styles.tokenString,
                            comment: styles.tokenComment,
                            plain: undefined,
                          })}
                        </code>
                      </pre>
                      {block.note ? (
                        <figcaption className={styles.codeNote}>{block.note}</figcaption>
                      ) : null}
                    </figure>
                  )
                }

                return (
                  <ul key={index} className={styles.list}>
                    {block.items.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong>
                        <span className={styles.listSep}>—</span>
                        {renderInlineCode(item.description, styles.inlineCode)}
                      </li>
                    ))}
                  </ul>
                )
              })}
            </div>

            {detail.links && detail.links.length > 0 ? (
              <footer className={styles.footer}>
                <ul className={styles.links}>
                  {detail.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a
                        className={styles.linkButton}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon kind={link.kind} />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </footer>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

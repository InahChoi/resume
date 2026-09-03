import { useState } from 'react'
import { SectionBlock } from './layout/SectionBlock'
import { resume } from '../data/resume'
import styles from './Introduce.module.css'

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 5L8 9.5L14.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5C4.41 1.5 1.5 4.54 1.5 8.24c0 3.01 2.09 5.53 4.91 6.07.36.07.49-.16.49-.35 0-.17-.01-.74-.01-1.34-2.03.37-2.46-.88-2.46-.88-.33-.84-.81-1.06-.81-1.06-.66-.45.05-.44.05-.44.73.05 1.12.76 1.12.76.65 1.12 1.71.8 2.13.61.07-.47.25-.8.46-.98-1.62-.18-3.32-.81-3.32-3.62 0-.8.29-1.45.76-1.96-.08-.19-.33-.94.07-1.96 0 0 .62-.2 2.03.75.59-.16 1.22-.24 1.85-.24.63 0 1.26.08 1.85.24 1.41-.95 2.03-.75 2.03-.75.4 1.02.15 1.77.07 1.96.47.51.76 1.16.76 1.96 0 2.82-1.71 3.44-3.34 3.62.26.22.49.66.49 1.33 0 .96-.01 1.73-.01 1.97 0 .19.13.42.49.35 2.82-.54 4.91-3.06 4.91-6.07C14.5 4.54 11.59 1.5 8 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const input = document.createElement('textarea')
  input.value = value
  input.setAttribute('readonly', '')
  input.style.position = 'fixed'
  input.style.opacity = '0'
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}

export function Introduce() {
  const { name, role, email, githubHandle, githubUrl, imageUrl, paragraphs } =
    resume.introduce
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await copyText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={styles.introduce}>
      <div className={styles.profileRow}>
        <div className={styles.imageWrap}>
          {imageUrl ? (
            <img src={imageUrl} alt={`${name} 프로필`} className={styles.image} />
          ) : (
            <div className={styles.imagePlaceholder} aria-hidden="true" />
          )}
        </div>

        <div className={styles.profileInfo}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.role}>{role}</p>
          <ul className={styles.contacts}>
            <li>
              <EmailIcon />
              <button
                type="button"
                className={styles.emailButton}
                onClick={handleCopyEmail}
                aria-label={`${email} 복사하기`}
              >
                <span>{email}</span>
                {copied ? (
                  <span className={styles.copiedLabel} aria-live="polite">
                    복사됨
                  </span>
                ) : null}
              </button>
            </li>
            <li>
              <GitHubIcon />
              <a href={githubUrl} target="_blank" rel="noreferrer">
                {githubHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <SectionBlock
        title="INTRODUCE"
        className={styles.contentRow}
        bodyClassName={styles.paragraphs}
      >
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SectionBlock>
    </div>
  )
}

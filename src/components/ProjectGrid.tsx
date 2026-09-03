import { useState, type KeyboardEvent } from 'react'
import { SectionBlock } from './layout/SectionBlock'
import { ProjectModal } from './ProjectModal'
import { resume } from '../data/resume'
import type { Project } from '../data/resume.types'
import styles from './ProjectGrid.module.css'

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null)

  const openProject = (project: Project) => {
    if (!project.detail) return
    setSelected(project)
  }

  return (
    <>
      <SectionBlock title="PROJECT" layout="stack">
        <ul className={styles.grid}>
          {resume.projects.map((project) => {
            const { id, title, imageUrl, detail } = project
            const interactive = Boolean(detail)

            const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
              if (!interactive) return
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                openProject(project)
              }
            }

            return (
              <li key={id}>
                <article
                  className={[styles.card, interactive ? styles.cardInteractive : undefined]
                    .filter(Boolean)
                    .join(' ')}
                  {...(interactive
                    ? {
                        role: 'button',
                        tabIndex: 0,
                        'aria-label': `${title} 상세 보기`,
                        onClick: () => openProject(project),
                        onKeyDown,
                      }
                    : {})}
                >
                  <div className={styles.thumbFrame}>
                    {imageUrl ? (
                      <img
                        className={styles.thumbnail}
                        src={imageUrl}
                        alt=""
                        width={250}
                        height={250}
                        draggable={false}
                      />
                    ) : (
                      <div className={styles.thumbnail} aria-hidden="true" />
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  {project.summary ? (
                    <p className={styles.cardSummary}>{project.summary}</p>
                  ) : null}
                  {interactive ? (
                    <span className={styles.more}>자세히 보기 →</span>
                  ) : null}
                </article>
              </li>
            )
          })}
        </ul>
      </SectionBlock>

      {selected?.detail ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </>
  )
}

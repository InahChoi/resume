import { SectionBlock } from './layout/SectionBlock'
import { resume } from '../data/resume'
import type { EducationEntry } from '../data/resume.types'
import styles from './EducationEtc.module.css'

function EntryList({ items }: { items: EducationEntry[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className={styles.row}>
          <div className={styles.periodCell}>
            <span className={styles.period}>{item.period}</span>
          </div>
          <div className={styles.content}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function RailMeta() {
  return <span className={styles.railMeta} aria-hidden="true" />
}

export function EducationEtc() {
  const { introduce } = resume

  return (
    <div className={styles.page}>
      <div className={styles.sections}>
        <SectionBlock title="EDUCATION" layout="stack" meta={<RailMeta />}>
          <EntryList items={resume.education} />
        </SectionBlock>

        <SectionBlock title="ETC" layout="stack" meta={<RailMeta />}>
          <EntryList items={resume.etc} />
        </SectionBlock>
      </div>

      <footer className={styles.footer}>
        <p className={styles.copyright}>© 2026 {introduce.name}</p>
      </footer>
    </div>
  )
}

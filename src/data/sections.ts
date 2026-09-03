export interface SectionItem {
  id: string
  label: string
}

export const SECTIONS: SectionItem[] = [
  { id: 'hero', label: 'HERO' },
  { id: 'introduce', label: 'INTRODUCE' },
  { id: 'skills', label: 'SKILL' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECT' },
  { id: 'education', label: 'EDUCATION & ETC' },
]

export const NAV_SECTIONS = SECTIONS.filter((section) => section.id !== 'hero')

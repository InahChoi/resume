export interface Hero {
  welcome: string
  name: string
  tagline: string
}

export interface Introduce {
  name: string
  role: string
  email: string
  githubHandle: string
  githubUrl: string
  imageUrl?: string
  paragraphs: string[]
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface ExperienceProject {
  title: string
  techStack: string[]
  highlights: string[]
}

export interface Experience {
  id: string
  company: string
  scopes: string[]
  start: string
  end: string | null
  projects: ExperienceProject[]
}

export type ProjectBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'code'; code: string; language?: string; note?: string }
  | {
      type: 'list'
      items: Array<{ title: string; description: string }>
    }

export interface ProjectLink {
  kind: 'npm' | 'docs' | 'github' | 'link'
  label: string
  href: string
}

export interface ProjectDetail {
  namespace: string
  slug: string
  summary?: string
  displayName: string
  techLabel: string
  githubUrl?: string
  links?: ProjectLink[]
  body: ProjectBodyBlock[]
}

export interface Project {
  id: string
  title: string
  summary?: string
  period?: string
  techStack: string[]
  imageUrl?: string
  detail?: ProjectDetail
}

export interface EducationEntry {
  period: string
  title: string
  description: string
}

export interface Resume {
  hero: Hero
  introduce: Introduce
  skills: SkillCategory[]
  experiences: Experience[]
  projects: Project[]
  education: EducationEntry[]
  etc: EducationEntry[]
  contact: {
    email: string
    github: string
    blog?: string
  }
}

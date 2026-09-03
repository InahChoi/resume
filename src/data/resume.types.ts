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

export interface Project {
  id: string
  title: string
  period: string
  techStack: string[]
  imageUrl?: string
}

export interface Education {
  school: string
  major: string
  period: string
  note?: string
}

export interface Resume {
  hero: Hero
  introduce: Introduce
  skills: SkillCategory[]
  experiences: Experience[]
  projects: Project[]
  education: Education[]
  contact: {
    email: string
    github: string
    blog?: string
  }
}

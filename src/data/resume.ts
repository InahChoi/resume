import type { Resume } from './resume.types';

export const resume: Resume = {
  hero: {
    welcome: 'WELCOME TO MY PORTFOLIO',
    name: 'Choi InAh',
    tagline:
      'Building reliable servers to seamless user experiences,\nexpanding horizons into Full-Stack engineering.',
  },
  introduce: {
    name: '최인아',
    role: 'Backend Developer / Web Developer',
    links: [
      { label: 'GitHub', url: 'https://github.com/InahChoi' },
      { label: 'Velog', url: 'https://velog.io/@inah-_-' },
    ],
    paragraphs: [''],
  },
  skills: [
    { title: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'Python'] },
    { title: 'FRAMEWORKS & LIBRARIES', items: ['Node.js', 'React', 'Express'] },
    { title: 'DATABASES & INFRASTRUCTURE', items: ['MySQL', 'MongoDB', 'AWS'] },
    { title: 'TOOLS & ETC', items: ['Git', 'Docker', 'PM2'] },
  ],
  experiences: [
    {
      id: 'exp-1',
      company: '회사명',
      role: 'Backend Developer',
      period: '2021.11 – 현재',
      highlights: [''],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Project Title',
      period: '2024.01 – 2024.06',
      techStack: ['React', 'TypeScript'],
    },
  ],
  education: [
    {
      school: '서울디지털대학교',
      major: '소프트웨어학과',
      period: '2021 – 2025',
    },
  ],
  contact: {
    email: 'choiinah@kakao.com',
    github: 'https://github.com/InahChoi',
    blog: 'https://velog.io/@inah-_-',
  },
};

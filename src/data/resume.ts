import type { Resume } from './resume.types';

export const resume: Resume = {
  hero: {
    welcome: 'WELCOME TO MY PORTFOLIO',
    name: 'Choi InAh',
    tagline:
      'Building reliable servers to seamless user experiences.\nexpanding horizons into Full-Stack engineering.',
  },
  introduce: {
    name: '최인아',
    role: 'Backend Developer | Web Developer',
    email: 'choiinah@kakao.com',
    githubHandle: '@InahChoi',
    githubUrl: 'https://github.com/InahChoi',
    paragraphs: [
      'Node.js 기반 API 서버 개발 및 AWS 인프라 운영 경험을 가진 백엔드 개발자입니다. 서비스 초기 기획부터 API 설계, Database 모델링, 운영 및 성능 개선까지 전반적인 백엔드 개발 업무를 수행해왔습니다.',
      '특히 실제 서비스 운영 환경에서 발생하는 성능 이슈와 사용자 경험 개선에 관심이 많으며, 안정적인 서버 구조와 유지보수성을 고려한 개발을 지향합니다.',
      '현재에는',
    ],
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

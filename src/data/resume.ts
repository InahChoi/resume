import type { Resume } from './resume.types';
import projectThumb from '../assets/hero.png';
import profileImage from '../assets/profile.png';

export const resume: Resume = {
  hero: {
    eyebrow: 'Backend-Developer',
    eyebrowHover: 'Fullstack-Developer',
    name: 'Choi InAh',
    tagline:
      '안정적인 API와 인프라 설계를 지향하고, 현재는 풀스택으로 시야를 넓혀가고 있는 개발자 최인아입니다.',
  },
  introduce: {
    name: '최인아',
    role: 'Backend Developer | Fullstack Developer',
    email: 'choiinah@kakao.com',
    githubHandle: '@InahChoi',
    githubUrl: 'https://github.com/InahChoi',
    imageUrl: profileImage,
    paragraphs: [
      'Node.js 기반 API 서버 개발 및 AWS 인프라 운영 경험을 가진 백엔드 개발자입니다. 서비스 초기 기획부터 API 설계, Database 모델링, 운영 및 성능 개선까지 전반적인 백엔드 개발 업무를 수행해왔습니다.',
      '특히 실제 서비스 운영 환경에서 발생하는 성능 이슈와 사용자 경험 개선에 관심이 많으며, 안정적인 서버 구조와 유지보수성을 고려한 개발을 지향합니다.',
      '현재에는',
    ],
  },
  skills: [
    {
      title: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['Node.js', 'Express.js', 'Nest.js', 'Django', 'React.js'],
    },
    {
      title: 'Infrastructure & Databases',
      items: [
        'AWS EC2',
        'AWS RDS',
        'AWS CloudFront',
        'AWS S3',
        'AWS Lambda',
        'Nginx',
        'MySQL',
        'MongoDB',
        'Vercel',
      ],
    },
    {
      title: 'Tools & AI',
      items: ['VS Code', 'Git', 'Github', 'Cursor'],
    },
  ],
  experiences: [
    {
      id: 'visconad',
      company: '주식회사 비스컨애드',
      scopes: ['Frontend', 'Backend', 'App'],
      start: '2026-02',
      end: null,
      projects: [
        {
          title: '전시회 서비스 프론트, 백엔드 개발',
          techStack: [
            'KCP API',
            'QR',
            'Node.js',
            'TypeScript',
            'Tailwind CSS',
            'EJS',
            'MySQL',
            'Bixolon WebPrintSDK',
            'PM2',
            'Nginx',
          ],
          highlights: [
            'KCP 앱 결제 → 웹 오픈페이지 전환으로 오프사이트 결제 지원',
            'Exhibitor/Visitor 결제 도메인 분리 및 주문·정산 플로우 확장',
            '결제 취소·일별 매출 집계 API 구현',
            'QR 기반 관람객 입장 체크인 API 구현',
            'Bixolon WebPrintSDK 연동 명찰·라벨 자동 출력 플로우 구현',
            '전시장 프리셋 기반 부스 등급·배치도 에디터(CMS) 구축',
            'S3 객체 키 규칙 표준화·이미지 변환 업로드 파이프라인 구축',
            '12개 도메인 · REST API 300+ 엔드포인트 설계·구현',
          ],
        },
        {
          title: 'B2B 비용 청구 · GA4 · 청구 미납 스케줄러 개발',
          techStack: ['Popbill API', 'Nodemailer', 'node-cron', 'GA4 API'],
          highlights: [
            'Popbill·Nodemailer 기반 청구서 산출·메일 발송 자동화',
            'node-cron 기반 전시 개막 D-1 미납 잔액 갱신 배치',
            'GA4 API 연동 리포트 데이터(페이지뷰·신규 사용자) 자동 수집',
            '결제 완료 트리거 Popbill 세금계산서 자동 발행',
          ],
        },
        {
          title: '카페24 웹호스팅/DB를 EC2·RDS로 이전',
          techStack: ['WordPress', 'PHP', 'CloudFront', 'Lightsail'],
          highlights: [
            'Legacy PHP 관리 기능 → Node.js REST API + EJS CMS 단계 마이그레이션',
            'Lightsail·CloudFront 기반 전시 멀티사이트 WordPress 운영 아키텍처 설계',
            'WordPress 커스텀 HTML embed·REST API 연동',
          ],
        },
      ],
    },
    {
      id: 'neurocircuit',
      company: '주식회사 뉴로서킷',
      scopes: ['Backend', 'App'],
      start: '2021-11',
      end: '2023-10',
      projects: [
        {
          title: '모바일 앱·관리자 CMS 개발 [오롯플러스]',
          techStack: [
            'Node.js',
            'TypeScript',
            'MariaDB',
            'Firebase',
            'AWS Lambda',
            'AWS EC2',
            'AWS RDS',
            'PM2',
            'Nginx',
          ],
          highlights: [
            'ERD·REST API 설계, Admin CMS 백엔드 개발',
            'FCM 예약 발송·스케줄링 API 구현',
            'EC2·RDS·Nginx·PM2 기반 운영 배포 환경 구성',
            'MariaDB View 도입으로 복잡 JOIN API 응답 2초 → 0.5초(75% 개선)',
            'Lambda·S3 기반 이미지 리사이즈 파이프라인 구축',
            'node-cron 기반 FCM 배치 푸시 14종 스케줄링·운영',
            'Supertest로 API 회귀 테스트 자동화, 배포 전 오류 검증',
            '16개 도메인 · REST API 200+ 엔드포인트 설계·구현',
          ],
        },
        {
          title: '모바일 앱·관리자 CMS 백엔드 개발 [바야바즈 App v1/v2/v3]',
          techStack: [
            'Node.js',
            'JavaScript',
            'MariaDB',
            'Firebase',
            'AWS EC2',
            'AWS RDS',
            'PM2',
            'Nginx',
          ],
          highlights: [
            '탈모 케어 앱(v1–v3, 3차 리뉴얼) 백엔드 API 설계·개발',
            'AI 분석 비동기 큐 + FCM 완료 알림으로 체감 대기 20초 → 1초',
            'Controller-Service 레이어 분리 및 도메인 모듈화',
            'REST 리소스 구조 전면 개편, API 버전(/api/v1) 도입',
            '19개 도메인 · REST API 100+ 엔드포인트 설계·구현',
          ],
        },
        {
          title: '모바일 앱 백엔드 개발 [카미나비 라이트]',
          techStack: [
            'Node.js',
            'JavaScript',
            'MongoDB',
            'Firebase',
            'AWS EC2',
            'Atlas',
            'PM2',
            'Nginx',
          ],
          highlights: [
            '일본 개인정보 비저장 규제 대응 Device UUID + JWT 자동 로그인 설계',
            'Mongoose 기반 12개 컬렉션 스키마 설계',
            'Routes-Service-Model 3-tier 아키텍처 적용',
            'Cron 기반 FCM 미션 푸시(30분 주기) 스케줄링',
            '9개 도메인 · REST API 40+ 엔드포인트 설계·구현',
          ],
        },
      ],
    },
    {
      id: 'ayak',
      company: '주식회사 아약',
      scopes: ['Backend'],
      start: '2021-08',
      end: '2021-09',
      projects: [
        {
          title: '건강 Q&A 기반 맞춤 영양제 추천 웹 서비스',
          techStack: ['Node.js', 'TypeScript', 'MongoDB', 'Nodemailer'],
          highlights: [
            'Mongoose 기반 6개 컬렉션 스키마·인덱스 설계',
            '17개 건강 카테고리 Q&A 진단 → 영양제 매칭 추천 API 설계·구현',
            'Multer 이미지 업로드·Nodemailer 결과 메일 발송 API 구현',
            'REST API 명세(apidocs) 작성 및 프론트엔드 연동 지원',
            '8개 도메인 · REST API 30+ 엔드포인트 단독 설계·구현',
          ],
        },
      ],
    },
    {
      id: 'dneuro',
      company: '디뉴로(주)',
      scopes: ['Backend'],
      start: '2021-04',
      end: '2021-05',
      projects: [
        {
          title: '투자성향 진단 기반 맞춤 포트폴리오 추천 웹 서비스',
          techStack: ['Python', 'Django', 'MySQL'],
          highlights: [
            '투자 성향 저장·성향별 포트폴리오 조회 REST API 설계·구현',
            'MySQL 39개 테이블 ERD·스키마 설계',
            '다차원 투자성향 점수 Lookup → RiskGrade 산출 로직 구현',
            'RapidAPI 펀드 NAV 수집·적재 배치 파이프라인 구축',
            'JWT 인증/인가 및 구현',
            '3개 도메인 · REST API 6개 엔드포인트 설계·구현',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: 'url-shot',
      title: 'URL Shot',
      summary:
        '긴 URL을 짧게 줄이고, 클릭·미리보기 메타데이터를 수집하는 Full-Stack URL 단축 서비스',
      imageUrl: projectThumb,
      techStack: ['Nest.js', 'TypeScript', 'React', 'PostgreSQL'],
      detail: {
        namespace: 'InahChoi/',
        slug: 'url-shot',
        displayName: 'URL Shot',
        techLabel: 'NEST.JS · TYPESCRIPT · REACT · POSTGRESQL',
        githubUrl: 'https://github.com/InahChoi',
        links: [
          {
            kind: 'npm',
            label: 'npm',
            href: 'https://www.npmjs.com/',
          },
          {
            kind: 'docs',
            label: '문서',
            href: 'https://github.com/InahChoi',
          },
          {
            kind: 'github',
            label: 'GitHub',
            href: 'https://github.com/InahChoi',
          },
        ],
        body: [
          {
            type: 'paragraph',
            text: 'URL Shot은 단축 링크 생성부터 Open Graph 미리보기, 클릭 로그 집계까지를 한 API로 제공하는 사이드 프로젝트입니다. Nest.js와 PostgreSQL로 도메인을 모델링하고, React 대시보드에서 실시간 통계를 확인합니다.',
          },
          {
            type: 'heading',
            text: '단축 링크 발급',
          },
          {
            type: 'paragraph',
            text: '원본 URL을 검증한 뒤 Base62 슬러그를 발급합니다. 충돌 시 재시도하며, 만료일·비밀번호·커스텀 슬러그를 옵션으로 받을 수 있습니다.',
          },
          {
            type: 'heading',
            text: '타입 안전한 Redirect API',
          },
          {
            type: 'paragraph',
            text: '리다이렉트 핸들러는 DTO와 Zod 스키마로 입력값을 검증합니다. IDE 자동완성을 유지하면서 런타임 오류를 줄이는 구조를 목표로 했습니다.',
          },
          {
            type: 'code',
            language: 'typescript',
            code: `const link = await links
  .create({
    url: 'https://example.com/very/long/path',
    expiresAt: '2026-12-31',
  })
  .select(['slug', 'shortUrl'])
  .execute()

// GET /r/:slug → 302 Location: original url`,
            note: '슬러그 발급과 리다이렉트 응답을 한 흐름으로 처리합니다.',
          },
          {
            type: 'heading',
            text: '그 외 갖춘 것들',
          },
          {
            type: 'list',
            items: [
              {
                title: 'Click Analytics',
                description:
                  'Referer·UA·국가 코드를 비동기로 적재하고 일별 집계 뷰로 조회합니다.',
              },
              {
                title: 'OG Preview',
                description:
                  '`fetchMeta()`로 타이틀·이미지를 캐시해 대시보드 카드에 바로 표시합니다.',
              },
              {
                title: 'Rate Limit',
                description:
                  'IP 기준 `safe` 모드와 `dry-run` 모드를 분리해 남용을 차단합니다.',
              },
            ],
          },
        ],
      },
    },
    {
      id: 'data-insite',
      title: 'Data Insite',
      techStack: ['Nest.js', 'TypeScript', 'React', 'PostgreSQL'],
    },
    {
      id: 'proj-3',
      title: 'Project Title',
      techStack: ['Nest.js', 'TypeScript', 'React', 'PostgreSQL'],
    },
  ],
  education: [
    {
      period: '2021 ~ 2025',
      title: '서울디지털대학교',
      description: 'AI 소프트웨어공학 전공 학사 졸업',
    },
  ],
  etc: [
    {
      period: '2021',
      title: '위코드 부트캠프 수료',
      description: '백엔드 API 작성 및 데이터베이스 구성 경험',
    },
    {
      period: '2018-11 ~ 2021-01',
      title: '구인터내셔널유한책임회사',
      description: '웹퍼블리싱 및 기획, 디자인 경험',
    },
  ],
  contact: {
    email: 'choiinah@kakao.com',
    github: 'https://github.com/InahChoi',
    blog: 'https://velog.io/@inah-_-',
  },
};

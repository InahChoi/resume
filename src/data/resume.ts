import type { Resume } from './resume.types'
import projectThumb from '../assets/hero.png'
import profileImage from '../assets/profile.png'

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
            '태블릿 전용 KCP 앱 결제를 웹 오픈페이지로 전환해 현장 외에서도 결제가 가능하도록 개발',
            '참가업체·관람객 결제 플로우 분리 및 주문/결제 도메인 확장',
            'CMS 결제취소·일자별 매출 집계 구축',
            '관람객 QR 티켓 체크인 API 구현 (재입장 포함)',
            '배지(라벨) 출력을 업체 조회 페이지로 자동화, Bixolon WebPrintSDK 연동',
            'S3 오브젝트 키 규칙 표준화 및 이미지 변환 파이프라인 구축',
          ],
        },
        {
          title: '참가비 청구 · 세금계산서 · 미납 배치',
          techStack: ['KCP', 'Popbill', 'Nodemailer', 'node-cron', 'MySQL'],
          highlights: [
            '가구/사이드 부스 인보이스 산정 및 청구 메일 발송',
            '팝빌 세금계산서 발행·조회·취소 API 연동',
            '개막 D-1 미납 잔액 배치 갱신, CMS 결제취소·수동입금 처리',
          ],
        },
        {
          title: 'B2B 통합 CMS · 운영 자동화',
          techStack: [
            'Node.js',
            'TypeScript',
            'EJS',
            'MySQL',
            'AWS S3',
            'Tailwind CSS',
            'PM2',
          ],
          highlights: [
            '가구/사이드 부스·관람객·이벤트 목록/상세/저장 CMS 구축',
            '전시장·홀 프리셋 기반 부스 등급/시설 배치도 에디터 구축',
            '현장 경품 추첨 및 계약/안내 알림톡 연동',
            '뿌리오 SMS·카카오 알림톡 발송, GA4 일별 방문 집계 배치',
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
          title: '오롯플러스 App · CMS',
          techStack: [
            'TypeScript',
            'Node.js',
            'Sequelize',
            'MariaDB',
            'AWS EC2',
            'AWS RDS',
            'AWS Lambda',
            'Firebase',
          ],
          highlights: [
            '초기 기획 참여, ERD·REST API 설계 및 관리자 CMS 개발',
            'Firebase Push·예약 스케줄링 시스템 구축',
            '복잡 Join 조회에 View Table 적용, 응답 속도 2초 → 0.5초',
            '이미지 업로드를 AWS Lambda로 분리해 Node 서버 CPU 부하 감소',
          ],
        },
        {
          title: '바야바즈 App v1/v2',
          techStack: [
            'JavaScript',
            'Node.js',
            'Sequelize',
            'MariaDB',
            'AWS EC2',
            'Nginx',
            'EJS',
            'Firebase',
          ],
          highlights: [
            '와이어프레임·기획 참여, ERD·API·챌린지/포인트 시스템 개발',
            'AI 분석을 비동기 처리 + 완료 Push 알림으로 전환, 체감 대기 20초 → 1초',
            'Controller/Service Layer 분리로 유지보수·기능 확장 구조 정리',
          ],
        },
        {
          title: '카미나비 라이트 App · CMS',
          techStack: [
            'JavaScript',
            'Node.js',
            'MongoDB',
            'JWT',
            'AWS EC2',
            'Nginx',
            'EJS',
          ],
          highlights: [
            '일본 국외 개인정보 비저장 정책 대응 UUID + JWT 자동 로그인 설계',
            'MongoDB Document 구조 설계, 관리자 CMS 개발 및 서버 운영',
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
          title: '영양제 추천 서비스 API',
          techStack: ['TypeScript', 'Node.js', 'MongoDB', 'Mongoose'],
          highlights: [
            '회원가입·로그인 및 영양제 상품 카탈로그 REST API 설계·구현',
            '문항별 선택 점수 합산 로직으로 프로필 점수에 맞는 영양제 추천 API 구현',
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
          title: '로보어드바이저 포트폴리오 API',
          techStack: ['Python', 'Django', 'MySQL'],
          highlights: [
            '사용자 투자 성향 저장 및 성향 기반 추천 포트폴리오 조회 API 개발',
            '사용자가 채택한 포트폴리오 저장 API 구현',
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

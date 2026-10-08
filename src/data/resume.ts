import type { Resume } from './resume.types';
import profileImage from '../assets/profile-bg-white.png';
import ytmusicThumb from '../assets/projects/pj-YTMusic-playlist-shuffler.jpg';

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
      '서비스의 구조를 이해 및 설계하고, 실제 트래픽 속에서 안정적 운영을 목표로 합니다.',
      'Node.js·TypeScript와 AWS를 기반으로 서비스 기획부터 Database 모델링, REST API, 배포·모니터링까지 백엔드 전반을 경험했습니다. 결제·정산·푸시·배치 등 핵심 도메인을 구축하고, Database View와 비동기 처리 등을 활용해 성능과 운영 안정성을 개선하는 개발을 해왔습니다.',
      '최근에는 React·NestJS까지 영역을 확장하며 백엔드를 넘어 서비스 전체의 구조와 사용자 경험을 함께 고민하는 풀스택 개발자를 지향하고 있습니다.',
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
      id: 'ytmusic-playlist-shuffler',
      title: 'YTMusic Playlist Shuffler',
      summary:
        'YouTube Music 대용량 재생목록을 무작위로 재정렬하고, 원본 또는 새 목록에 동기화하는 Python CLI',
      imageUrl: ytmusicThumb,
      techStack: ['Python', 'ytmusicapi', 'python-dotenv'],
      detail: {
        namespace: 'InahChoi/',
        slug: 'ytmusic-playlist-shuffler',
        displayName: 'YTMusic Playlist Shuffler',
        techLabel: 'PYTHON · YTMUSICAPI',
        githubUrl: 'https://github.com/InahChoi/ytmusic-playlist-shuffler',
        links: [
          {
            kind: 'github',
            label: 'GitHub',
            href: 'https://github.com/InahChoi/ytmusic-playlist-shuffler',
          },
        ],
        body: [
          {
            type: 'paragraph',
            text: '유튜브 뮤직의 공식 API 할당량 제한을 넘어, 대용량 재생목록의 곡 순서를 무작위로 재정렬하고 원본 플레이리스트에 동기화하는 Python CLI입니다.',
          },
          {
            type: 'heading',
            text: 'Key Features',
          },
          {
            type: 'list',
            items: [
              {
                title: 'True Shuffle',
                description:
                  '유튜브 뮤직 앱의 편향된 셔플 대신, 로컬에서 순서를 무작위로 다시 만듭니다.',
              },
              {
                title: 'Post-Shuffle Dedup',
                description:
                  '셔플 직후 같은 `videoId`를 등장 순서는 유지한 채 제거합니다. 배치 업로드 중 중복 때문에 곡이 빠지는 일을 줄입니다.',
              },
              {
                title: 'Large Playlists',
                description:
                  '공식 Data API 일일 할당량에 막히지 않고, 플랫폼 상한인 최대 5,000곡까지 무작위로 재정렬합니다.',
              },
              {
                title: 'Two Modes',
                description:
                  '실행할 때 기존 주소를 유지하며 덮어쓰는 방법과, 원본은 두고 `[원본 이름] (🔀 Shuffled)` 복사본을 만드는 방법을 선택할 수 있습니다.',
              },
              {
                title: 'Batch Sync',
                description:
                  '100곡 단위로 나누고 배치 사이에 간격을 두어, 한 번에 생성할 때 생기는 저장량 누락을 방지합니다.',
              },
              {
                title: 'Auto Backup',
                description:
                  '덮어쓰기 전 `playlist_backup.json`을 만들어 원본이 지워지는 경우에 대비합니다.',
              },
            ],
          },
          {
            type: 'heading',
            text: 'The Problem',
          },
          {
            type: 'paragraph',
            text: 'YouTube Data API v3는 곡을 추가하거나 수정할 때 건당 50유닛을 씁니다. 300곡을 한 번 재정렬하면 약 15,000유닛이 필요해 일일 기본 제공량 10,000유닛을 넘기고, 5,000곡은 약 250,000유닛이라 공식 API만으로는 자유도가 많이 떨어집니다.',
          },
          {
            type: 'paragraph',
            text: '300곡 이상을 한 요청으로 보내면 YouTube Data API 서버가 간헐적으로 요청을 버리기도 하고, 잘게 나눠 연속으로 요청 시에도 앞 100곡 이후가 빠지는 경우가 있습니다. 또한 `add_playlist_items` API는 기본값에서 배치 안 곡이 이미 목록에 있으면 그 요청 전체를 거절합니다. 같은 `videoId`가 셔플 뒤 다른 배치에 걸리면 그 100곡이 통째로 유실됩니다.',
          },
          {
            type: 'heading',
            text: 'The Solution',
          },
          {
            type: 'paragraph',
            text: '공식 API 대신 세션 기반의 `ytmusicapi`로 재생목록을 읽고 다시 씁니다. 로컬에서 순서를 섞은 뒤 100곡씩 나누어 반영하고, 배치 사이에 대기 시간을 두어 대량 전송 중 누락을 줄였습니다.',
          },
          {
            type: 'paragraph',
            text: '업로드 직전에는 정렬 순서를 유지한 채 `videoId` 중복을 제거합니다. 제거한 개수는 로그로 확인할 수 있고, 덮어쓰기 모드에서는 작업 전에 로컬 백업을 남깁니다.',
          },
        ],
      },
    },
    // {
    //   id: 'url-shot',
    //   title: 'URL Shot',
    //   summary:
    //     '긴 URL을 짧게 줄이고, 클릭·미리보기 메타데이터를 수집하는 Full-Stack URL 단축 서비스',
    //   imageUrl: projectThumb,
    //   techStack: ['Nest.js', 'TypeScript', 'React', 'PostgreSQL'],
    //   detail: {
    //     namespace: 'InahChoi/',
    //     slug: 'url-shot',
    //     displayName: 'URL Shot',
    //     techLabel: 'NEST.JS · TYPESCRIPT · REACT · POSTGRESQL',
    //     githubUrl: 'https://github.com/InahChoi',
    //     links: [
    //       {
    //         kind: 'npm',
    //         label: 'npm',
    //         href: 'https://www.npmjs.com/',
    //       },
    //       {
    //         kind: 'docs',
    //         label: '문서',
    //         href: 'https://github.com/InahChoi',
    //       },
    //       {
    //         kind: 'github',
    //         label: 'GitHub',
    //         href: 'https://github.com/InahChoi',
    //       },
    //     ],
    //     body: [
    //       {
    //         type: 'paragraph',
    //         text: 'URL Shot은 단축 링크 생성부터 Open Graph 미리보기, 클릭 로그 집계까지를 한 API로 제공하는 사이드 프로젝트입니다. Nest.js와 PostgreSQL로 도메인을 모델링하고, React 대시보드에서 실시간 통계를 확인합니다.',
    //       },
    //       {
    //         type: 'heading',
    //         text: '단축 링크 발급',
    //       },
    //       {
    //         type: 'paragraph',
    //         text: '원본 URL을 검증한 뒤 Base62 슬러그를 발급합니다. 충돌 시 재시도하며, 만료일·비밀번호·커스텀 슬러그를 옵션으로 받을 수 있습니다.',
    //       },
    //       {
    //         type: 'heading',
    //         text: '타입 안전한 Redirect API',
    //       },
    //       {
    //         type: 'paragraph',
    //         text: '리다이렉트 핸들러는 DTO와 Zod 스키마로 입력값을 검증합니다. IDE 자동완성을 유지하면서 런타임 오류를 줄이는 구조를 목표로 했습니다.',
    //       },
    //       {
    //         type: 'code',
    //         language: 'typescript',
    //         code: `const link = await links
    // .create({
    //   url: 'https://example.com/very/long/path',
    //   expiresAt: '2026-12-31',
    // })
    // .select(['slug', 'shortUrl'])
    // .execute()
    // GET /r/:slug → 302 Location: original url`,
    //         note: '슬러그 발급과 리다이렉트 응답을 한 흐름으로 처리합니다.',
    //       },
    //       {
    //         type: 'heading',
    //         text: '그 외 갖춘 것들',
    //       },
    //       {
    //         type: 'list',
    //         items: [
    //           {
    //             title: 'Click Analytics',
    //             description:
    //               'Referer·UA·국가 코드를 비동기로 적재하고 일별 집계 뷰로 조회합니다.',
    //           },
    //           {
    //             title: 'OG Preview',
    //             description:
    //               '`fetchMeta()`로 타이틀·이미지를 캐시해 대시보드 카드에 바로 표시합니다.',
    //           },
    //           {
    //             title: 'Rate Limit',
    //             description:
    //               'IP 기준 `safe` 모드와 `dry-run` 모드를 분리해 남용을 차단합니다.',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
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

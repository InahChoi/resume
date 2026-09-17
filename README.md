# 최인아 | Backend · Fullstack developer

> 안정적인 API와 인프라 설계를 지향하고, 현재는 풀스택으로 시야를 넓혀가고 있는 개발자 최인아입니다.

- 실제 트래픽 속 안정적 운영을 위해 서비스의 구조 이해에 시간을 할애하여 설계를 시작합니다.
- Node.js·TypeScript와 AWS를 기반으로 서비스 기획부터 Database 모델링, REST API, 배포·모니터링까지 백엔드 전반을 경험했습니다.
- 팀원들과 초기 아키텍쳐 및 방향성을 회의하고 함께 만들어가는 것에 큰 가치를 둡니다.

<br>

## 📟 Tech Stack.

### Core

<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white">

### Also

<img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/django-092E20?style=flat&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/mongoDB-47A248?style=flat&logo=MongoDB&logoColor=white"> <img src="https://img.shields.io/badge/php-777BB4?style=flat&logo=php&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css&logoColor=white">

### Infra

<img src="https://img.shields.io/badge/Amazon%20EC2-242f3e?style=flat&logo=Amazon%20EC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20RDS-3e4a5b?style=flat&logo=Amazon%20EC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20Lambda-5b6675?style=flat&logo=Amazon%20Lambda&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20S3-89919c?style=flat&logo=Amazon%20S3&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20CloudFront-a6aeb9?style=flat&logo=Amazon%20CloudFront&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20Lightsail-d1dbea?style=flat&logo=Amazon%20Lightsail&logoColor=white"> <img src="https://img.shields.io/badge/pm2-2B037A?style=flat&logo=pm2&logoColor=white"> <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=flat&logo=nginx&logoColor=white">

<br>

## 🏙 Experience.

### 주식회사 비스컨애드 | Frontend · Backend · App

> 2026.02 - 현재

#### 전시회 서비스 프론트, 백엔드 개발

`KCP API` `QR` `Node.js` `TypeScript` `Tailwind CSS` `EJS` `MySQL` `Bixolon WebPrintSDK` `PM2` `Nginx`

- KCP 앱 결제 → 웹 오픈페이지 전환으로 오프사이트 결제 지원
- Exhibitor/Visitor 결제 도메인 분리 및 주문·정산 플로우 확장
- 결제 취소·일별 매출 집계 API 구현
- QR 기반 관람객 입장 체크인 API 구현
- Bixolon WebPrintSDK 연동 명찰·라벨 자동 출력 플로우 구현
- 전시장 프리셋 기반 부스 등급·배치도 에디터(CMS) 구축
- S3 객체 키 규칙 표준화·이미지 변환 업로드 파이프라인 구축
- 12개 도메인 · REST API 300+ 엔드포인트 설계·구현

#### B2B 비용 청구 · GA4 · 청구 미납 스케줄러 개발

`Popbill API` `Nodemailer` `node-cron` `GA4 API`

- Popbill·Nodemailer 기반 청구서 산출·메일 발송 자동화
- node-cron 기반 전시 개막 D-1 미납 잔액 갱신 배치
- GA4 API 연동 리포트 데이터(페이지뷰·신규 사용자) 자동 수집
- 결제 완료 트리거 Popbill 세금계산서 자동 발행

#### 카페24 웹호스팅/DB를 EC2·RDS로 이전

`WordPress` `PHP` `CloudFront` `Lightsail`

- Legacy PHP 관리 기능 → Node.js REST API + EJS CMS 단계 마이그레이션
- Lightsail·CloudFront 기반 전시 멀티사이트 WordPress 운영 아키텍처 설계
- WordPress 커스텀 HTML embed·REST API 연동

---

### 주식회사 뉴로서킷 | Backend · App

> 2021.11 - 2023.10

#### 모바일 앱·관리자 CMS 개발 [오롯플러스]

`Node.js` `TypeScript` `MariaDB` `Firebase` `AWS Lambda` `AWS EC2` `AWS RDS` `PM2` `Nginx`

- ERD·REST API 설계, Admin CMS 백엔드 개발
- FCM 예약 발송·스케줄링 API 구현
- EC2·RDS·Nginx·PM2 기반 운영 배포 환경 구성
- MariaDB View 도입으로 복잡 JOIN API 응답 2초 → 0.5초(75% 개선)
- Lambda·S3 기반 이미지 리사이즈 파이프라인 구축
- node-cron 기반 FCM 배치 푸시 14종 스케줄링·운영
- Supertest로 API 회귀 테스트 자동화, 배포 전 오류 검증
- 16개 도메인 · REST API 200+ 엔드포인트 설계·구현

#### 모바일 앱·관리자 CMS 백엔드 개발 [바야바즈 App v1/v2/v3]

`Node.js` `JavaScript` `MariaDB` `Firebase` `AWS EC2` `AWS RDS` `PM2` `Nginx`

- 탈모 케어 앱(v1–v3, 3차 리뉴얼) 백엔드 API 설계·개발
- AI 분석 비동기 큐 + FCM 완료 알림으로 체감 대기 20초 → 1초
- Controller-Service 레이어 분리 및 도메인 모듈화
- REST 리소스 구조 전면 개편, API 버전(/api/v1) 도입
- 19개 도메인 · REST API 100+ 엔드포인트 설계·구현

#### 모바일 앱 백엔드 개발 [카미나비 라이트]

`Node.js` `JavaScript` `MongoDB` `Firebase` `AWS EC2` `Atlas` `PM2` `Nginx`

- 일본 개인정보 비저장 규제 대응 Device UUID + JWT 자동 로그인 설계
- Mongoose 기반 12개 컬렉션 스키마 설계
- Routes-Service-Model 3-tier 아키텍처 적용
- Cron 기반 FCM 미션 푸시(30분 주기) 스케줄링
- 9개 도메인 · REST API 40+ 엔드포인트 설계·구현

---

### 주식회사 아약 | Backend

> 2021.08 – 2021.09

#### 건강 Q&A 기반 맞춤 영양제 추천 웹 서비스

`Node.js` `TypeScript` `MongoDB` `Nodemailer`

- Mongoose 기반 6개 컬렉션 스키마·인덱스 설계
- 17개 건강 카테고리 Q&A 진단 → 영양제 매칭 추천 API 설계·구현
- Multer 이미지 업로드·Nodemailer 결과 메일 발송 API 구현
- REST API 명세(apidocs) 작성 및 프론트엔드 연동 지원
- 8개 도메인 · REST API 30+ 엔드포인트 단독 설계·구현

---

### 디뉴로(주) | Backend

> 2021.04 - 2021.05

#### 투자성향 진단 기반 맞춤 포트폴리오 추천 웹 서비스

`Python` `Django` `MySQL`

- 투자 성향 저장·성향별 포트폴리오 조회 REST API 설계·구현
- MySQL 39개 테이블 ERD·스키마 설계
- 다차원 투자성향 점수 Lookup → RiskGrade 산출 로직 구현
- RapidAPI 펀드 NAV 수집·적재 배치 파이프라인 구축
- JWT 인증/인가 및 구현
- 3개 도메인 · REST API 6개 엔드포인트 설계·구현

<br>

## 🏢 Education.

서울디지털대학교 | 소프트웨어학과 전공 | 2021 - 2025 졸업

<br>

## 📇 Contact.

|            |                             |
| ---------- | --------------------------- |
| **GitHub** | https://github.com/InahChoi |
| **Email**  | choiinah@kakao.com          |

<br>

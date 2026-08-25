# 최인아 | Backend · Fullstack developer
> Node.js(Express)·MySQL 기반 API/백오피스와 AWS 인프라를 운영하는 백엔드 개발자입니다. <br>
> 전시 현장 결제·체크인·청구/정산 등 B2B 운영 도메인을 설계·구현했습니다.

- 서비스 운영 환경에서 발생하는 트러블슈팅 이슈와 사용자 경험 개선을 우선화합니다.
- 안정적인 서버 구조, 유지보수를 위한 함수 컴포넌트화 개발을 지향합니다.
- 팀원들과 초기 아키텍쳐 및 방향성을 회의하고 함께 개발하는 것에 큰 가치를 둡니다.

<br>

## 📟 Tech Stack.
### Core
`Node.js` `TypeScript` `JavaScript` `EJS` `MySQL` `JWT`

### Also
`Python Django` `MongoDB` `PHP`

### Infra
`AWS EC2` `AWS RDS` `AWS Lambda` `AWS Load Balancer` `AWS CloudFront` `AWS Lightsail` `PM2` `Nginx`

<br>

## 🏙 Experience.
### 주식회사 비스컨애드 | Fullstack Developer | 개발팀
>2026.02 - 현재
#### 현장 결제 · 체크인 · 명찰 출력
`KCP` `QR` `Node.js` `EJS` `MySQL` `PHP` `Bixolon WebPrintSDK`
- 태블릿 전용 KCP 앱 결제를 웹 오픈페이지로 전환해 현장 외에서도 결제가 가능하도록 개발
- 참가업체·관람객 결제 플로우 분리 및 주문/결제 도메인 확장
- CMS 결제취소·일자별 매출 집계 구축
- 관람객 QR 티켓 체크인 API 구현 (재입장 포함)
- 배지(라벨) 출력을 업체 조회 페이지로 자동화, Bixolon WebPrintSDK 연동
  
#### 참가비 청구 · 세금계산서 · 미납 배치
`KCP` `Popbill` `Nodemailer` `node-cron` `MySQL`
- 가구/사이드 부스 인보이스 산정 및 청구 메일 발송
- 팝빌 세금계산서 발행·조회·취소 API 연동
- 개막 D-1 미납 잔액 배치 갱신, CMS 결제취소·수동입금 처리
  
#### 부스 배치도 에디터 개발
- 전시장·홀 프리셋 기반 부스 등급/시설 배치 UI 구축

#### B2B 통합 CMS · 운영 자동화
`Node.js` `JavaScript` `TypeScript` `EJS` `MySQL` `AWS S3` `Tailwind CSS` `PM2`
- 가구/사이드 부스·관람객·이벤트 목록/상세/저장 CMS 구축
- 전시장·홀 프리셋 기반 부스 등급/시설 배치도 에디터 구축
- 현장 경품 추첨(당첨 수량·일별 한도) 및 계약/안내 알림톡 연동
- S3 업로드 키 표준화 및 이미지 변환 파이프라인
- 뿌리오 SMS·카카오 알림톡(즉시/예약) 발송, GA4 일별 방문 집계 배치

#### 카페24 → AWS 인프라 이전 · 공개 API 이관
`EC2` `RDS` `S3` `CloudFront` `WAF` `Lightsail` `WordPress` `PHP` `Node.js`
- 카페24 웹호스팅/DB를 EC2·RDS로 이전
- 관리자 Pure PHP 기능을 Node.js REST API + EJS CMS로 단계적 이관
- Lightsail로 전시별 서브도메인 WordPress 분리 운영
- 참가신청·사전등록·SMS 인증 공개 REST API 제공 및 WordPress embed 연동

---
   
### 주식회사 뉴로서킷 | Backend Developer
> 2021.11 - 2023.09
- 모바일 앱·관리자 CMS 백엔드 단독/소수 인원 담당. REST API·DB 설계, AWS 운영, Firebase Push, 성능·배포 안정화
#### 오롯플러스 App · CMS (임산부 건강·위험군 관리)
`TypeScript` `Node.js` `Sequelize` `MariaDB` `AWS EC2` `AWS RDS` `AWS Lambda` `Firebase`
- 초기 기획 참여, ERD·REST API 설계 및 관리자 CMS 개발 (Client 4 / Backend 1)
- Firebase Push·예약 스케줄링 시스템 구축, EC2 기반 서버 운영 환경 구성
- 복잡 Join 조회에 View Table 적용, 응답 속도 2초 → 0.5초
- 이미지 업로드 처리를 AWS Lambda로 분리해 Node 서버 CPU 부하 감소
- Supertest 기반 API 테스트 자동화로 배포 전 오류 검증 체계 구축

  
#### 바야바즈 App v1/v2 (두피 AI 셀프케어)
`JavaScript` `Node.js` `Sequelize` `MariaDB` `AWS EC2` `AWS RDS` `Nginx` `EJS` `Firebase`
- 와이어프레임·기획 참여, ERD·API·챌린지/포인트 시스템 개발 (Backend 2 → 1)
- AI 분석을 비동기 처리 + 완료 Push 알림으로 전환, 체감 대기 20초 → 1초
- Controller/Service Layer 분리로 유지보수·기능 확장 구조 정리
- Firebase Push·Webhook, Winston 로그 정책·PM2 운영 환경 구축


#### 카미나비 App · CMS (REVE21 · 일본)
`JavaScript` `Node.js` `MongoDB` `Mongoose` `JWT` `AWS EC2` `MongoDB Atlas` `Nginx` `EJS`
- 일본 개인정보 비저장 정책 대응: 디바이스 UUID + JWT 자동 로그인 설계
- MongoDB Document 구조 설계, 관리자 CMS 개발 및 서버 운영 (Client 3 / Backend 2)
- PM2·Nginx 기반 EC2 운영 환경 구축

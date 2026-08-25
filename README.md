# 최인아 | Backend · Fullstack developer
> Node.js(Express)·MySQL 기반 API/백오피스와 AWS 인프라를 운영하는 백엔드 개발자입니다. <br>
> 전시 현장 결제·체크인·청구/정산 등 B2B 운영 도메인을 설계·구현했습니다.

- 서비스 운영 환경에서 발생하는 트러블슈팅 이슈와 사용자 경험 개선을 우선화합니다.
- 안정적인 서버 구조, 유지보수를 위한 함수 컴포넌트화 개발을 지향합니다.
- 팀원들과 초기 아키텍쳐 및 방향성을 회의하고 함께 개발하는 것에 큰 가치를 둡니다.

---

## 📟 Tech Stack.
### Core
`Node.js` `TypeScript` `JavaScript` `EJS` `MySQL` `JWT`

### Also
`Python Django` `MongoDB` `PHP`

### Infra
`AWS EC2` `AWS RDS` `AWS Lambda` `AWS Load Balancer` `AWS CloudFront` `AWS Lightsail` `PM2` `Nginx`

---

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

   

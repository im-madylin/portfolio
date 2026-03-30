# Portfolio Website

프론트엔드 개발자 **이하현**의 개인 포트폴리오 웹사이트입니다.  
실무/사이드 프로젝트, 기술 스택, 경력, 교육, 자격증, 연락 채널을 한 페이지에서 확인할 수 있도록 구성했습니다.

---

## 1) 프로젝트 목적

- 실무 경험을 **문제 → 해결 → 학습** 흐름으로 전달
- 면접관/채용 담당자가 빠르게 핵심 정보를 확인할 수 있는 구조 제공
- 정적 자산(프로젝트 이미지) 운영을 자동화해 유지보수 비용 감소

---

## 2) 주요 기능

- **Hero 섹션**: 프로필, 타이핑 애니메이션, GitHub/이메일/이력서 링크
- **기술 스택 섹션**: 기술별 맥락(context) + 핵심 키워드
- **경력/교육/자격증 섹션**: 카드 기반 정보 제공
- **프로젝트 섹션**
  - 카드 목록 + 상세 모달
  - 실무 프로젝트 이미지 비식별 처리 안내 문구
  - 프로젝트별 이미지 자동 연결
- **연락하기 섹션**
  - EmailJS 기반 메일 전송
  - Zod + React Hook Form 유효성 검증
  - 기본 스팸 방어(Headless 차단, Rate Limit, 허니팟)
- **사용성/접근성**
  - 라이트/다크 테마
  - 스크롤 애니메이션
  - 최상단 이동 버튼

---

## 3) 기술 스택

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript
- **Styling/UI**: Tailwind CSS, shadcn/ui, Radix UI
- **Form/Validation**: React Hook Form, Zod
- **Email**: EmailJS (`@emailjs/browser`)
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Analytics**: `@vercel/analytics`

---

## 4) 디렉터리 구조

```text
.
├─ app/
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ ui/
│  ├─ hero-section.tsx
│  ├─ skills-section.tsx
│  ├─ experience-section.tsx
│  ├─ education-section.tsx
│  ├─ certificates-section.tsx
│  ├─ projects-section.tsx
│  ├─ project-card.tsx
│  ├─ project-modal.tsx
│  ├─ contact-section.tsx
│  ├─ navigation.tsx
│  ├─ footer.tsx
│  └─ back-to-top-button.tsx
├─ hooks/
├─ lib/
│  ├─ data.ts
│  └─ generated-project-images.ts   # 자동 생성 파일
├─ public/
│  ├─ projects/
│  ├─ skills/
│  ├─ profile-photo.png
│  └─ resume.pdf
├─ scripts/
│  └─ generate-project-images.mjs
├─ .env.example
└─ package.json
```

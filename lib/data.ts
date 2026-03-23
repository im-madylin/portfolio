import { generatedProjectImages } from "@/lib/generated-project-images";

export interface Project {
  id: string;
  category: "실무" | "사이드";
  title: string;
  description: string;
  sortDate: string;
  thumbnail?: string;
  images?: string[];
  techStack: string[];
  period: string;
  details: {
    role: string;
    teamSize: string;
    features: string[];
    challenges: string[];
    learnings: string[];
    links?: {
      github?: string;
      live?: string;
    };
  };
}

export interface Skill {
  name: string;
  icon: string;
  context: string;
  keywords: string[];
}

export interface Education {
  institution: string;
  degree: string;
  organizer?: string;
  period: string;
  description?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  techStack: string[];
}

const projectImages = (projectFolder: string) => generatedProjectImages[projectFolder] ?? [];

export const profileData = {
  name: "이하현",
  title: "프론트엔드 개발자",
  bio: "운영 서비스에서 사용자 관점의 문제를 정의하고,\n안정적인 화면과 일관된 사용 경험으로 해결하는 프론트엔드 개발자입니다.",
  email: "im.madylin@gmail.com",
  github: "https://github.com/im-madylin",
  resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
  {
    name: "React",
    icon: "/skills/react.svg",
    context: "실시간 관제와 백오피스 화면을 컴포넌트 단위로 설계하고 공통 UI 패턴을 정리해 재사용 구조를 운영했습니다.",
    keywords: ["컴포넌트 설계", "공통 UI 패턴", "운영 화면 개발"],
  },
  {
    name: "Next.js",
    icon: "/skills/nextdotjs.svg",
    context:
      "포트폴리오 사이트에서 App Router 기반 페이지를 구성하고 섹션 중심 정보 구조를 설계했습니다.",
    keywords: ["App Router", "페이지 구조 설계", "정적 빌드"],
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    context: "요청/응답 타입을 명시해 화면과 API 간 계약을 관리하고 기능 확장 시 리팩터링 안정성을 확보했습니다.",
    keywords: ["타입 모델링", "API 계약 관리", "비동기 흐름 안정화"],
  },
  {
    name: "Zustand · React Query",
    icon: "/skills/zustand.svg",
    context:
      "클라이언트 상태와 서버 상태를 역할별로 분리해 실시간 관제/백오피스 화면의 상태 흐름을 일관되게 관리했습니다.",
    keywords: ["상태 분리", "서버 상태 관리", "캐시/동기화"],
  },
  {
    name: "WebSocket · Long Polling",
    icon: "/skills/websocket.svg",
    context:
      "혼합된 실시간 통신 환경에서 수신 데이터 반영, 예외 처리, 재요청 흐름을 정리해 관제 화면의 안정적 갱신을 구현했습니다.",
    keywords: ["실시간 수신 처리", "비동기 흐름 제어", "오류 대응"],
  },
  {
    name: "Ant Design · SCSS · Tailwind CSS",
    icon: "/skills/antdesign.svg",
    context:
      "실무에서는 Ant Design·SCSS로 운영 화면의 일관성을 유지하고, 사이드 프로젝트에서는 Tailwind CSS로 유틸리티 클래스 기반 스타일을 적용했습니다.",
    keywords: ["디자인 컨벤션", "컴포넌트 래핑", "유틸리티 스타일링"],
  },
  {
    name: "GSAP",
    icon: "/skills/gsap.svg",
    context:
      "Figma 시안을 기준으로 화면 전환과 알림 인터랙션을 구현해 관제 화면의 정보 전달력과 사용성을 개선했습니다.",
    keywords: ["인터랙션 구현", "전환 애니메이션", "강조 효과"],
  },
  {
    name: "Git",
    icon: "/skills/git.svg",
    context:
      "기능 단위 브랜치 운영과 PR 기반 리뷰 흐름으로 변경 이력을 관리하고 협업 품질을 유지했습니다.",
    keywords: ["브랜치 전략", "PR 리뷰", "변경 이력 관리"],
  },
];

export const experiences: Experience[] = [
  {
    company: "에이치디에스 주식회사",
    role: "프론트엔드 개발자 | 연구원",
    period: "2024.11 - 현재",
    summary:
      "실시간 관제 웹과 백오피스 웹 서비스를 개발하며 실시간 데이터 처리, 운영 화면 UX 개선, 기획/QA 협업을 수행하고 있습니다.",
    achievements: [
      "APEC 실시간 관제 서비스에서 WebSocket 수신 데이터 시각화와 Long Polling + REST API 복합 연동을 구현해 운영 안정성을 강화",
      "Figma 시안 기반 GSAP 화면 전환/알림 인터랙션을 적용하고 알림·팝업 공통 컴포넌트를 분리해 유지보수성을 개선",
      "APEC 백오피스 5개 메뉴, 17개 API를 연동해 권한별 CRUD·검색·필터링 기능을 공통 패턴으로 구현",
      "위치정보관리 백오피스 4개 메뉴, 6개 API를 개발하고 요구사항 문서·와이어프레임·QA 테스트 케이스를 작성해 릴리즈 품질을 강화",
    ],
    techStack: [
      "React",
      "TypeScript",
      "SCSS",
      "GSAP",
      "Ant Design",
      "Zustand",
      "React Query",
    ],
  },
  {
    company: "주식회사 케이엘넷",
    role: "서비스 운영 | 대리",
    period: "2016.08 - 2021.08",
    summary:
      "고객사 물류 업무의 IT 전환과 서비스 운영 개선을 담당하며 사용자 관점의 업무 효율 개선을 수행했습니다.",
    achievements: [
      "사업팀·개발팀·고객사 간 요구사항을 구조화하고 릴리즈 우선순위를 조율해 IT 전환 과제를 안정적으로 운영",
      "물류 처리 프로세스 병목을 분석해 화면 접근 경로와 입력 플로우를 단순화해 업무 처리 효율을 개선",
      "메뉴 사용 데이터를 바탕으로 저사용 기능을 정리하고 정보 구조를 재배치해 운영 효율을 높임",
      "사용자 매뉴얼과 UI 안내 문구를 개선해 운영 문의를 줄이고 현업 커뮤니케이션 비용을 절감",
    ],
    techStack: [],
  },
];

export const education: Education[] = [
  {
    institution: "42Seoul",
    degree: "교육",
    organizer: "이노베이션 아카데미",
    period: "2022.07 - 2024.04 (1년 9개월)",
    description:
      "동료 학습 기반 자기 주도 학습으로 C/C++ 중심 CS 기초를 학습하고 팀 프로젝트를 수행하며 문제 해결과 협업 역량을 강화했습니다.",
  },
  {
    institution: "엘리스 SW 엔지니어 트랙",
    degree: "교육",
    organizer: "엘리스",
    period: "2021.10 - 2022.02 (5개월)",
    description:
      "HTML, CSS, JavaScript, React 중심 웹 개발을 학습하고 컴포넌트 설계, 상태 관리, API 연동 프로젝트를 수행했습니다.",
  },
];

export const certificates: Certificate[] = [
  {
    name: "SQLD",
    issuer: "한국데이터산업진흥원",
    date: "2025.12",
  },
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2024.06",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    category: "실무",
    title: "APEC 실시간 관제 웹 서비스 개발",
    description: "혼합 통신 환경에서 상태 동기화 기준을 수립한 실시간 관제 프론트엔드",
    sortDate: "2025-10-01",
    images: projectImages("apec-monitoring"),
    techStack: [
      "React",
      "TypeScript",
      "SCSS",
      "GSAP",
      "Zustand",
      "React Query",
      "WebSocket",
    ],
    period: "2025.03 - 2025.10",
    details: {
      role: "프론트엔드 개발",
      teamSize: "다부서 협업",
      features: [
        "AI 이상 감지 화면에서 WebSocket 수신 이벤트를 화면 상태에 매핑해 실시간 시각화로 반영",
        "SNS 모니터링 기능에 Long Polling + REST API를 역할별로 분리 연동해 데이터 갱신 흐름을 안정화",
        "Figma 시안 기반 GSAP 화면 전환/알림 인터랙션을 구현하고 전환 강도 기준을 맞춰 관제 가독성을 유지",
        "알림·팝업 공통 컴포넌트 분리와 react-calendar 커스터마이징으로 등록/조회/수정 동선을 일관된 패턴으로 정리",
      ],
      challenges: [
        "WebSocket과 Long Polling이 혼합된 환경에서 수신 시점 차이와 재요청 시 중복 반영 이슈를 줄이기 위해 상태 전이 규칙을 정의",
        "애니메이션 효과가 운영 정보 가독성을 해치지 않도록 전환 타이밍, 강조 강도, 표시 우선순위를 반복 조정",
      ],
      learnings: [
        "실시간 화면은 기능 구현보다 데이터 수신·오류·재요청 규칙을 먼저 정의할 때 안정적으로 운영된다는 점을 학습했습니다.",
        "인터랙션은 시각 효과 자체보다 업무 흐름의 우선순위를 기준으로 설계할 때 사용성이 높아진다는 점을 체득했습니다.",
      ],
    },
  },
  {
    id: "2",
    category: "실무",
    title: "APEC 백오피스 웹서비스 개발",
    description: "권한·조회·수정 흐름을 공통화해 운영 확장성을 높인 관리자 백오피스",
    sortDate: "2025-10-01",
    images: projectImages("apec-backoffice"),
    techStack: ["React", "TypeScript", "Ant Design", "Zustand", "React Query"],
    period: "2025.03 - 2025.10",
    details: {
      role: "프론트엔드 개발",
      teamSize: "백엔드 협업",
      features: [
        "소속 관리, 그룹 관리, 로그, 앱 관리, 공지사항 등 5개 관리자 메뉴를 동일한 UX 규칙으로 구현",
        "17개 API를 연동해 권한별 CRUD·검색·필터링 흐름을 목록/상세/수정 패턴으로 공통화",
        "Ant Design 테이블·모달·폼 컴포넌트를 프로젝트 컨벤션으로 래핑해 화면 간 동작 일관성을 확보",
        "업무 프로세스를 분석해 화면 설계 초안과 기능 정의서를 작성하고 기획-개발 간 기준 문서를 정리",
      ],
      challenges: [
        "권한별 분기와 유사 기능 반복으로 화면별 구현 편차가 발생해 재사용 가능한 화면 패턴과 상태 구조를 표준화",
        "API 응답 형식 차이로 예외 처리가 분산되어 목록/상세/수정 흐름의 공통 처리 기준을 정의",
      ],
      learnings: [
        "백오피스 생산성은 화면 개수보다 공통 규칙의 명확성이 좌우된다는 점을 실무에서 확인했습니다.",
        "요구사항을 문서로 선정리하면 기획-개발 간 재해석 비용과 구현 리스크를 줄일 수 있음을 학습했습니다.",
      ],
    },
  },
  {
    id: "3",
    category: "실무",
    title: "위치정보관리 백오피스 웹 서비스 개발",
    description: "기획자 부재 환경에서 요구사항 정의부터 QA까지 수행한 위치정보관리 백오피스",
    sortDate: "2025-02-01",
    images: projectImages("location-backoffice"),
    techStack: ["React", "TypeScript", "Ant Design", "Zustand", "React Query"],
    period: "2025.01 - 2025.02",
    details: {
      role: "프론트엔드 개발",
      teamSize: "백엔드 협업",
      features: [
        "회사 관리, 계약 관리, 로그, 이용 약관 등 4개 관리자 메뉴를 운영 절차 기준으로 설계·구현",
        "6개 API 연동으로 권한별 CRUD 및 검색/필터링 기능을 구성하고 화면별 예외 처리를 정리",
        "업무 프로세스를 기준으로 메뉴 구조를 설계하고 요구사항 정의서·와이어프레임을 작성해 개발 기준을 고정",
        "QA 테스트 케이스를 작성·검증해 배포 전 주요 시나리오를 점검하고 사용자 매뉴얼로 인수인계를 지원",
      ],
      challenges: [
        "기획자 부재로 초기 요구사항 해석 차이가 발생해 업무 프로세스를 기준으로 기능 범위와 우선순위를 명확히 정의",
        "짧은 개발 기간 내 안정적인 운영이 필요해 요구사항 문서화, QA 시나리오, 인수인계 문서를 병행 관리",
      ],
      learnings: [
        "기획 산출물과 개발 산출물을 함께 관리하면 구현 품질과 커뮤니케이션 품질을 동시에 높일 수 있음을 확인했습니다.",
        "QA 기준과 사용자 매뉴얼을 함께 문서화할 때 운영 인수인계와 문의 대응 효율이 높아진다는 점을 학습했습니다.",
      ],
    },
  },
  {
    id: "4",
    category: "사이드",
    title: "개인 포트폴리오 웹사이트 구축",
    description: "경력 정보를 문제-해결-결과 흐름으로 전달하도록 설계한 개인 포트폴리오 사이트",
    sortDate: "2026-03-01",
    images: projectImages("portfolio-site"),
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "OpenCode",
    ],
    period: "2026.03",
    details: {
      role: "기획 · 프론트엔드 개발",
      teamSize: "1인 개발",
      features: [
        "소개/기술/경력/프로젝트/교육/자격증 섹션을 정적 데이터 구조로 분리해 콘텐츠 수정과 확장을 쉽게 구성",
        "프로젝트 카드와 상세 모달을 분리해 요약 정보와 상세 정보를 단계적으로 탐색할 수 있도록 설계",
        "스크롤 애니메이션, 라이트/다크 테마, 로컬 폰트를 적용해 읽기 흐름과 시각적 일관성을 유지",
        "이력서와 포트폴리오 문구를 동기화해 동일한 메시지가 전달되도록 콘텐츠 기준을 지속적으로 정비",
      ],
      challenges: [
        "정적 데이터 구조를 유지하면서도 섹션별 표현 정보와 확장성을 함께 확보하기 위해 타입 구조를 반복 개선",
        "애니메이션, 접근성, 반응형 레이아웃 사이 충돌을 줄이기 위해 화면 밀도와 인터랙션 강도를 조정",
      ],
      learnings: [
        "경력 정보를 단순 나열보다 문제-결정-결과 구조로 제시할 때 전달력과 설득력이 높아짐을 확인했습니다.",
        "포트폴리오를 하나의 제품처럼 운영하며 정보 구조, 사용자 흐름, 콘텐츠 유지관리 기준을 함께 다루는 역량을 강화했습니다.",
      ],
      links: {
        github: "https://github.com/im-madylin/portfolio",
      },
    },
  },
];

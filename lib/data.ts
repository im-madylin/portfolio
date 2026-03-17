export interface Project {
  id: string;
  category: "실무" | "사이드";
  title: string;
  description: string;
  sortDate: string;
  thumbnail: string;
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

export const profileData = {
  name: "이하현",
  title: "프론트엔드 개발자",
  bio: "사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다. 깔끔한 코드와 아름다운 인터페이스를 만드는 것을 좋아하며, 새로운 기술을 배우고 적용하는 것에 열정을 가지고 있습니다.",
  email: "im.madylin@gmail.com",
  github: "https://github.com/im-madylin",
  resumeUrl: "/resume.pdf",
};

export const skills: Skill[] = [
  {
    name: "React",
    icon: "/skills/react.svg",
    context: "사내 서비스 화면 개발과 개인 프로젝트 UI 구현에 활용했습니다.",
    keywords: ["컴포넌트 분리", "상태 기반 UI", "재사용 구조"],
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    context: "프론트엔드 코드의 안정성과 유지보수성을 높이는 데 사용했습니다.",
    keywords: ["타입 모델링", "API 타입 관리", "리팩터링 안정성"],
  },
  {
    name: "Next.js",
    icon: "/skills/nextdotjs.svg",
    context:
      "포트폴리오와 서비스 화면의 페이지 구성 및 빌드 최적화에 활용했습니다.",
    keywords: ["App Router", "SSR/SSG", "SEO 기본 설정"],
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.svg",
    context: "운영 기능 개선과 인터랙션 구현을 위한 기본 언어로 활용했습니다.",
    keywords: ["DOM 제어", "비동기 처리", "이벤트 핸들링"],
  },
  {
    name: "HTML/CSS",
    icon: "/skills/html5.svg",
    context:
      "사용자 흐름을 고려한 화면 구조와 반응형 레이아웃 구현에 사용했습니다.",
    keywords: ["시맨틱 마크업", "반응형 레이아웃", "접근성 고려"],
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwindcss.svg",
    context:
      "디자인 시스템 기반으로 빠르게 UI를 구성하고 유지보수에 활용했습니다.",
    keywords: ["유틸리티 클래스", "컴포넌트 스타일링", "테마 적용"],
  },
  {
    name: "Git",
    icon: "/skills/git.svg",
    context:
      "협업 과정에서 버전 관리와 변경 이력 추적에 지속적으로 사용했습니다.",
    keywords: ["브랜치 전략", "PR 리뷰", "변경 이력 관리"],
  },
];

export const experiences: Experience[] = [
  {
    company: "에이치디에스 주식회사",
    role: "프론트엔드 개발",
    period: "2024.11 - 현재",
    summary:
      "실시간 관제와 백오피스 프론트엔드 개발을 담당하며 API 연동, 상태 관리, 운영 UX 개선을 수행하고 있습니다.",
    achievements: [
      "WebSocket 시각화와 Long Polling + API 연동을 구현해 실시간 모니터링 안정성 향상",
      "Figma 기반 GSAP 전환/알림 효과와 알림·팝업 공통 컴포넌트 적용으로 화면 일관성 및 유지보수성 개선",
      "APEC 백오피스 5개 메뉴와 17개 API 연동으로 권한별 CRUD, 검색, 필터링 기능 구현",
      "위치정보관리 백오피스 4개 메뉴와 6개 API 구현, QA 테스트 케이스 및 기능 정의 문서 작성으로 릴리즈 품질 강화",
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
    role: "서비스 운영",
    period: "2016.08 - 2021.08",
    summary:
      "물류 업무 IT 전환과 서비스 운영 개선을 맡아 사용자 관점의 업무 효율을 높였습니다.",
    achievements: [
      "사업팀, 개발팀, 고객사 개발팀 간 요구사항을 구조화해 전달하고 릴리즈 우선순위를 조정해 IT 전환 과제를 안정적으로 운영",
      "물류 처리 프로세스의 병목을 분석해 화면 접근 경로와 입력 플로우를 단순화하고 처리 속도 향상 및 비용 절감에 기여",
      "사용자 매뉴얼과 UI 안내 문구를 개선해 학습 부담을 낮추고 현업 사용자 만족도를 향상",
      "메뉴 사용 데이터를 기반으로 저사용 기능을 정리하고 정보 구조를 재배치해 서비스 운영 효율성을 개선",
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
      "동료학습 기반 자기주도적 학습 방식으로 C/C++ 심화 학습 및 웹 개발 프로젝트 진행",
  },
  {
    institution: "엘리스 SW 엔지니어 트랙",
    degree: "교육",
    organizer: "엘리스",
    period: "2021.10 - 2022.02 (5개월)",
    description:
      "HTML, CSS, JavaScript, React 등 웹 개발 전반 학습 및 프로젝트 진행",
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
    description: "실시간 데이터 관제와 UX 개선에 집중한 APEC 관제 웹 서비스",
    sortDate: "2025-10-01",
    thumbnail: "/projects/ecommerce.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder-logo.png",
      "/placeholder-logo.svg",
    ],
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
        "AI 이상 감지 화면에서 WebSocket 데이터 수신 및 시각화 기능 구현",
        "SNS 모니터링 기능에 Long Polling + API 복합 연동을 적용해 안정적 양방향 통신 지원",
        "Figma 기반 GSAP 애니메이션으로 화면 전환 및 알림 강조 효과 적용",
        "알림·팝업 공통 컴포넌트와 react-calendar 커스터마이징으로 등록/조회/수정 UX 개선",
      ],
      challenges: [
        "실시간 통신 방식(WebSocket/Long Polling)이 혼합된 환경에서 상태 동기화와 오류 대응 흐름을 정리",
        "애니메이션 효과와 관제 화면 가독성의 균형을 맞추기 위해 전환 타이밍과 강조 강도를 반복 조정",
      ],
      learnings: [
        "실시간 데이터 흐름을 화면에 안정적으로 반영하는 프론트엔드 설계 경험을 쌓았습니다.",
        "디자인 시안을 인터랙션으로 구현할 때 사용자 집중도와 사용성을 함께 고려하는 방법을 익혔습니다.",
      ],
    },
  },
  {
    id: "2",
    category: "실무",
    title: "APEC 백오피스 웹서비스 개발",
    description: "권한 기반 운영 업무를 지원하는 APEC 관리자 백오피스",
    sortDate: "2025-10-01",
    thumbnail: "/projects/chat.jpg",
    images: ["/placeholder-user.jpg", "/placeholder.jpg"],
    techStack: ["React", "TypeScript", "Ant Design", "Zustand", "React Query"],
    period: "2025.03 - 2025.10",
    details: {
      role: "프론트엔드 개발",
      teamSize: "기획/백엔드 협업",
      features: [
        "소속 관리, 그룹 관리, 로그, 앱 관리, 공지사항 관리 등 5개 관리자 메뉴 화면 구현",
        "17개 API를 연동해 권한별 CRUD, 검색, 필터링 기능 구현",
        "Ant Design 테이블·모달·폼 컴포넌트를 활용해 일관된 운영 UX 구성",
        "업무 프로세스를 파악해 화면 설계와 기능 정의 협업 지원",
      ],
      challenges: [
        "권한별 분기와 유사 기능이 많은 구조에서 재사용 가능한 화면 패턴과 상태 관리 구조를 정리",
        "API 응답 형식 차이를 흡수하기 위해 목록/상세/수정 흐름의 공통 처리 기준을 맞췄습니다.",
      ],
      learnings: [
        "운영 도메인 백오피스에서 정보 구조와 권한 정책을 화면 설계에 반영하는 경험을 쌓았습니다.",
        "기획과 개발 사이에서 요구사항을 구체화해 구현 리스크를 줄이는 커뮤니케이션을 익혔습니다.",
      ],
    },
  },
  {
    id: "3",
    category: "실무",
    title: "위치정보관리 백오피스 웹 서비스 개발",
    description: "위치정보 사업자 운영을 위한 관리자 백오피스",
    sortDate: "2025-02-01",
    thumbnail: "/projects/portfolio.jpg",
    images: [
      "/placeholder-logo.svg",
      "/placeholder.jpg",
      "/placeholder-user.jpg",
    ],
    techStack: ["React", "TypeScript", "Ant Design", "Zustand", "React Query"],
    period: "2025.01 - 2025.02",
    details: {
      role: "프론트엔드 개발",
      teamSize: "기획/백엔드 협업",
      features: [
        "회사 관리, 계약 관리, 로그, 이용 약관 등 4개 관리자 메뉴 화면 구현",
        "6개 API 연동으로 권한별 CRUD 및 검색/필터링 기능 구현",
        "Ant Design 기반 테이블·모달·폼 컴포넌트로 운영 화면 UX 일관성 확보",
        "QA 테스트 케이스 작성 및 검증으로 배포 전 주요 시나리오 점검",
      ],
      challenges: [
        "기획자 부재 환경에서 업무 프로세스를 정리해 메뉴 구조와 기능 범위를 명확히 정의",
        "짧은 개발 기간 내 안정적인 운영을 위해 요구사항 문서화와 QA 검증을 병행",
      ],
      learnings: [
        "요구사항 정의서, 기능 정의서, 와이어프레임 등 기획 산출물을 작성하며 문제를 구조화하는 역량을 키웠습니다.",
        "사용자 매뉴얼 문서화가 운영 문의 감소와 인수인계 효율 개선에 직접 기여함을 경험했습니다.",
      ],
    },
  },
  {
    id: "4",
    category: "사이드",
    title: "개인 포트폴리오 웹사이트 구축",
    description: "OpenCode를 활용해 설계부터 구현/검증까지 진행한 개인 포트폴리오",
    sortDate: "2026-03-01",
    thumbnail: "/placeholder-logo.png",
    images: ["/placeholder-logo.png", "/placeholder.jpg", "/placeholder-user.jpg"],
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
        "소개/기술/경력/프로젝트/자격증 섹션으로 구성된 원페이지 포트폴리오 구현",
        "프로젝트 상세 모달, 스크롤 애니메이션, 라이트/다크 테마 전환 기능 적용",
        "Paperlogy 폰트를 로컬 폰트로 적용해 통일된 타이포그래피 구성",
        "OpenCode 기반 작업 흐름으로 구현 후 빌드 검증까지 반복 수행",
      ],
      challenges: [
        "정적 데이터 구조를 유지하면서 섹션별 표현 정보와 확장성을 함께 고려한 타입 설계",
        "애니메이션, 접근성, 반응형 레이아웃 사이의 균형을 맞추기 위한 UI 조정",
      ],
      learnings: [
        "AI 코딩 도구를 사용할 때도 요구사항 분해, 코드 리뷰, 검증 루틴이 품질을 좌우한다는 점을 체감했습니다.",
        "포트폴리오 자체를 하나의 제품처럼 다루며 정보 구조와 사용자 흐름 설계 역량을 강화했습니다.",
      ],
    },
  },
];

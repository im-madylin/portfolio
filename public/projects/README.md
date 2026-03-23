# Project Image Placeholders

이 폴더는 프로젝트 카드/모달에 사용할 이미지 자리입니다.
`thumbnail` 파일은 사용하지 않고, **정렬 순서상 첫 번째 파일(보통 `01-*`)이 카드 썸네일**로 사용됩니다.

## 폴더 구조
- `apec-monitoring/`
- `apec-backoffice/`
- `location-backoffice/`
- `portfolio-site/`

## 파일 규칙
- 파일명은 자유롭게 사용 가능 (예: `01-login.webp`, `02-list.webp`, `03-detail.jpg`)
- 정렬 순서대로 모달에 노출되고, 첫 번째 파일이 카드 썸네일이 됩니다.
- 권장: `01-*`, `02-*`, `03-*`처럼 숫자 접두어 사용

## 사용 방법
1. 각 폴더의 예시 파일을 실제 이미지로 **덮어쓰기**
2. `npm run generate:project-images` 실행 (또는 `npm run dev`, `npm run build` 실행)
3. 실무 프로젝트 이미지는 비식별(블러/리덕션) 처리본만 넣기

## 자동 연결 방식
- `scripts/generate-project-images.mjs`가 `public/projects/*`를 스캔해
  `lib/generated-project-images.ts`를 생성합니다.
- `lib/data.ts`는 프로젝트 폴더명만 지정하고, 파일 목록은 자동으로 가져옵니다.

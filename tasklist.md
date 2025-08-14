tasklist.md: fandomrobotics 다국어 지원 상세 작업 목록 (1주차)
1. 개요
이 TaskList는 fandomrobotics 웹사이트에 다국어(한국어, 영어) 기능을 추가하는 것을 목표로 합니다.
기술 스택: 정적 HTML, CSS, JavaScript (jQuery 포함)

2. 상세 Task List
Day 1: 프로젝트 구조 분석 및 파일 복제
Task 1: 개발 환경 구축

기존 웹사이트의 파일들을 백업하고, 로컬 환경에 복제합니다.

Task 2: 파일 구조 설정

fandomrobotics.com/ 경로에 영문 페이지를 위한 en 폴더를 생성합니다.

Task 3: 한국어 페이지 복제

index.html, about.html, service.html, portfolio.html, contact.html 파일을 en/ 폴더에 복사합니다.

Day 2: 콘텐츠 번역 (메인 페이지 및 서브 페이지)
Task 1: 메인 페이지 콘텐츠 번역

en/index.html 파일을 열어 헤더, 슬라이더, 핵심 서비스, 회사 소개, CTA 등 모든 텍스트를 영어로 번역하여 직접 수정합니다.

Task 2: 서브 페이지 콘텐츠 번역

en/about.html, en/service.html, en/portfolio.html, en/contact.html 파일의 모든 콘텐츠를 영어로 번역하여 수정합니다.

Day 3: 메뉴 및 포트폴리오 번역
Task 1: 내비게이션 메뉴 번역

모든 HTML 파일(*.html, en/*.html)의 내비게이션 메뉴 텍스트를 한국어 또는 영어로 변경합니다.

Task 2: 포트폴리오 콘텐츠 번역

en/portfolio.html의 프로젝트 제목, 설명 등 모든 텍스트를 영어로 번역하여 수정합니다.

Day 4: UI/UX 구현 (언어 전환 버튼)
Task 1: 언어 전환 버튼 UI 구현

모든 HTML 파일의 헤더 내비게이션 바에 'KO'와 'EN'을 표시하는 버튼 또는 링크를 추가합니다. 기존 CSS 스타일과 조화롭게 디자인합니다.

Task 2: 언어 전환 JavaScript 함수 구현

js/script.js 파일에 언어 전환 로직을 추가합니다. 버튼 클릭 시 현재 페이지의 경로를 분석하여 다른 언어 페이지로 리다이렉트하는 기능을 구현합니다.

예시: /contact.html에서 'EN' 버튼 클릭 시 /en/contact.html로 이동.

Day 5: SEO 및 메타 태그 설정
Task 1: 언어별 메타 태그 추가

모든 HTML 파일의 <head> 섹션에 hreflang 태그를 추가합니다. 이는 검색 엔진에게 해당 페이지가 어떤 언어 버전에 속하는지 알려줍니다.

예시: <link rel="alternate" hreflang="en" href="https://fandomrobotics.com/en/index.html" />

Task 2: 기존 메타 태그 번역

en/*.html 파일의 <title>, <meta name="description"> 태그를 영어로 번역하여 수정합니다.

Day 6: 문의 양식 및 최종 점검
Task 1: 문의 양식 번역

en/contact.html 파일의 문의 양식 필드명, placeholder, 버튼 텍스트 등을 영어로 번역합니다.

Task 2: 웹사이트 전체 기능 테스트

한국어와 영문 버전 웹사이트의 모든 링크, 버튼, 슬라이더, 애니메이션이 정상적으로 작동하는지 점검합니다.

Task 3: 콘텐츠 교정

영문 번역의 문법적 오류나 어색한 표현이 없는지 검수하고 수정합니다.

Day 7: 배포 및 문서화
Task 1: 실서버 배포

로컬에서 개발한 파일들을 실서버에 업로드하여 적용합니다.

Task 2: 백업 진행

배포 전후로 실서버의 백업을 철저히 진행합니다.

Task 3: README.md 작성

다국어 지원 기능 추가에 대한 내용, 주요 수정 파일, 언어 전환 로직 등을 문서화합니다.
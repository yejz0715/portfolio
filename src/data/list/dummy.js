export const projectList = [
  {
    id: 1,
    name: "인스타그램 UI를 활용한 개인 포트폴리오 웹 사이트",
    period: "2021.07.11 ~ 2021.07.20",
    intro: "1인 개발 프로젝트로, React 기반의 웹 서비스",
    skill: ["react", "javascript", "styled-components"],
    responsibilities: [
      "styled-components를 통한 UI개발",
      "react-slick 라이브러리를 활용하여 팝업 carousel 및 스토리 carousel 구현",
      "메인 페이지 내에 개발 스택 검색 기능 구현",
      "react-router-dom 기반의 router 구현 및 페이징 처리",
      "Github와 gh-pages를 통한 웹 서비스 배포",
    ],
    gitUrl: "https://github.com/yejz0715/portfolio",
    demoUrl: "https://yejz0715.github.io/portfolio/",
    images: [
      process.env.PUBLIC_URL + "/images/pj_img_ig_1.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_ig_2.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_ig_3.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_ig_4.jpg",
    ],
    tag: [
      "개인_포트폴리오",
      "스타일_컴포넌트_사용",
      "리액트_활용",
      "복잡했던_props",
      "useState()_완전_이해",
    ],
  },
  {
    id: 2,
    name: "React 스터디용 토이 프로젝트",
    period: "2021.06.14 ~ 2021.07.22",
    intro: "React 기본 문법과 구조 이해를 위한 토이 프로젝트",
    skill: ["react", "javascript", "scss"],
    responsibilities: [
      "scss를 활용한 UI 구현 및 커스텀 작업 진행",
      "서비스 내 페이지에 Container-Presenter 패턴 적용하여 로직과 UI분리 처리",
      "react-router-dom 기반의 router 구현 및 페이지 처리 ",
      "custom select 및 checkbox 제작 및 구현",
    ],
    gitUrl: "https://github.com/yejz0715/react-shopping",
    demoUrl: "",
    images: [
      process.env.PUBLIC_URL + "/images/pj_img_sl_1.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_sl_2.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_sl_3.jpg",
    ],
    tag: ["개인프로젝트", "toyProject", "React_입문용", "React_커스텀"],
  },
  {
    id: 3,
    name: "MBTI 유형별 심리테스트 웹사이트",
    period: "2021.02.07 ~ 2021.03.01",
    intro:
      "UI 부터 배포까지 웹사이트의 전체적인 흐름을 파악할 수 있었던 프로젝트",
    skill: ["html", "javascript", "css"],
    responsibilities: [
      "부트스트랩 사용한 UI 및 반응형 페이지 구현",
      "애니메이션을 활용한 상태 바 UI 및 구현",
      "12개의 데이터로 결과 분석 알고리즘 구현",
      "카카오 API를 활용한 공유 기능 구현",
    ],
    gitUrl: "https://github.com/yejz0715/-psychological-test",
    demoUrl: "https://twelvelove-type.netlify.app/",
    images: [
      process.env.PUBLIC_URL + "/images/pj_img_pt_1.png",
      process.env.PUBLIC_URL + "/images/pj_img_pt_2.png",
      process.env.PUBLIC_URL + "/images/pj_img_pt_3.png",
      process.env.PUBLIC_URL + "/images/pj_img_pt_4.png",
    ],
    tag: [
      "개인_프로젝트",
      "toyProject",
      "html_css_javaScript_복습",
      "알고리즘_공부_시작한_이유",
      "카카오톡_배포",
      "인프런_판다코딩",
    ],
  },
  {
    id: 4,
    name: "버거킹 클론코딩",
    period: "2021.11.17 ~ 2021.12.03",
    intro: "버거킹 웹 사이트 클론코딩을 통한 웹 개발 이해",
    skill: ["html", "jsp", "css", "javascript", "java", "oracle xe 11gr2"],
    responsibilities: [
      " 애니메이션을 활용하여 header UI 및 기능 구현",
      "사용자 이벤트 상태(진행중, 완료 등)에 따른 로직 처리",
      "전체적인 서비스 UI 조정 및 구현",
    ],
    gitUrl: "https://github.com/yejz0715/BurgerkingWebCloneCoding",
    demoUrl: "",
    images: [
      process.env.PUBLIC_URL + "/images/pj_img_bk1_1.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_bk1_2.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_bk1_3.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_bk1_4.jpg",
    ],
    tag: ["첫_팀_프로젝트", "버거킹_클론_코딩", "사용자_관리자_페이지_따로"],
  },
  {
    id: 5,
    name: "Spring기반의 버거킹 클론코딩",
    period: "2021.01.03 ~ 2021.01.12",
    intro:
      "기존의 버거킹 프로젝트에 MVC패턴을 적용하여 이용자별(사용자, 관리자) 로직처리를 적용한 웹 사이트",
    skill: ["html", "jsp", "css", "javascript", "java", "oracle xe 11gr2"],
    responsibilities: [
      "사용자 이벤트 페이지 조회 구현",
      "관리자 이벤트 페이지 내 이벤트 등록, 수정, 삭제 로직 구현",
      "전체적인 서비스 UI 조정 및 구현",
    ],
    gitUrl: "https://github.com/yejz0715/BurgerKingCloneCoding_Spring.",
    demoUrl: "",
    images: [
      process.env.PUBLIC_URL + "/images/pj_img_bk2_1.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_bk2_2.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_bk2_3.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_bk2_4.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_bk2_5.jpg",
    ],
    tag: [
      "팀_프로젝트",
      "기존_프로젝트_보완",
      "mvc패턴_적용",
      "이벤트_페이지_완벽",
    ],
  },
];

export const storyList = [
  {
    id: 1,
    src: process.env.PUBLIC_URL + "/images/react_icon.png",
    name: "REACT",
  },
  {
    id: 2,
    src: process.env.PUBLIC_URL + "/images/js_icon.png",
    name: "JAVASCRIPT",
  },
  {
    id: 3,
    src: process.env.PUBLIC_URL + "/images/html_icon.png",
    name: "HTML",
  },
  {
    id: 4,
    src: process.env.PUBLIC_URL + "/images/java_icon.png",
    name: "JAVA",
  },
];
export const myStoryImgList = [
  { id: 1, src: process.env.PUBLIC_URL + "/images/story_img_1.jpg" },
  { id: 2, src: process.env.PUBLIC_URL + "/images/story_img_2.png" },
  { id: 3, src: process.env.PUBLIC_URL + "/images/story_img_3.jpg" },
  { id: 4, src: process.env.PUBLIC_URL + "/images/story_img_4.jpg" },
  { id: 5, src: process.env.PUBLIC_URL + "/images/story_img_5.jpg" },
];
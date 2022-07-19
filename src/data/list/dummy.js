export const projectList = [
  {
    id: 1,
    name: "인스타그램 UI를 활용한 개인 포트폴리오 사이트",
    period: "2021.07.11 ~ 2021.07.20",
    intro:
      "인스타그램 스토리와 피드 기반으로, Figma를 사용해서 UI/UX 디자인과 react를 복습 할 수 있었던 첫 포트폴리오 사이트 입니다.",
    skill: ["react", "javascript", "styled-components"],
    responsibilities: [
      "styled-components를 활용한 UI개발",
      "react-slick 라이브러리를 활용하여 프로젝트 이미지carousel 구현",
      "태그 기반의 skill 데이터 검색 기능 구현",
      "react-router-dom 기반의 router 구현 및 페이지 처리 ",
    ],
    gitUrl: "https://github.com/yejz0715/portfolio",
    demoUrl: "",
    images: [
      process.env.PUBLIC_URL + "/images/pj_img_ig_1.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_ig_2.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_ig_3.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_ig_4.jpg",
    ],
    tag: [
      "개인_포트폴리오",
      "스타일_컴포넌트_사용",
      "리액트_복습용",
      "복잡했던_props",
      "useState()_완전_이해",
    ],
  },
  {
    id: 2,
    name: "react 학습용_토이 프로젝트",
    period: "2021.06.14 ~ 2021.07.22",
    intro:
      "리액트를 학습하며 문법과 react-hooks를 익히기 위해 제작한 토이 프로젝트입니다.   ",
    skill: ["react", "javascript", "scss"],
    responsibilities: [
      "scss를 활용한 UI 구현",
      "Container-Presenter 패턴을 사용하여 로직과 UI 분리",
      "react-router-dom 기반의 router 구현 및 페이지 처리 ",
      "custom select 및 checkbox 제작 및 구현",
    ],
    gitUrl: "https://github.com/yejz0715/react-shopping",
    demoUrl: "",
    images: [
      process.env.PUBLIC_URL + "/images/pj_img_sl_1.jpg",
      process.env.PUBLIC_URL + "/images/pj_img_sl_2.jpg",
    ],
    tag: [
      "개인프로젝트",
      "toyProject",
      "리액트_입문용",
      "리액트_커스텀",
      "리액트_훅스",
    ],
  },
  {
    id: 3,
    name: "MBTI 유형별 심리테스트 웹사이트",
    period: "2021.02.07 ~ 2021.03.01",
    intro:
      "12개의 질문들로 심리테스트를 할 수 있는 웹 사이트로 레이아웃을 통해 하나의 페이지로 3개의 화면을 전환할 수 있게 제작하였고, 웹 사이트를 배포할 수 있었던 프로젝트입니다.",
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
    name: "버거킹 홈페이지 클론코딩",
    period: "2021.11.17 ~ 2021.12.03",
    intro:
      "버거킹 홈페이지를 클론코딩하여 사용자, 관리자 페이지로 나눠서 기본적인 기능을 구현한(주문_주문내역확인/상품 및 추가,수정,삭제 등) 프로젝트입니다. ",
    skill: ["html", "jsp", "css", "javascript", "java", "oracle xe 11gr2"],
    responsibilities: [
      "header 애니메이션을 활용한 UI 및 기능 구현",
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
    name: "springBoot를 사용한 버거킹 클론코딩 ",
    period: "2021.01.03 ~ 2021.01.12",
    intro:
      "기존의 버거킹 프로젝트에서 부족했던 기능적인 부분을(사용자, 관리자에 따라 비회원 주문 처리) 보완해서 mvc패턴을 적용한 프로젝트입니다.",
    skill: ["html", "jsp", "css", "javascript", "java", "oracle xe 11gr2"],
    responsibilities: [
      "사용자 이벤트 페이지 내의 mvc 패턴 적용한 로직 처리",
      "관리자 이벤트 페이지 추가, 수정, 삭제 mvc패턴 적용해서 기능 구현",
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

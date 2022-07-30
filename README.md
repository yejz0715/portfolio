# 개인 포트폴리오 

<h3>프로젝트 소개</h3>

* 1인 개발 프로젝트로, React 기반의 웹 포트폴리오 사이트 입니다.

<h3>사용 기술</h3>

* react, javascript, styled-components 

<h3>기능 및 역할</h3>

* styled-components를 통하여 UI개발을 하였습니다.

```
const [isClicked, setClick] = useState(false);
  const navigate = useNavigate();
  const handleOnClickPage = () => {
    setClick(true);
    setTimeout(function () {
      navigate("/yejz0715");
    }, 900);
  };

  return (
    <IntroPresenter
      handleOnClickPage={handleOnClickPage}
      isClicked={isClicked}
    />
  );
};
```

<br/>
<br/>

* react-slick 라이브러리를 활용하여 팝업 carousel 및 스토리 carousel 을 구현하였습니다.

<img src= "https://user-images.githubusercontent.com/86754632/181215908-d0311048-c31c-4c98-aabf-c693f2d5cf22.png" width=500 heigh=500 />

<br/>
<br/>

* 메인 페이지 내에 개발 스택 검색 기능을 구현하였습니다.

<img src= "https://user-images.githubusercontent.com/86754632/181215312-1faf6043-b186-446f-9221-66afd2ecf76d.png" width=500 heigh=500 />

<br/>
<br/>

* react-router-dom 기반의 router 구현 및 페이징 처리를 하였습니다.

```
const AppRouter = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<IntroContainer />} />
        <Route path="/yejz0715" element={<MainContainer />} />
      </Routes>
    </Router>
  );
};
```

<br/>
<br/>

* Github와 gh-pages를 통한 웹 서비스 배포를 하였습니다.

</br>
</br>

<h3>라이선스</h3>

* 인스타그램 UI를 활용하였습니다.
* 폰트는 DGB대구은행_IM혜민체 Regular,IM혜민체 Bold 를 사용하였습니다.

</br>
</br>

[포트폴리오 사이트](https://yejz0715.github.io/portfolio/)

import { useState } from "react";
import IntroContainer from "./Pages/IntroPage";
import MainContainer from "./Pages/MainPage";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [isFadeOut, setFadeOut] = useState(false);

  return (
    <>
      <GlobalStyle />
      {isFadeOut ? (
        <MainContainer />
      ) : (
        <IntroContainer setFadeOut={setFadeOut} />
      )}
    </>
  );
}

export default App;

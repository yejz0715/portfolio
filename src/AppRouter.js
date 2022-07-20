import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import IntroContainer from "./Pages/IntroPage";
import MainContainer from "./Pages/MainPage";
const AppRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<IntroContainer />} />
        <Route path="/yejzgram" element={<MainContainer />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import IntroContainer from "./Pages/IntroPage";
import MainContainer from "./Pages/MainPage";
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
export default AppRouter;

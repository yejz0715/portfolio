import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import IntroContainer from "./Pages/IntroPage";
import MainContainer from "./Pages/MainPage";
const AppRouter = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <>
          <Route path="/portfolio" element={<IntroContainer />} />
          <Route path="/" element={<MainContainer />} />
        </>
      </Routes>
    </Router>
  );
};
export default AppRouter;

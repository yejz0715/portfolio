import {
  HashRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import NotFoundContainer from "./Pages/ErrorPage";
import IntroContainer from "./Pages/IntroPage";
import MainContainer from "./Pages/MainPage";
const AppRouter = () => {
  return (
    <Router>
      <GlobalStyle />
      {/* basename={process.env.PUBLIC_URL} */}
      <Routes basename={process.env.PUBLIC_URL}>
        {/* <Route
          exact
          path="/"
          element={<Navigate to="/intro" replace={true} />}
        /> */}

        <Route exact path="/" element={<IntroContainer />} />
        <Route path="/yejz0715" element={<MainContainer />} />
        {/* <Route path="*" element={<NotFoundContainer />} /> */}
      </Routes>
    </Router>
  );
};
export default AppRouter;

import React from "react";
import Header from "../../Component/Header";
import Profile from "../../Component/Profile";
import Project from "../../Component/Project";
import Story from "../../Component/Story";
import * as S from "./style.js";
const MainPresenter = ({ projectList }) => (
  <S.Container>
    {console.log(projectList)}
    <Header />
    <Profile />
    <Story />
    <Project />
  </S.Container>
);
export default MainPresenter;

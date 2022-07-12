import React from "react";
import MainPresenter from "./MainPresenter";
import { projectList } from "../../data/list/dummy";
const MainContainer = () => {
  return <MainPresenter projectList={projectList} />;
};
export default MainContainer;

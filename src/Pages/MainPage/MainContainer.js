import React from "react";
import MainPresenter from "./MainPresenter";
import { projectList, storyList } from "../../data/list/dummy";
const MainContainer = () => {
  const handleOnClick = (item) => {
    console.log(item.name);
  };
  return (
    <MainPresenter
      projectList={projectList}
      storyList={storyList}
      handleOnClick={handleOnClick}
    />
  );
};
export default MainContainer;

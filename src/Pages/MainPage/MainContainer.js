import React, { useState } from "react";
import MainPresenter from "./MainPresenter";
import { projectList, storyList } from "../../data/list/dummy";
const MainContainer = () => {
  const [isShow, setShow] = useState(false);
  const handleOnClick = () => {
    setShow(true);
  };
  isShow ? console.log("나옴") : console.log("안나옴");
  return (
    <MainPresenter
      projectList={projectList}
      storyList={storyList}
      handleOnClick={handleOnClick}
      isShow={isShow}
    />
  );
};
export default MainContainer;

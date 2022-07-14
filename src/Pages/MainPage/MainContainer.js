import MainPresenter from "./MainPresenter";
import { projectList, storyList } from "../../data/list/dummy";
import { useState } from "react";
const MainContainer = () => {
  const [isShow, setShow] = useState(false);

  const handleOnClick = () => {
    setShow(true);
  };

  return (
    <MainPresenter
      projectList={projectList}
      storyList={storyList}
      handleOnClick={handleOnClick}
      isShow={isShow}
      setShow={setShow}
    />
  );
};
export default MainContainer;

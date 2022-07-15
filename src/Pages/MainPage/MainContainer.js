import MainPresenter from "./MainPresenter";
import { projectList, storyList, myStoryImgList } from "../../data/list/dummy";
import { useState } from "react";
const MainContainer = () => {
  const [isShowProject, setShowProject] = useState(false);
  const [isShowStory, setShowStory] = useState(false);
  const [curValue, setCurValue] = useState(null);

  const handleOnClick = (clickItem) => {
    setShowProject(true);
    console.log(clickItem);

    setCurValue(() =>
      projectList.filter((listItem) => {
        return clickItem === listItem.id;
      })
    );
  };
  console.log(curValue);

  const handleShowStory = () => {
    setShowStory(true);
    console.log("y");
  };

  return (
    <MainPresenter
      projectList={projectList}
      storyList={storyList}
      handleOnClick={handleOnClick}
      isShowProject={isShowProject}
      setShowProject={setShowProject}
      handleShowStory={handleShowStory}
      curValue={curValue}
      isShowStory={isShowStory}
      setShowStory={setShowStory}
      myStoryImgList={myStoryImgList}
    />
  );
};
export default MainContainer;

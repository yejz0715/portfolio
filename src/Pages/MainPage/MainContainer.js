import MainPresenter from "./MainPresenter";
import { projectList, storyList, myStoryImgList } from "../../data/list/dummy";
import { useState } from "react";
const MainContainer = () => {
  const [isShowProject, setShowProject] = useState(false);
  const [isShowStory, setShowStory] = useState(false);
  const [curValue, setCurValue] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [searchedProjectList, setSearchedProjectList] = useState(projectList);

  const handleOnClick = (clickItem) => {
    setShowProject(true);

    setCurValue(() =>
      projectList.filter((listItem) => {
        return clickItem === listItem.id;
      })
    );
  };

  const handleShowStory = () => {
    setShowStory(true);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleOnKeyEnter = (e) => {
    if (e.key === "Enter") {
      if (searchValue === "") {
        setSearchedProjectList(projectList);
      } else {
        setSearchedProjectList(
          projectList.filter(
            (project) => project.skill.indexOf(searchValue) !== -1
          )
        );
      }
    }
  };

  return (
    <MainPresenter
      projectList={projectList}
      searchedProjectList={searchedProjectList}
      storyList={storyList}
      handleOnClick={handleOnClick}
      isShowProject={isShowProject}
      setShowProject={setShowProject}
      handleShowStory={handleShowStory}
      curValue={curValue}
      isShowStory={isShowStory}
      setShowStory={setShowStory}
      myStoryImgList={myStoryImgList}
      handleOnChange={handleOnChange}
      handleOnKeyEnter={handleOnKeyEnter}
    />
  );
};
export default MainContainer;

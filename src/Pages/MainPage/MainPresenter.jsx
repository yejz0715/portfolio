import React from "react";
import Header from "../../Component/Header";
import Profile from "../../Component/Profile";
import Project from "../../Component/Project";
import PopUp from "../../Component/PopUp";
import Story from "../../Component/Story";
import * as S from "./style.js";
import StorySlider from "../../Component/StorySlider";

const MainPresenter = ({
  projectList,
  storyList,
  handleOnClick,
  isShowProject,
  setShowProject,
  handleShowStory,
  curValue,
  isShowStory,
  setShowStory,
  myStoryImgList,
}) =>
  isShowStory ? (
    <StorySlider myStoryImgList={myStoryImgList} setShowStory={setShowStory} />
  ) : (
    <S.Container>
      <S.background type="project">
        {isShowProject ? (
          <S.background type="pop">
            {curValue.map((item) => (
              <PopUp
                key={item.id}
                id={item.id}
                name={item.name}
                period={item.period}
                intro={item.intro}
                skill={item.skill}
                responsibilities={item.responsibilities}
                gitUrl={item.gitUrl}
                demoUrl={item.demoUrl}
                images={item.images}
                tag={item.tag}
                setShowProject={setShowProject}
              />
            ))}
          </S.background>
        ) : (
          <>
            <Header />
            <S.wrapper>
              <Profile
                handleShowStory={() => {
                  handleShowStory();
                }}
              />
              <S.storyList>
                {storyList.length > 0 &&
                  storyList.map((story) => (
                    <Story
                      key={story.id}
                      id={story.id}
                      name={story.name}
                      src={story.src}
                    />
                  ))}
              </S.storyList>
              <S.projectText>project</S.projectText>
              <S.projectContainer>
                {projectList.length > 0 &&
                  projectList.map((item) => (
                    <Project
                      key={item.id}
                      id={item.id}
                      images={item.images}
                      handleOnClick={() => {
                        handleOnClick(item.id);
                      }}
                    />
                  ))}
              </S.projectContainer>
            </S.wrapper>
          </>
        )}
      </S.background>
    </S.Container>
  );
export default MainPresenter;

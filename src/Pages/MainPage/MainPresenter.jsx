import React from "react";
import Header from "../../Component/Header";
import Profile from "../../Component/Profile";
import Project from "../../Component/Project";
import PopUp from "../../Component/PopUp";
import Story from "../../Component/Story";
import * as S from "./style.js";
import StorySlider from "../../Component/StorySlider";

const MainPresenter = ({
  searchedProjectList,
  storyList,
  handleOnClick,
  isShowProject,
  setShowProject,
  handleShowStory,
  curValue,
  isShowStory,
  setShowStory,
  myStoryImgList,
  handleOnChange,
  handleOnKeyEnter,
}) =>
  isShowStory ? (
    <StorySlider myStoryImgList={myStoryImgList} setShowStory={setShowStory} />
  ) : (
    <S.Container>
      <S.Background isShowProject={isShowProject}>
        {isShowProject ? (
          curValue.map((item) => (
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
          ))
        ) : (
          <>
            <Header
              handleOnChange={handleOnChange}
              handleOnKeyEnter={handleOnKeyEnter}
            />
            <S.Wrapper>
              <Profile handleShowStory={handleShowStory} />
              <S.StoryList>
                {storyList.length > 0 &&
                  storyList.map((story) => (
                    <Story
                      key={story.id}
                      id={story.id}
                      name={story.name}
                      src={story.src}
                    />
                  ))}
              </S.StoryList>
              <S.ProjectText>project</S.ProjectText>
              <S.ProjectContainer>
                {searchedProjectList.length > 0 ? (
                  searchedProjectList.map((item) => (
                    <Project
                      key={item.id}
                      id={item.id}
                      images={item.images}
                      handleOnClick={() => {
                        handleOnClick(item.id);
                      }}
                    />
                  ))
                ) : (
                  <h1>조회된 데이터가 없습니다!!</h1>
                )}
              </S.ProjectContainer>
            </S.Wrapper>
          </>
        )}
      </S.Background>
    </S.Container>
  );
export default MainPresenter;

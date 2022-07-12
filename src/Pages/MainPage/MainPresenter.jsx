import React from "react";
import Header from "../../Component/Header";
import Profile from "../../Component/Profile";
import Project from "../../Component/Project";
import Story from "../../Component/Story";
import * as S from "./style.js";
const MainPresenter = ({ projectList, storyList, handleOnClick }) => (
  <S.Container>
    <Header />
    <Profile />
    {storyList.length > 0 &&
      storyList.map((story) => (
        <Story key={story.id} id={story.id} name={story.name} src={story.src} />
      ))}
    <S.projectContainer>
      {projectList.length > 0 &&
        projectList.map((item) => (
          <Project
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
            handleOnClick={() => {
              handleOnClick(item);
            }}
          />
        ))}
    </S.projectContainer>
  </S.Container>
);
export default MainPresenter;

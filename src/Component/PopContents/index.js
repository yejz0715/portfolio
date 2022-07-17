import React from "react";
import * as S from "./style.js";
const PopContents = ({
  id,
  name,
  period,
  intro,
  skill,
  responsibilities,
  gitUrl,
  demoUrl,
  tag,
}) => {
  return (
    <S.container>
      <S.box>
        <S.UserImg path="assets/user_yeji.jpg" />
        yejz0715
      </S.box>
      <S.Wrapper>
        <S.SubTitle>💡 프로젝트명</S.SubTitle>
        <S.Description>{name}</S.Description>
        <S.SubTitle>🔥 소개</S.SubTitle>
        <S.Description>{intro}</S.Description>
        <S.SubTitle>🔥 개발스택</S.SubTitle>
        <S.Description>{skill}</S.Description>
        <S.SubTitle>🔥 담당업무</S.SubTitle>
        {responsibilities.map((item, index) => (
          <S.Description key={index}>
            {index + 1}. {item}
          </S.Description>
        ))}
        {gitUrl.length > 0 && (
          <a href={gitUrl} target="_blank" rel="noreferrer">
            <S.Description type="link">@githubLink</S.Description>
          </a>
        )}
        {demoUrl.length > 0 && (
          <a href={demoUrl} target="_blank" rel="noreferrer">
            <S.Description type="link">@demoLink</S.Description>
          </a>
        )}

        <S.TagBox>
          {tag.map((item) => (
            <S.tag key={item}># {item}</S.tag>
          ))}
        </S.TagBox>

        <S.DevTime>{period}</S.DevTime>
      </S.Wrapper>
      {/* <S.wrapper></S.wrapper>
        <S.text>{id} 번</S.text>
        <S.text>포트폴리오 이름: {name}</S.text>
        <S.text>기간: {period}</S.text>
        <S.text>한줄 소개: {intro}</S.text>
        <S.text>skill: {skill}</S.text>
        <S.text>담당업무</S.text>
        {responsibilities.map((item) => (
          <S.text key={item}>{item}</S.text>
        ))}
        <a href={gitUrl} target="_blank" rel="noreferrer">
          <S.text>git: {gitUrl}</S.text>
        </a>
        <a href={demoUrl} target="/blank" rel="noreferrer">
          <S.text>{demoUrl}</S.text>
        </a>
        {tag.map((item) => (
          <S.tag key={item}># {item}</S.tag>
        ))}
      </S.wrapper> */}
    </S.container>
  );
};
export default PopContents;

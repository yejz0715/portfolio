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
      <S.box>yejx0715</S.box>
      <S.wrapper>
        <S.text>{id} 번</S.text>
        <S.text>포트폴리오 이름: {name}</S.text>
        <S.text>기간: {period}</S.text>
        <S.text>한줄 소개: {intro}</S.text>
        <S.text>skill: {skill}</S.text>
        <S.text>담당 업무: {responsibilities}</S.text>
        <S.text>git: {gitUrl}</S.text>
        <S.text>{demoUrl}</S.text>
        {tag.map((item) => (
          <S.tag># {item}</S.tag>
        ))}
      </S.wrapper>
    </S.container>
  );
};
export default PopContents;

import React from "react";
import * as S from "./style.js";
const PopContents = ({
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
    <S.Container>
      <S.UserBox>
        <S.UserImg path={process.env.PUBLIC_URL + "/images/user_yeji.jpg"} />
        yejz0715
      </S.UserBox>
      <S.Wrapper>
        <S.SubTitle> π» νλ‘μ νΈλͺ</S.SubTitle>
        <S.Description>{name}</S.Description>
        <S.SubTitle> πββοΈ μκ°</S.SubTitle>
        <S.Description type="intro">{intro}</S.Description>
        <S.SubTitle>π κ°λ° μ€ν</S.SubTitle>
        {skill.map((item, index) => (
          <S.Description key={index}>. {item}</S.Description>
        ))}
        <S.SubTitle>π₯ λ΄λΉ μλ¬΄</S.SubTitle>
        {responsibilities.map((item, index) => (
          <S.Description key={index}>
            {index + 1}. {item}
          </S.Description>
        ))}
        <S.Link>
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
        </S.Link>
        {tag.map((item, index) => (
          <S.Tag key={index}># {item}</S.Tag>
        ))}

        <S.DevTime>{period}</S.DevTime>
      </S.Wrapper>
    </S.Container>
  );
};
export default PopContents;

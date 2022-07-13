import React from "react";
import * as S from "./style.js";
const Project = ({
  id,
  name,
  period,
  intro,
  skill,
  gitUrl,
  demoUrl,
  images,
  tag,
  handleOnClick,
  isShow,
}) => {
  return (
    <S.Container
      style={{ backgroundImage: `url(${images[0]})` }}
      onClick={handleOnClick}
      isShow={isShow}
    ></S.Container>
  );
};
export default Project;

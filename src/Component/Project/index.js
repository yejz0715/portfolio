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
}) => {
  return (
    <S.Container onClick={handleOnClick}>
      <S.backgroundImage style={{ backgroundImage: `url(${images[0]})` }} />
    </S.Container>
  );
};
export default Project;

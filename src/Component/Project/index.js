import React from "react";
import * as S from "./style.js";
const Project = ({
  // id,
  // name,
  // period,
  // intro,
  // skill,
  // gitUrl,
  // demoUrl,
  // tag,
  images,
  handleOnClick,
}) => {
  return (
    <S.Container
      style={{ backgroundImage: `url(${images[0]})` }}
      onClick={handleOnClick}
    ></S.Container>
  );
};
export default Project;

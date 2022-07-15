import React from "react";
import * as S from "./style.js";
const Project = ({ id, images, handleOnClick }) => {
  return (
    <S.Container
      id={id}
      style={{ backgroundImage: `url(${images[0]})` }}
      onClick={handleOnClick}
    ></S.Container>
  );
};
export default Project;

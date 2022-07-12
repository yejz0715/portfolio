import React from "react";
import * as S from "./style.js";
const Story = ({ id, name, src }) => {
  return (
    <S.container>
      <S.imgWrapper id={id}>
        <S.icon src={src} />
      </S.imgWrapper>
      <S.text>{name}</S.text>
    </S.container>
  );
};
export default Story;

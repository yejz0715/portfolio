import React from "react";
import * as S from "./style.js";
const Story = ({ id, name, src }) => {
  return (
    <S.Container>
      <S.ImgWrapper id={id}>
        <S.Icon src={src} />
      </S.ImgWrapper>
      <S.Text>{name}</S.Text>
    </S.Container>
  );
};
export default Story;

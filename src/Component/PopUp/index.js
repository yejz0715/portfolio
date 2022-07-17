import React from "react";
import PopContents from "../PopContents/index.js";
import PopImgSlider from "../PopImgSlider/index.js";
import * as S from "./style.js";
const PopUp = ({
  id,
  name,
  period,
  intro,
  skill,
  responsibilities,
  gitUrl,
  demoUrl,
  images,
  tag,
  setShowProject,
}) => {
  return (
    <S.Container>
      <PopImgSlider id={id} images={images} />

      <PopContents
        name={name}
        period={period}
        intro={intro}
        skill={skill}
        responsibilities={responsibilities}
        gitUrl={gitUrl}
        demoUrl={demoUrl}
        tag={tag}
      />
      <S.DeleteButton
        onClick={() => {
          setShowProject(false);
        }}
      />
    </S.Container>
  );
};
export default PopUp;

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
    <S.container>
      <PopImgSlider id={id} images={images} />

      <PopContents
        id={id}
        name={name}
        period={period}
        intro={intro}
        skill={skill}
        responsibilities={responsibilities}
        gitUrl={gitUrl}
        demoUrl={demoUrl}
        tag={tag}
      />
      <S.deleteButton
        onClick={() => {
          setShowProject(false);
        }}
      />
    </S.container>
  );
};
export default PopUp;

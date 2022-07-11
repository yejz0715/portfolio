import React, { useState } from "react";
import IntroPresenter from "./IntroPresenter";
const IntroContainer = ({ setFadeOut }) => {
  const [isClicked, setClick] = useState(false);

  const handleOnClickPage = () => {
    setClick(true);
    setTimeout(function () {
      setFadeOut(true);
    }, 900);
  };
  return (
    <IntroPresenter
      handleOnClickPage={handleOnClickPage}
      isClicked={isClicked}
    />
  );
};
export default IntroContainer;

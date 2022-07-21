import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IntroPresenter from "./IntroPresenter";
const IntroContainer = () => {
  const [isClicked, setClick] = useState(false);
  const navigate = useNavigate();
  const handleOnClickPage = () => {
    setClick(true);
    setTimeout(function () {
      navigate("/yejz0715");
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

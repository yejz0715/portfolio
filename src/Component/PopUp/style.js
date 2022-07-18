import styled from "styled-components";
import { FiX } from "react-icons/fi";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  //width: 100%;
  height: 90%;
  min-height: 720px;
  max-height: 891px;
  background-color: black;
`;

export const DeleteButton = styled(FiX)`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 36px;
  height: 36px;
  padding: 10px;
  color: #d5d5d5;
  cursor: pointer;
`;

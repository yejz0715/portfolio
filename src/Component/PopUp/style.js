import styled from "styled-components";
import { FiX } from "react-icons/fi";
export const Container = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 90%;
  min-height: 760px;
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

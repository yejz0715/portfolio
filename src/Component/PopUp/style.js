import styled from "styled-components";
import { FiXSquare } from "react-icons/fi";
export const container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const deleteButton = styled(FiXSquare)`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 36px;
  height: 36px;
  padding: 10px;
  color: #d5d5d5;
`;

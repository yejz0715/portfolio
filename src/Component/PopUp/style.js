import styled from "styled-components";
import { FiX } from "react-icons/fi";
export const container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 720px;
  max-height: 891px;
`;

export const deleteButton = styled(FiX)`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 36px;
  height: 36px;
  padding: 10px;
  color: #d5d5d5;
  cursor: pointer;
`;

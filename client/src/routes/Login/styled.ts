import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: absolute;
  top: 130px;
  left: calc(50%);
  transform: translateX(-50%);
  width: 400px;
  min-height: 80%;
  padding: 50px;
  text-align: center;
`;

export const RegisterContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

export const RegisterButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  color: black;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: 0.2s;
  }
`;

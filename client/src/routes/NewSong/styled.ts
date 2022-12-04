import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding-left: 20px;
  background-color: ${color("secondaryBackground")};
  color: ${color("textPrimary")};
  font-size: 16px;
  margin-top: 10px;

  ::placeholder {
    color: ${color("textSecondary")};
  }
`;

export const FileInput = styled.input`
  margin-top: 20px;
`;

export const FileInputImage = styled.img`
  height: 80px;
  margin-top: 10px;
  margin-right: 10px;

  :hover {
    cursor: default;
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  margin-top: 3rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: ${color("textPrimary")};
  font-size: 16px;

  :hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
  }
`;

import styled from "styled-components";
import { TextField } from "@mui/material";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 98%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color("background")};
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled(TextField)`
  margin-right: 40px !important;
  width: 460px;

  input {
    color: white !important;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  min-width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const AvatarName = styled.p`
  color: ${color("secondaryBackground")};
  transition: 0.2s;
  font-size: ${fontSize("mainText")};
  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const AvatarLine = styled.div`
  width: 1px;
  height: 35px;
  background-color: #fff;
`;

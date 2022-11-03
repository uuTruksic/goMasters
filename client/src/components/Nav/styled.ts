import styled from "styled-components";
import { TextField } from "@mui/material";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color("background")};
`;

export const SearchContainer = styled.div`
  width: 400px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color("secondaryBackground")};
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  width: 365px;
  height: 100%;
  outline: none;
  border: none;
  padding-left: 5px;
  background-color: transparent;
  color: ${color("textPrimary")};
  font-size: ${color("textSecondary")};

  ::placeholder {
    color: ${color("textSecondary")};
  }
`;

export const SearchButton = styled.button`
  width: 35px;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const AvatarName = styled.p`
  color: ${color("textPrimary")};
  margin-left: 10px;
  transition: 0.2s;
  font-size: ${fontSize("secondaryText")};
`;

export const LogAndRegContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RegisterButton = styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${color("secondaryBackground")};
  color: ${color("textPrimary")};
  font-weight: 400;
  font-size: ${fontSize("secondaryText")};

  :hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const LoginButton = styled(RegisterButton)`
  background-color: #616161;
`;

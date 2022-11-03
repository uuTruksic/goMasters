import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  transform: translateX(-50%) translateY(-50%);
  padding: 50px;
  width: 700px;
  background-color: #2d2d2d;
`;

export const AvatarImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const HiddenImageInput = styled.input`
  display: none;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  gap: 2rem;
`;

export const Header = styled.h1`
  font-size: ${fontSize("h1")};
  font-weight: 300;
`;

export const SearchInput = styled.input`
  width: 100%;
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

export const MainButton = styled.button`
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

export const SecondaryButton = styled.div`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #616161;
  color: ${color("textPrimary")};
  font-size: 16px;

  :hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const ChangePassButton = styled(SecondaryButton)`
  width: 130px;
  border-radius: 5px;
`;

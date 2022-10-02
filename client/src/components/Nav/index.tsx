import {
  AvatarContainer,
  AvatarLine,
  AvatarName,
  Container,
  SearchContainer,
  StyledInput,
} from "./styled";

import Logo from "../../assets/icons/logo.svg";
import Avatar from "../../assets/icons/avatar.svg";
import FindImg from "../../assets/icons/find.svg";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
      <SearchContainer>
        <StyledInput
          variant="standard"
          placeholder="Najdi svoji oblíbenou songu"
        ></StyledInput>
        <img src={FindImg} alt="Tlačítko pro vyhledávání" />
      </SearchContainer>
      <AvatarContainer onClick={() => navigate("/prihlaseni")}>
        <AvatarName>Přihlásit se</AvatarName>
        <AvatarLine />
        <img src={Avatar} alt="Avatar" />
      </AvatarContainer>
    </Container>
  );
};

export default Nav;
